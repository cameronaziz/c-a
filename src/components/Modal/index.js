import React, { Fragment, Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';

import BackButton from './BackButton';

class Modal extends Component {
  state = {
    stack: [this.props.modalData],
  };

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

  addToStack = ({ code }) => {
    this.setState(prevState => ({
      stack: [...prevState.stack, code],
    }));
  };

  click = line => {
    const { stack } = this.state;
    const currentCode = stack[stack.length - 1];
    const data = currentCode.links.find(link => link.line === line);
    if (data) {
      this.addToStack(data);
    }
  };

  goBack = () => {
    this.setState(prevState => ({
      stack: prevState.stack.pop(),
    }));
  };

  render() {
    const { stack } = this.state;
    const { toggleModal } = this.props;
    const currentCode = stack[stack.length - 1];
    console.log(stack, currentCode);
    return (
      <Fragment>
        {stack.length > 1 && <BackButton goBack={this.goBack} />}
        <div
          role="button"
          tabIndex="0"
          style={{ outline: 'none' }}
          onKeyUp={this.clickContainer}
          onClick={this.clickContainer}
          className="animated fadeIn fixed z-40 pin overflow-auto bg-smoke-dark flex my-8"
        >
          {currentCode.code && (
            <SyntaxHighlighter
              wrapLines
              lineProps={lineNumber => ({
                onClick: () => {
                  this.click(lineNumber);
                },
              })}
              className="animated fadeInUp fixed shadow-inner max-w-2xl md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-col"
              language="javascript"
              style={docco}
            >
              {currentCode.code}
            </SyntaxHighlighter>
          )}
        </div>
        <span className="absolute z-50 pin-t pin-b pin-r pr-8 pt-4">
          <button style={{ outline: 'none' }} className="relative" type="button" onClick={toggleModal}>
            <svg
              className="h-12 w-12 text-grey hover:text-grey-darkest"
              role="button"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <title>Close</title>
              <path
                fill="white"
                d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"
              />
            </svg>
          </button>
        </span>
      </Fragment>
    );
  }
}

Modal.propTypes = {
  toggleModal: PropTypes.func.isRequired,
};

export default Modal;
