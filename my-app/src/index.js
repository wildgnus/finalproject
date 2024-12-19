import React from 'react';
import ReactDOM from 'react-dom/client'; // For React 18+
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';  // Correct import in newer versions

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports for v6+
import { composeWithDevTools } from '@redux-devtools/extension';
import App from './App';
import movieApp from './reducers';
import './index.css';
import { MovieContainer, MovieDetail, StarDetail } from './containers';
import { DisplayMsg } from './components';

// Create store with middleware
let store = createStore(
  movieApp,
  composeWithDevTools(applyMiddleware(thunk)) // Use the 'thunk' middleware here
);

// For React 18+ use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application
root.render(
  <Provider store={store}>
    <Router> {/* Use BrowserRouter or HashRouter for routing */}
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<MovieContainer />} />
          <Route path="/movie/:id" element={<MovieDetail />} />
          <Route path="/star/:id" element={<StarDetail />} />
          <Route path="/search/:keyword" element={<MovieContainer />} />
          <Route path="*" element={<DisplayMsg />} />
        </Route>
      </Routes>
    </Router>
  </Provider>
);
