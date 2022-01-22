import React, {
  useMemo,
  useState,
  useEffect,
} from 'react';
import { useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import debounce from 'lodash.debounce';
import api from '../../services/api';

const SearchBar = () => {
  const [value, setValue] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [options, setOptions] = useState([]);
  // const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  // TODO:
  // Pagination/query limit controls - 30 by default
  // loading behaviour
  // investigate: handleSearch fires even after navigation
  const handleSelect = () => {
    console.log('selection on this value', value);
    if (value) navigate(`profile/${value.login}`);
  };

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
      autoComplete
      includeInputInList={false}
      id="search"
      value={value}
      onSelect={handleSelect}
      onChange={(event, newValue) => {
        // setOptions(newValue ? [newValue, ...options] : options);
        setValue(newValue);
      }}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => setInputValue(newInputValue)}
      options={options}
      filterOptions={x => x}
      getOptionLabel={option => option.login}
      isOptionEqualToValue={(option, value) => option.login === value.login}
      renderInput={params => (
        <TextField {...params} label="Search by username" fullWidth />
      )}
    />
  );
};

export default SearchBar;
