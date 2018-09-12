const code = `import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import * as LibraryIcons from '../LibraryIcons';
import InteractiveElement from '../Common/InteractiveElement';
import { camelCase } from './util';

const LibraryLinks = ({
  current, data, clickShortcut,
}) => (
  <Fragment>
    {data.libraries &&
      data.libraries.map(library => {
        const shortcut = data.shortcuts.find((element) => element.library === library);
        const LibraryIcon = LibraryIcons[library];
        const fill = !current.code || (current.libraries && current.libraries.includes(library)) ? undefined : '#ddd';
        const style = {
          cursor: 'default',
        };
        if (shortcut) {
          style.cursor = 'pointer';
        }
        const click = {
          onClickFunction: clickShortcut,
          parameters: shortcut,
        };
        return (
          <span data-tip={\`Jump to \${camelCase(library)}\`} key={library}>
            <ReactTooltip place="top" type="dark" effect="float" />
            <InteractiveElement style={style} onClick={click} Element="span" >
              <LibraryIcon size={50} fill={fill} />
            </InteractiveElement>
          </span>
        );
      })}
  </Fragment>
);

LibraryLinks.propTypes = {
  clickShortcut: PropTypes.func.isRequired,
  data: PropTypes.shape({
    libraries: PropTypes.arrayOf(PropTypes.string),
    shortcuts: PropTypes.arrayOf(PropTypes.shape({
    })),
  }).isRequired,
  current: PropTypes.shape({
    code: PropTypes.string,
  }).isRequired,
};

export default LibraryLinks;


// <div data-tip="Take a tour" style={{ width: '100%' }}>
// <ReactTooltip place="top" type="dark" effect="float" />
// <InteractiveElement style={{ cursor: 'pointer', float: 'right', marginRight: '50px' }} onClick={startTour} Element="span" >
//  <LibraryIcons.Tour size={50} />
// </InteractiveElement>
// </div>
`;

const links = [
  {
    line: 5,
    location: [
      'src',
      'components',
      'LibraryIcons.js'
    ]
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'InteractiveElement.js'
    ]
  },
  {
    line: 7,
    location: [
      'src',
      'components',
      'Modal',
      'util.js'
    ]
  }
];

const libraries = ['react','propTypes','reactTooltip'];

export default {
  libraries,
  code,
  links,
  name: 'LibraryLinks.js',
  label: 'LibraryLinks.js',
};