import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import * as LibraryIcons from '../LibraryIcons';
import InteractiveElement from '../Common/InteractiveElement';

const LibraryLinks = ({
  current, libraries, shortcuts, selectElement,
}) => (
  <Fragment>
    {libraries &&
      libraries.map(library => {
        const shortcut = shortcuts.find((element) => element.shortcut === library);
        const LibraryIcon = LibraryIcons[library];
        const fill = !current.code || (current.libraries && current.libraries.includes(library)) ? undefined : '#ddd';
        let select = () => {};
        let index;
        const style = {
          cursor: 'default',
        };
        if (shortcut) {
          select = selectElement;
          index = shortcut.elementIndex;
          style.cursor = 'pointer';
        }
        return (
          <span key={library}>
            <InteractiveElement style={style} onClick={() => select(index)} Element="span" >
              <LibraryIcon size={50} fill={fill} />
            </InteractiveElement>
          </span>
        );
      })}
  </Fragment>
);

LibraryLinks.propTypes = {
  shortcuts: PropTypes.arrayOf(PropTypes.shape({
    elementIndex: PropTypes.number,
  })).isRequired,
  libraries: PropTypes.arrayOf(PropTypes.string),
  current: PropTypes.shape({
    code: PropTypes.string,
  }).isRequired,
};

LibraryLinks.defaultProps = {
  libraries: undefined,
};

export default LibraryLinks;
