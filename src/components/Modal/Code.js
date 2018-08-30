import React, { Component } from 'react';
import PropTypes from 'prop-types';

import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/styles/hljs';
import { CodeContainer } from './styled';

class Code extends Component {
  state = { hoveredLine: undefined };

  hoverLine = hoveredLine => {
    this.setState({
      hoveredLine,
    });
  };

  createLineStyle = lineNumber => {
    const { code } = this.props;
    const { hoveredLine } = this.state;
    const style = { fontSize: '12px' };
    if (hoveredLine === lineNumber && code.linkLines.includes(lineNumber)) {
      style.fontSize = '15px';
      style.backgroundColor = '#ddd';
      style.borderRadius = '3px';
      style.padding = '3px';
      style.cursor = 'pointer';
    }
    return style;
  };

  render() {
    const { code, click } = this.props;
    docco.cursor = 'default';
    return (
      <CodeContainer>
        {code.code && (
          <SyntaxHighlighter
            wrapLines
            lineProps={lineNumber => ({
              style: this.createLineStyle(lineNumber),
              onClick: () => {
                click(lineNumber);
              },
              onMouseOver: () => {
                this.hoverLine(lineNumber);
              },
              onMouseLeave: () => {
                this.hoverLine(undefined);
              },
            })}
            language="javascript"
            style={docco}
          >
            {code.code}
          </SyntaxHighlighter>
        )}
      </CodeContainer>
    );
  }
}

Code.propTypes = {
  click: PropTypes.func.isRequired,
  code: PropTypes.shape({
    code: PropTypes.string,
  }).isRequired,
};

export default Code;
