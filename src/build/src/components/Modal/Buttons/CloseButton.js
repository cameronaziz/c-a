const code = `import React from 'react';
import PropTypes from 'prop-types';

const CloseButton = ({ toggleModal }) => (
  <span className="absolute z-50 pin-t pin-b pin-r pr-4 pt-6">
    <button style={{ outline: 'none' }} className="relative" type="button" onClick={toggleModal}>
      <svg
        className="h-12 w-12 text-grey hover:text-grey-darkest"
        role="button"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <title>Close</title>
        <path
          fill="black"
          d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
        />
      </svg>
    </button>
  </span>
);

CloseButton.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default CloseButton;
`;

const links = [];

const libraries = ['react','propTypes','svg'];

export default {
  libraries,
  code,
  links,
  name: 'CloseButton.js',
  label: 'CloseButton.js',
};