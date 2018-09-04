import React from 'react';
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
