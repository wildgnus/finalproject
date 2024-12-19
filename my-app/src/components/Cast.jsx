import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes from the 'prop-types' package
import { Image } from 'react-bootstrap';
import { URL_IMG, IMG_SIZE_SMALL } from '../const';

export default function Cast({ cast }) {
  return (
    <Image src={URL_IMG + IMG_SIZE_SMALL + cast.profile_path} alt={cast.name} rounded>
      <p>{cast.name}</p>
    </Image>
  );
}

// Updated propTypes to use 'PropTypes' from 'prop-types' package
Cast.propTypes = {
  cast: PropTypes.shape({
    profile_path: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }).isRequired, // Add isRequired if it's mandatory for the 'cast' prop
};
