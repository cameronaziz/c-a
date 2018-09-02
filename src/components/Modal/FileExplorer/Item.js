import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Folder, File } from './Icons';

import { childrenItems, findSelection } from './util';
import FileElement from './FileElement';
import Rect from './Rect';

class Item extends Component {
  state = { hovered: false };

  onHover = () => {
    this.setState({
      hovered: true,
    });
  };

  onLeave = () => {
    this.setState({
      hovered: false,
    });
  };

  render() {
    const { hovered } = this.state;
    const {
      element, depth, selectElement, currentElementIndex, currentPath, folderIndex,
    } = this.props;
    const { childPath, isSelected, iconFill } = findSelection(currentPath, folderIndex);
    return (
      <Fragment>
        <g>
          <g transform={`translate(0,${20 * element.offset})`} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
            <g pointerEvents="all" onClick={() => selectElement(element.path)}>
              {hovered && <Rect fill="0,0,255,0.15" />}
              {isSelected && <Rect fill="0,0,0,0.3" />}
              <g transform={`translate(${depth * 20},0)`}>
                {element.type === 'file' ? (
                  <File fill={iconFill} size={0.8} />
                ) : (
                  <Folder fill={iconFill} isOpen={element.isOpen} size={0.8} />
                )}
                <text fill={iconFill} transform="translate(40,1)" alignmentBaseline="hanging">
                  {element.label}
                </text>
              </g>
            </g>
          </g>
          {childrenItems(element) && (
            <FileElement
              selectedPath={childPath}
              tree={element.children}
              depth={depth + 1}
              selectElement={selectElement}
              currentElementIndex={currentElementIndex}
            />
          )}
        </g>
      </Fragment>
    );
  }
}

Item.propTypes = {
  folderIndex: PropTypes.number.isRequired,
  currentPath: PropTypes.arrayOf(PropTypes.number).isRequired,
  depth: PropTypes.number.isRequired,
  element: PropTypes.shape({
    label: PropTypes.string,
    elementIndex: PropTypes.number,
  }).isRequired,
  currentElementIndex: PropTypes.number,
  selectElement: PropTypes.func.isRequired,
};

Item.defaultProps = {
  currentElementIndex: undefined,
};

export default Item;
