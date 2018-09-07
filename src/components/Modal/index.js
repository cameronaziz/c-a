import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';

import { BackButton, CloseButton } from './Buttons';
import FileExplorer from './FileExplorer';
import { FileTreeContainer, ModalContainer, ModalContent, LibraryLinksContainer, Elements, LibraryLinksOffset } from './styled';
import CodeExplorer from './CodeExplorer';
import { buildTree, findLink, findShortcuts, setOffset } from './util';
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
    displayDefault: true,
  };

  componentWillMount() {
    if (this.props.modalData) {
      const { modalData } = this.props;
      const tree = buildTree(modalData.tree, -1, []);
      const shortcuts = findShortcuts(tree, modalData.shortcuts, 0);
      setOffset(tree, -1);
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
    console.log(event);
    event.preventDefault();
    console.log(event.target, event.currentTarget);
    if (event.target === event.currentTarget) {
      this.props.toggleModal();
    }
  };

  addToStack = ({ code }) => {
    const { stack } = this.state;
    const last = stack[stack.length - 1];
    const isRepeat = last && last.path.every((element, i) => element === code.path[i]);
    if (!isRepeat) {
      const linkLines = [];
      for (let i = 0; i < code.links.length; i += 1) {
        linkLines.push(code.links[i].line);
      }
      code.linkLines = linkLines;
      this.setState(prevState => ({
        displayDefault: false,
        stack: [...prevState.stack, code],
      }));
    }
  };

  clickInlineLink = line => {
    const { stack } = this.state;
    const currentCode = stack[stack.length - 1];
    const data = currentCode.links.find(link => link.line === line);
    const path = data.location.slice(2);
    this.clickShortcut({ location: path });
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
      } else {
        this.addToStack({ code: prevElement });
      }
      setOffset(prevState.tree, -1);
      return prevState;
    });
  };

  findInFolder = (arr, filename) => arr.find((item) => item.label === filename)

  buildByName = (folderPath, tree) => {
    const element = this.findInFolder(tree, folderPath[0]);
    if (folderPath.length > 1) {
      const dataElement = this.findElement(element.path, this.props.modalData.tree);
      const newPath = folderPath.slice(1);
      element.isOpen = true;
      element.children =
        this.buildByName(newPath, buildTree(dataElement.children, -1, element.path));
    }
    return tree;
  }

  findByPath = (folderPath, tree) => {
    const element = this.findInFolder(tree, folderPath[0]);
    if (folderPath.length > 1) {
      const newPath = folderPath.slice(1);
      return this.findByPath(newPath, element.children);
    }
    return element.path;
  }

  clickShortcut = (shortcut) => {
    const { tree } = this.state;
    const { location } = shortcut;
    const newTree = this.buildByName(location, tree, 0);
    const selectedPath = this.findByPath(location, newTree);
    this.setState({
      tree: newTree,
      selectedPath,
    }, this.selectElement(selectedPath));
  }

  render() {
    const {
      stack, tree, data, selectedPath, displayDefault,
    } = this.state;
    const { toggleModal } = this.props;
    const current = stack[stack.length - 1] || {};
    return (
      <Fragment>
        <ModalContainer>
          <ModalContent>
            <LibraryLinksOffset />
            <LibraryLinksContainer>
              <LibraryLinks
                current={current}
                data={data}
                clickShortcut={this.clickShortcut}
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
              <CodeExplorer current={current} displayDefault={displayDefault} clickInlineLink={this.clickInlineLink} />
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
