import React, { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';
import api from '../../services/api';

const SearchBar = () => {
  const [options, setOptions] = useState([]);
  const navigate = useNavigate();

  const handleSearch = useMemo(() => debounce(query => {
    api.get(`/search/users?${query}`)
      .then(({ data }) => {
        console.log('api response', data);
        setOptions([...data.items, ...options]);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, 400), []);

  const handleInputChange = (event, inputValue) => handleSearch(`q=${encodeURIComponent(`${inputValue} in:login`)}`);
  const handleOnChange = (event, value, reason) => (reason === 'selectOption' && value?.login) && navigate(`profile/${value.login}`);

  return (
    <Autocomplete
      autoComplete
      includeInputInList={false}
      id="search"
      onInputChange={handleInputChange}
      onChange={handleOnChange}
      options={options}
      getOptionLabel={({ login }) => login}
      isOptionEqualToValue={(option, value) => option.login === value.login}
      renderInput={params => (
        <TextField {...params} label="Search by username" fullWidth />
      )}
    />
  );
};

export default SearchBar;
