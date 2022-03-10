import React from 'react';
import PropTypes from 'prop-types';

// TODO: updated needs to be expressed as "Updated [days] ago"

const RepoCard = ({ repo }) => (
  <div>
    <ul>
      <li>{repo.name}</li>
      <li>{repo.description}</li>
      <li>{repo.stargazers_count}</li>
      <li>{repo.updated_at}</li>
    </ul>
  </div>
);

RepoCard.propTypes = {
  repo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    stargazers_count: PropTypes.number.isRequired,
    updated_at: PropTypes.string.isRequired,
  }),
};

export default RepoCard;
