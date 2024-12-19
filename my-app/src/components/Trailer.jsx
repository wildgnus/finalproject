import React from 'react';
import PropTypes from 'prop-types'; // Ensure PropTypes is correctly imported

const Trailer = ({ trailer }) => {
  if (!trailer) {
    return <div>No trailer available</div>;
  }

  return (
    <div>
      {/* Example of how you might display the trailer */}
      <h3>{trailer.title}</h3>
      <p>{trailer.overview}</p>
      <iframe
        src={`https://www.youtube.com/embed/${trailer.key}`}
        title={trailer.title}
        width="100%"
        height="400px"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

// Prop types validation
Trailer.propTypes = {
  trailer: PropTypes.shape({
    title: PropTypes.string.isRequired, // Ensure it's a string and required
    overview: PropTypes.string, // Optional string
    key: PropTypes.string.isRequired, // Ensure key is a string and required
  }).isRequired, // `trailer` should always be passed
};

export default Trailer;
