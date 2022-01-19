import React, {
  useMemo,
  useState,
  useEffect,
} from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';
import api from '../../services/api';

const SearchBar = () => {
  // selected value
  const [value, setValue] = useState(null);
  // user input
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useMemo(() => debounce(query => {
    api.get(`/search/users?${query}`)
      .then(response => {
        console.log('api response', response);
      })
      .catch(error => {
        console.log('error', error);
      });
  }, 500), []);

  useEffect(
    () => {
      // eslint-disable-next-line prefer-template
      const queryString = 'q=' + encodeURIComponent(`${inputValue} in:login`);
      handleSearch(queryString);
    },
    [inputValue],
  );

  return (
    <Autocomplete
      id="search"
      value={value}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      renderInput={params => (
        <TextField {...params} label="Search by username" fullWidth />
      )}
      filterOptions={x => x}
      options={options}
    />
  );
};

export default SearchBar;
