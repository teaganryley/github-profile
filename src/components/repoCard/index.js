/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

// TODO: updated needs to be expressed as "Updated [days] ago"

const RepoCard = ({
  full_name, description, stargazers_count, updated_at,
}) => (
  <div />
);

RepoCard.propTypes = {
  full_name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  stargazers_count: PropTypes.number.isRequired,
  updated_at: PropTypes.string.isRequired,
};

export default RepoCard;
