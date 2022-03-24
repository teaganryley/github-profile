import React from 'react';
import PropTypes from 'prop-types';

const UserCard = ({ profile }) => (
  <div>
    {profile.name}
  </div>
);

UserCard.propTypes = {
  profile: PropTypes.shape({
    avatar_url: PropTypes.string,
    name: PropTypes.string,
    login: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    // total stars?
    company: PropTypes.string,
    location: PropTypes.string,
    email: PropTypes.string,
    blog: PropTypes.string,
    twitter_username: PropTypes.string,
  }),
};

export default UserCard;
