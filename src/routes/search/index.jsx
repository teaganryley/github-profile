import React from 'react';
import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
import SearchBar from '../../components/searchBar';

const Search = () => (
  <Grid
    container
    direction="column"
    justifyContent="center"
    alignItems="center"
    sx={{
      height: '100vh',
      bgcolor: '#FAFAFA',
    }}
  >
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid
        item
        sx={{
          color: '#3B4252',
          fontSize: '40px',
          fontStyle: 'italic',
          lineHeight: '50px',
          width: '500px',
          textAlign: 'center',
        }}
      >
        Search Devs
      </Grid>
      <Grid
        item
        sx={{
          // bgcolor: '#8190A5',
          width: '500px',
          height: '50px',
        }}
      >
        <SearchBar />
      </Grid>
    </Grid>
  </Grid>
);

export default Search;
