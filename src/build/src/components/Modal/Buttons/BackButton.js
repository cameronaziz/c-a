const code = `import React from 'react';
import PropTypes from 'prop-types';

const BackButton = ({ goBack }) => (
  <span className="absolute z-50 pin-t pin-b pin-l pl-8 pt-8">
    <button style={{ outline: 'none' }} className="relative" type="button" onClick={goBack}>
      <svg
        role="button"
        className="h-8 w-8 text-grey hover:text-grey-darkest"
        version="1.1"
        id="Capa_1"
        x="0px"
        y="0px"
        width="512px"
        height="512px"
        viewBox="0 0 451.846 451.847"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 345.441 203.554 L 151.154 9.273 C 138.795 -3.092 118.757 -3.092 106.404 9.273 C 94.05 21.627 94.05 41.664 106.404 54.017 L 278.318 225.926 L 106.409 397.829 C 94.055 410.188 94.055 430.223 106.409 442.577 C 118.763 454.936 138.8 454.936 151.159 442.577 L 345.446 248.293 C 351.623 242.113 354.708 234.022 354.708 225.927 C 354.708 217.828 351.617 209.731 345.441 203.554 Z"
          fill="black"
          transform="matrix(-1, 0, 0, -1, 451.846527, 451.845514)"
        />
        <title>Back</title>
      </svg>
    </button>
  </span>
);

BackButton.propTypes = {
  goBack: PropTypes.func.isRequired,
};

export default BackButton;
`;

const links = [];

export default {
  code,
  links,
  name: 'BackButton.js',
  label: 'BackButton.js',
};