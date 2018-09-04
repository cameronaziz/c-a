const code = `import styled from 'react-emotion';

export const FileTreeContainer = styled.div\`
  \${tw('w-1/6 overflow-y-auto')};
  background-color: #dedee1;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.46);
  margin-bottom: \${props => (props.shorten ? '100px' : '20px')};
\`;

export const ModalContent = styled.div\`
  \${tw('fixed shadow-inner max-w-2xl md:relative pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow')};
  height: 90vh !important;
\`;

export const ModalContainer = styled.div\`
  \${tw('z-40 pin overflow-auto bg-smoke-dark container flex')};
  outline: none;
  padding-top: 5vh;
\`;

export const CodeContainer = styled.div\`
  \${tw('w-5/6 overflow-y-auto ml-2')};
  margin-bottom: 20px;
  border-bottom: 0 none;
  box-shadow: \${props => (props.visible ? '0 1px 5px rgba(0, 0, 0, 0.46)' : '')};
\`;

export const WhyNotificationContainer = styled.div\`
  bottom: 40px;
  position: absolute;
  left: 20px;
\`;

export const LibraryLinksContainer = styled.div\`
  \${tw('w-5/6 inline-flex')};
  margin-bottom: 10px;
  padding-left: 10px;
  height: 50px;
\`;

export const LibraryLinksOffset = styled.div\`
  \${tw('w-1/6 inline-flex')};
  margin-bottom: 10px;
  height: 50px;
\`;

export const Elements = styled.div\`
  \${tw('flex w-full')};
  height: 90%;
\`;
`;

const links = [];

const libraries = ['reactEmotion'];

export default {
  libraries,
  code,
  links,
  name: 'styled.js',
  label: 'styled.js',
};