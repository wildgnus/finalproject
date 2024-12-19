import { combineReducers } from 'redux';
import {
  FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,
  FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE,
  FETCH_STAR_SUCCESS, FETCH_STAR_FAILURE,
  FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE,
  FETCH_TRAILERS, FETCH_TRAILERS_SUCCESS, FETCH_TRAILERS_FAILURE,
  SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE
} from '../actions';

// Default state structure
const defaultStateList = {
  isFetching: false,
  items: [],
  error: {}
};

const defaultState = {
  isFetching: false,
  item: {},
  error: {}
};

// Reducers for movies list, movie details, cast list, trailer list, etc.
const movieList = (state = defaultStateList, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
    case SEARCH_MOVIE:
      return { ...state, isFetching: true };
    case FETCH_MOVIES_SUCCESS:
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, isFetching: false, items: action.data };
    case FETCH_MOVIES_FAILURE:
    case SEARCH_MOVIE_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

const castList = (state = defaultStateList, action) => {
  switch (action.type) {
    case FETCH_CASTS:
      return { ...state, isFetching: true };
    case FETCH_CASTS_SUCCESS:
      return { ...state, isFetching: false, items: action.data };
    case FETCH_CASTS_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

const trailerList = (state = defaultStateList, action) => {
  switch (action.type) {
    case FETCH_TRAILERS:
      return { ...state, isFetching: true };
    case FETCH_TRAILERS_SUCCESS:
      return { ...state, isFetching: false, items: action.data };
    case FETCH_TRAILERS_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_MOVIE:
      return { ...state, isFetching: true };
    case FETCH_MOVIE_SUCCESS:
      return { ...state, isFetching: false, item: action.data };
    case FETCH_MOVIE_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

const starDetail = (state = defaultState, action) => {
  switch (action.type) {
    case FETCH_STAR_SUCCESS:
      return { ...state, isFetching: false, item: action.data };
    case FETCH_STAR_FAILURE:
      return { ...state, isFetching: false, error: action.data };
    default:
      return state;
  }
};

// Updated input reducer to store the search query as well
const input = (state = { query: '', isFetching: false }, action) => {
  switch (action.type) {
    case SEARCH_MOVIE:
      return { ...state, isFetching: true, query: action.query };
    case SEARCH_MOVIE_SUCCESS:
      return { ...state, isFetching: false, query: '' }; // Clear input after successful search
    case SEARCH_MOVIE_FAILURE:
      return { ...state, isFetching: false };
    default:
      return state;
  }
};

// Combine all reducers into one
const movieApp = combineReducers({
  movieList,
  castList,
  trailerList,
  movieDetail,
  starDetail,
  input
});

export default movieApp;
