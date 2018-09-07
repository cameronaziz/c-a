const code = `import React from 'react';
import { CodeContainer } from '../styled';

import CodeDisplay from './CodeDisplay';
import DefaultHero from './DefaultHero';

const CodeExplorer = ({ current, displayDefault, ...rest }) => (
  <CodeContainer visible={!!current.code}>
    {current.code && <CodeDisplay current={current} {...rest} />}
    {displayDefault && <DefaultHero />}
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
      'styled.js',
    ],
  },
  {
    line: 4,
    location: [
      'src',
      'components',
      'Modal',
      'CodeExplorer',
      'CodeDisplay.js',
    ],
  },
  {
    line: 5,
    location: [
      'src',
      'components',
      'Modal',
      'CodeExplorer',
      'DefaultHero.js',
    ],
  },
];

const libraries = ['react'];

export default {
  libraries,
  code,
  links,
  name: 'index.js',
  label: 'index.js',
};
