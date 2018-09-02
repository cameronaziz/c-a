import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { Folder, File } from './Icons';

import { childrenItems, getItemFill } from './util';
import FileElement from './FileElement';

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
      element, depth, selectElement, currentElementIndex,
    } = this.props;
    const { iconFill, highlightFill } = getItemFill(element, currentElementIndex);
    return (
      <Fragment>
        <g>
          <g transform={`translate(0,${20 * element.offset})`} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
            <g pointerEvents="all" onClick={() => selectElement(element.elementIndex)}>
              {hovered && (
                <rect
                  transform="translate(0,-2)"
                  x="0"
                  y="0"
                  width="calc(100% + 10)"
                  height="20px"
                  fill="rgba(0,0,255,0.15)"
                />
              )}
              {currentElementIndex === element.elementIndex && (
                <rect
                  transform="translate(0,-2)"
                  x="0"
                  y="0"
                  width="calc(100% + 10)"
                  height="20px"
                  fill={`rgba(${highlightFill})`}
                />
              )}
              <g transform={`translate(${depth * 20},0)`}>
                {element.type === 'file' ? (
                  <File fillColor={iconFill} size={0.8} />
                ) : (
                  <Folder isOpen={element.isOpen} size={0.8} />
                )}
                <text fill={iconFill} transform="translate(40,1)" alignmentBaseline="hanging">
                  {element.label}
                </text>
              </g>
            </g>
          </g>
          {childrenItems(element) && (
            <FileElement
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
