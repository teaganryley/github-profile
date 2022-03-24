import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import UserCard from '../../components/userCard';
import RepoCard from '../../components/repoCard';
import api from '../../services/api';

// theming

const Profile = () => {
  const [repoList, setRepoList] = useState([]);
  const [profile, setProfile] = useState({});
  const { login } = useParams();

  useEffect(() => {
    // get profile data
    api.get(`/users/${login}`)
      .then(({ data }) => {
        console.log('user profile response', data);
        // reposUrl = data.repos_url;
        setProfile(data);
      })
      .catch(error => {
        console.log(error);
      });

    // get repos list
    api.get(`/users/${login}/repos`)
      .then(({ data }) => {
        console.log('response from user repo endpoint', data);
        setRepoList(data.sort((a, b) => a.stargazers_count - b.stargazers_count));
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <UserCard profile={profile} />
      </Grid>
      <Grid item xs={9}>
        {repoList.map(repo => (
          <RepoCard repo={repo} />
        ))}
      </Grid>
    </Grid>
  );
};

export default Profile;
