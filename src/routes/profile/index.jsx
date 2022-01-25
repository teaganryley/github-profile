import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../services/api';

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
    <div>
      <h1>Profile page</h1>
      <ul>
        {repoList.map(repo => (
          <li>
            {repo.full_name}
          </li>
        ))}
      </ul>
      {console.log(profile)}
    </div>
  );
};

export default Profile;
