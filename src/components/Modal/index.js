import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import CloseButton from './CloseButton';
import FileTree from './FileExplorer/FileTree';
import { FileTreeContainer, ModalContainer, ModalContent } from './styled';
import dataInput from '../projectLibraries/anyGameTickets';
import Code from './Code';

class Modal extends Component {
  state = {
    tree: [],
    stack: [],
  };

  componentWillMount() {
    if (!dataInput) {
      return;
    }
    this.renderChart(dataInput);
    if (this.props.modalData) {
      this.addToStack(this.props.modalData);
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction = () => {
    this.props.toggleModal();
  };

  clickContainer = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  globalIndex = -1;

  addChildren = arr =>
    arr.map(element => {
      this.globalIndex += 1;
      if (!element.items) {
        return {
          offset: this.globalIndex,
          elementIndex: this.globalIndex,
          type: 'file',
          ...element,
        };
      }
      return {
        offset: this.globalIndex,
        elementIndex: this.globalIndex,
        label: element.label,
        children: this.addChildren(element.items),
        type: 'folder',
        isOpen: false,
        name: element.name,
      };
    });

  addToStack = ({ code }) => {
    const linkLines = [];
    for (let i = 0; i < code.links.length; i += 1) {
      linkLines.push(code.links[i].line);
    }
    code.linkLines = linkLines;
    this.setState(prevState => ({
      stack: [...prevState.stack, code],
    }));
  };

  findLink = (path, tree, index) => {
    const found = tree.find(element => element.name === path[index]);
    if (path.length === index + 1) {
      return found;
    }
    return this.findLink(path, found.children, index + 1);
  };

  click = line => {
    const { stack, tree } = this.state;
    const currentCode = stack[stack.length - 1];
    const data = currentCode.links.find(link => link.line === line);
    const newPage = this.findLink(data.location, tree, 0);
    if (newPage) {
      this.addToStack({ code: newPage });
    }
  };

  goBack = () => {
    this.setState(prevState => ({
      stack: prevState.stack.pop(),
    }));
  };

  recusiveOpen = tree => {
    for (let i = 0; i < tree.length; i += 1) {
      this.index += 1;
      tree[i].offset = this.index;
      if (tree[i].isOpen && tree[i].children) {
        this.recusiveOpen(tree[i].children);
      }
    }
    return tree;
  };

  offsetOpen = tree => {
    this.index = -1;
    return this.recusiveOpen(tree);
  };

  renderChart = data => {
    this.globalIndex = -1;
    const tree = this.offsetOpen(this.addChildren(data, this.globalIndex));
    this.setState({
      tree,
    });
  };

  render() {
    const { stack, tree } = this.state;
    const { toggleModal } = this.props;
    const currentCode = stack[stack.length - 1] || {};
    return (
      <Fragment>
        {/* {stack.length > 1 && <BackButton goBack={this.goBack} />} */}
        <ModalContainer
          role="button"
          tabIndex="0"
          style={{ outline: 'none' }}
          onKeyUp={this.clickContainer}
          onClick={this.clickContainer}
        >
          <ModalContent>
            <FileTreeContainer>
              {tree.length > 0 && (
                <FileTree offsetOpen={this.offsetOpen} tree={tree} size="100" setCode={this.addToStack} />
              )}
            </FileTreeContainer>
            <Code code={currentCode} click={this.click} />
          </ModalContent>
        </ModalContainer>
        <CloseButton toggleModal={toggleModal} />
      </Fragment>
    );
  }
}

Modal.propTypes = {
  modalData: PropTypes.shape({}),
  toggleModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalData: undefined,
};

export default Modal;
