import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import ReactTooltip from 'react-tooltip';

import * as LibraryIcons from '../LibraryIcons';
import InteractiveElement from '../Common/InteractiveElement';
import { camelCase } from './util';

const LibraryLinks = ({
  current, libraries, shortcuts, selectElement, startTour,
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
          index = shortcut.path;
          style.cursor = 'pointer';
        }
        return (
          <span data-tip={`Jump to ${camelCase(library)}`} key={library}>
            <ReactTooltip place="top" type="dark" effect="float" />
            <InteractiveElement style={style} onClick={() => select(index)} Element="span" >
              <LibraryIcon size={50} fill={fill} />
            </InteractiveElement>
          </span>
        );
      })}
    <div data-tip="Take a tour" style={{ width: '100%' }}>
      <ReactTooltip place="top" type="dark" effect="float" />
      <InteractiveElement style={{ cursor: 'pointer', float: 'right', marginRight: '50px' }} onClick={startTour} Element="span" >
        <LibraryIcons.Tour size={50} />
      </InteractiveElement>
    </div>
  </Fragment>
);

LibraryLinks.propTypes = {
  selectElement: PropTypes.func,
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
  selectElement: () => {},
};

export default LibraryLinks;
