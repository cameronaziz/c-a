const code = `import React, { Fragment, Component } from 'react';
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
          <g transform={\`translate(0,\${20 * element.offset})\`} onMouseEnter={this.onHover} onMouseLeave={this.onLeave}>
            <g pointerEvents="all" onClick={() => selectElement(element.path)}>
              {hovered && <Rect fill="0,0,255,0.15" />}
              {isSelected && <Rect fill="0,0,0,0.3" />}
              <g transform={\`translate(\${(depth * 15) + 5},0)\`}>
                {element.type === 'file' ? (
                  <File fill={iconFill} size={0.3} />
                ) : (
                  <Folder fill={iconFill} isOpen={element.isOpen} size={0.3} />
                )}
                <text fill={iconFill} transform="translate(25,1)" alignmentBaseline="hanging">
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
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'Icons.js'
    ]
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'util.js'
    ]
  },
  {
    line: 6,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'FileElement.js'
    ]
  },
  {
    line: 7,
    location: [
      'src',
      'components',
      'Modal',
      'FileExplorer',
      'Rect.js'
    ]
  }
];

const libraries = ['react','propTypes'];

export default {
  libraries,
  code,
  links,
  name: 'Item.js',
  label: 'Item.js',
};