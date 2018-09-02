import React from 'react';
import { CodeContainer } from '../styled';

import CodeDisplay from './CodeDisplay';

const CodeExplorer = ({ current, ...rest }) => (
  <CodeContainer visible={!!current.code}>
    {current.code && <CodeDisplay current={current} {...rest} />}
  </CodeContainer>
);

export default CodeExplorer;
