const code = `import React, { Fragment } from 'react';

import { Inner, Title, ContactText, Footer } from '../styled';

const Contact = () => (
  <Fragment>
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
        .
      </ContactText>
    </Inner>
    <Footer>&copy; 2018 by Cameron Aziz</Footer>
  </Fragment>
);

export default Contact;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'components',
      'styled.js'
    ]
  }
];

export default {
  code,
  links,
  name: 'Contact.js',
  label: 'Contact.js',
};