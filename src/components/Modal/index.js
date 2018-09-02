import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { BackButton, CloseButton } from './Buttons';
import FileExplorer from './FileExplorer';
import { FileTreeContainer, ModalContainer, ModalContent, LibraryLinksContainer, Elements, LibraryLinksOffset } from './styled';
import CodeExplorer from './CodeExplorer';
import { buildTree, findLink, findShortcuts, setOffset, arraysIdentical } from './util';
import WhyNotification from './WhyNotification';
import LibraryLinks from './LibraryLinks';

/**
 * Modal
 *
 * @reactProps {function} toggleModal - Function to be called to toggle the modal.
 *
 */

class Modal extends Component {
  state = {
    shortcuts: [],
    data: {},
    tree: [],
    stack: [],
    selectedPath: undefined,
  };

  componentWillMount() {
    if (this.props.modalData) {
      const { modalData } = this.props;
      const tree = buildTree(modalData.tree, -1, []);
      const shortcuts = findShortcuts(tree, modalData.shortcuts, 0);
      this.setState({
        data: modalData,
        shortcuts,
        tree,
      });
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.escFunction, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.escFunction, false);
  }

  escFunction = e => {
    if (e.keyCode === 27) {
      this.props.toggleModal();
    }
  };

  clickContainer = event => {
    event.preventDefault();
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  addToStack = ({ code }) => {
    const { stack } = this.state;
    const last = stack[stack.length - 1];
    if (!last || !arraysIdentical(last.path,code.path)) {
      const linkLines = [];
      for (let i = 0; i < code.links.length; i += 1) {
        linkLines.push(code.links[i].line);
      }
      code.linkLines = linkLines;
      this.setState(prevState => ({
        stack: [...prevState.stack, code],
      }));
    }
  };

  clickInlineLink = line => {
    const { stack, tree } = this.state;
    const currentCode = stack[stack.length - 1];
    const data = currentCode.links.find(link => link.line === line);
    const newPage = findLink(data.location, tree, 0);
    if (newPage) {
      this.selectElement(newPage.path);
    }
  };

  goBack = () => {
    this.setState(prevState => {
      prevState.stack.pop();
      return {
        ...prevState.stack,
      };
    });
  };

  findElement = (path, arr) => {
    if (path.length === 1) {
      return arr[path[0]];
    }
    const nextPath = path.slice(1);
    return this.findElement(nextPath, arr[path[0]].children);
  }

  selectElement = (path) => {
    this.setState(prevState => {
      prevState.selectedPath = path;
      const prevElement = this.findElement(path, prevState.tree);
      const dataElement = this.findElement(path, this.props.modalData.tree);
      if (dataElement.children) {
        const children = buildTree(dataElement.children, -1, path);
        prevElement.children = children;
        prevElement.isOpen = !prevElement.isOpen;
        setOffset(prevState.tree, -1);
      } else {
        this.addToStack({ code: prevElement });
      }
      return prevState;
    });
  };


  render() {
    const {
      stack, tree, data, shortcuts, selectedPath,
    } = this.state;
    console.log(stack);
    const { toggleModal } = this.props;
    const current = stack[stack.length - 1] || {};
    return (
      <Fragment>
        <ModalContainer
          role="button"
          tabIndex="0"
          onKeyUp={this.clickContainer}
          onClick={this.clickContainer}
        >
          <ModalContent>
            <LibraryLinksOffset />
            <LibraryLinksContainer>
              <LibraryLinks
                current={current}
                libraries={data.libraries}
                shortcuts={shortcuts}
                selectElement={this.selectElement}
              />
            </LibraryLinksContainer>
            <Elements>
              <FileTreeContainer shorten={!!data.isLimited} >
                {tree.length > 0 && (
                <FileExplorer
                  selectedPath={selectedPath}
                  current={current}
                  tree={tree}
                  selectElement={this.selectElement}
                />
              )}
              </FileTreeContainer>
              {data.isLimited && <WhyNotification />}
              <CodeExplorer current={current} clickInlineLink={this.clickInlineLink} />
            </Elements>
            {stack.length > 1 && <BackButton goBack={this.goBack} />}
            <CloseButton toggleModal={toggleModal} />
          </ModalContent>
        </ModalContainer>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  modalData: PropTypes.shape({
    tree: PropTypes.arrayOf(PropTypes.shape({

    })),
  }),
  toggleModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalData: undefined,
};

export default Modal;
