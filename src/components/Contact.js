import React from 'react';

import { Content, Inner, Title, ContactText, Footer } from './styled';

const Header = () => (
  <Content speed={0.4} offset={3.2}>
    <Inner>
      <Title>Get in touch</Title>
      <ContactText>
        Say <a href="mailto:cameronaziz@me.com">Hi</a> or find me on other platforms like{' '}
        <a href="https://www.linkedin.com/in/cameronaziz/" target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>{' '}
        or{' '}
        <a href="https://www.github.com/cameronaziz/" target="_blank" rel="noopener noreferrer">
          Github
        </a>
      </ContactText>
    </Inner>
    <Footer>&copy; 2018 by Cameron Aziz</Footer>
  </Content>
);

export default Header;
