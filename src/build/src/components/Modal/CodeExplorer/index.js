const code = `import React from 'react';
import { CodeContainer } from '../styled';

import CodeDisplay from './CodeDisplay';

const CodeExplorer = ({ current, ...rest }) => (
  <CodeContainer visible={!!current.code}>
    {current.code && <CodeDisplay current={current} {...rest} />}
  </CodeContainer>
);

export default CodeExplorer;
`;

const links = [
  {
    line: 2,
    location: [
      'src',
      'components',
      'Modal',
      'styled.js'
    ]
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'Modal',
      'CodeExplorer',
      'CodeDisplay.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};