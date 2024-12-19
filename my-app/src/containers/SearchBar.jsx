import React, { useState } from 'react';
import { Navbar, Image } from 'react-bootstrap';
import TMDBlogo from '../images/themoviedb_green.svg';
import logo from '../images/logo_square.svg';
import { useNavigate } from 'react-router-dom';
import Autosuggest from 'react-autosuggest';
import './search.css';
import { URL_SEARCH, API_KEY_ALT, URL_IMG, IMG_SIZE_XSMALL } from '../const';

const SearchBar = (props) => {
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();

  const onChange = (event, { newValue }) => {
    setValue(newValue);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      return handleSubmit(value);
    }
  };

  const handleSubmit = (searchText) => {
    navigate(`/search/${searchText}`);
    setValue('');
  };

  const getSuggestionValue = (suggestion) => {
    return suggestion.title;
  };

  const onSuggestionsFetchRequested = ({ value }) => {
    const trimmedValue = value.trim();

    if (trimmedValue.length > 0) {
      const url = `${URL_SEARCH}${trimmedValue}${API_KEY_ALT}`;
      fetch(url)
        .then((response) => response.json())
        .then((json) => json.results)
        .then((data) => {
          const results = data.map((movie) => ({
            id: movie.id,
            title: movie.title,
            img: movie.poster_path,
            year: movie.release_date ? movie.release_date.substring(0, 4) : '0000',
          }));
          setSuggestions(results);
        })
        .catch((error) => console.log('Exception to get Suggestions', error));
    } else {
      setSuggestions([]);
    }
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const renderSuggestion = (suggestion) => {
    return (
      <div>
        <img
          alt=""
          className="searchResult-image"
          src={suggestion.img == null ? logo : `${URL_IMG}${IMG_SIZE_XSMALL}${suggestion.img}`}
        />
        <div className="searchResult-text">
          <div className="searchResult-name">{suggestion.title}</div>
          {suggestion.year}
        </div>
      </div>
    );
  };

  const onSuggestionSelected = (event, { suggestion }) => {
    if (event.key === 'Enter') event.preventDefault();
    navigate(`/movie/${suggestion.id}`);
    setValue('');
  };

  const brandStyle = {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    paddingLeft: 10,
    fontSize: '1.2em',
  };

  const imgStyle = {
    height: '200%',
    width: 'auto',
    paddingLeft: '10px',
    marginTop: '-8px',
    display: 'inline-block',
  };

  const inputProps = {
    value,
    onChange,
    onKeyDown: handleKeyDown,
    placeholder: 'Search Movie Title...',
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>
        <a href="#/">
          <span style={brandStyle}>{props.brand}</span>
          <Image style={imgStyle} src={TMDBlogo} />
        </a>
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Autosuggest
          suggestions={suggestions}
          onSuggestionsFetchRequested={onSuggestionsFetchRequested}
          onSuggestionSelected={onSuggestionSelected}
          onSuggestionsClearRequested={onSuggestionsClearRequested}
          getSuggestionValue={getSuggestionValue}
          renderSuggestion={renderSuggestion}
          inputProps={inputProps}
        />
      </Navbar.Collapse>
    </Navbar>
  );
};

export default SearchBar;
