import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';
import FileElement from './FileElement';
import WhyNotification from '../WhyNotification';

class FileTree extends Component {
  state = {
    tree: this.props.tree,
  };

  getParent = (tree, index) => {
    for (let i = 0; i < tree.length; i += 1) {
      if (tree[i].elementIndex > index) {
        return i - 1;
      }
    }
    return tree.length - 1;
  };

  findElement = (tree, index, path) => {
    const parent = this.getParent(tree, index);
    path.push(parent);
    if (tree[parent].elementIndex === index) {
      return {
        path,
      };
    } else if (tree[parent].children) {
      return this.findElement(tree[parent].children, index, path);
    }
    const found = tree.findIndex(element => element.elementIndex === index);
    path.push(found);
    return {
      path,
    };
  };

  index = -1;

  findStatus = path => {
    const { tree } = this.state;
    const immutableTree = fromJS(tree);
    const elementPath = [];
    for (let j = 0; j <= path.length - 1; j += 1) {
      elementPath.push(path[j]);
      elementPath.push('children');
    }
    elementPath.pop();
    return immutableTree.getIn([...elementPath, 'isOpen']);
  };

  selectElement = index => {
    const { tree } = this.state;
    const element = this.findElement(tree, index, []);
    const status = this.findStatus(element.path);
    const elementPath = [];
    for (let j = 0; j <= element.path.length - 1; j += 1) {
      this.setState(prevState => {
        const stateTree = j === 0 ? this.props.tree : prevState.tree;
        elementPath.push(element.path[j]);
        const immutable = fromJS(stateTree);
        const newStatus = j === element.path.length - 1 ? !status : true;
        let newTree = immutable.setIn([...elementPath, 'isOpen'], newStatus).toJS();
        elementPath.push('children');
        console.log(element.path);
        if (j === element.path.length - 1) {
          elementPath.pop();
          const data = fromJS(newTree)
            .getIn(elementPath)
            .toJS();
          if (data.code) {
            this.props.setCode({ code: data });
          }
          newTree = this.props.offsetOpen(newTree);
        }
        return {
          tree: newTree,
        };
      });
    }
  };

  render() {
    const { tree } = this.state;
    return (
      <div style={{ marginTop: '20px' }}>
        <svg style={{ paddingBottom: '92%' }} width="100%">
          <g transform="translate(10, 10)">
            <FileElement tree={tree} depth={0} selectElement={this.selectElement} />
          </g>
        </svg>
        <WhyNotification />
      </div>
    );
  }
}

FileTree.propTypes = {
  offsetOpen: PropTypes.func.isRequired,
  tree: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  setCode: PropTypes.func.isRequired,
};

export default FileTree;
