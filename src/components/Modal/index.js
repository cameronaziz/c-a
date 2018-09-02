import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import { fromJS } from 'immutable';

import { BackButton, CloseButton } from './Buttons';
import FileExplorer from './FileExplorer';
import { FileTreeContainer, ModalContainer, ModalContent, LibraryLinksContainer, Elements, LibraryLinksOffset } from './styled';
import dataInput from '../../data/projectLibraries/anyGameTickets';
import CodeExplorer from './CodeExplorer';
import { buildTree, findLink, findShortcuts } from './util';
import { findElement, findStatus } from './FileExplorer/util';
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
    rawTree: [],
    stack: [],
  };

  componentWillMount() {
    if (!dataInput) {
      return;
    }
    this.setState({
      data: dataInput,
    });
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
    if (!last || last.elementIndex !== code.elementIndex) {
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

  click = line => {
    const { stack, tree } = this.state;
    const currentCode = stack[stack.length - 1];
    const data = currentCode.links.find(link => link.line === line);
    const newPage = findLink(data.location, tree, 0);
    if (newPage) {
      this.addToStack({ code: newPage });
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

  selectElement = index => {
    const { tree } = this.state;
    const element = findElement(tree, index, []);
    const status = findStatus(element.path, tree);
    const elementPath = [];
    for (let j = 0; j <= element.path.length - 1; j += 1) {
      this.setState(prevState => {
        const stateTree = j === 0 ? this.state.rawTree : prevState.tree;
        elementPath.push(element.path[j]);
        const immutable = fromJS(stateTree);
        const newStatus = j === element.path.length - 1 ? !status : true;
        let newTree = immutable.setIn([...elementPath, 'isOpen'], newStatus).toJS();
        elementPath.push('children');
        if (j === element.path.length - 1) {
          elementPath.pop();
          const data = fromJS(newTree)
            .getIn(elementPath)
            .toJS();
          if (data.code) {
            this.addToStack({ code: data });
          }
          newTree = this.offsetOpen(newTree);
        }
        return {
          tree: newTree,
        };
      });
    }
  };

  renderChart = data => {
    const tree = this.offsetOpen(buildTree(data.tree, -1));
    const shortcuts = findShortcuts(tree, data.shortcuts, 0);
    this.setState({
      shortcuts,
      tree,
      rawTree: tree,
    });
  };

  render() {
    const {
      stack, tree, data, shortcuts,
    } = this.state;
    const { toggleModal } = this.props;
    const current = stack[stack.length - 1] || {};
    console.log(tree);
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
                  current={current}
                  offsetOpen={this.offsetOpen}
                  tree={tree}
                  size="100"
                  selectElement={this.selectElement}
                />
              )}
              </FileTreeContainer>
              {data.isLimited && <WhyNotification />}
              <CodeExplorer current={current} click={this.click} />
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
  modalData: PropTypes.shape({}),
  toggleModal: PropTypes.func.isRequired,
};

Modal.defaultProps = {
  modalData: undefined,
};

export default Modal;
