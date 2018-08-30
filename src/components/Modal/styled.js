import styled from 'react-emotion';

export const FileTreeContainer = styled.div`
  ${tw('w-1/6 flex-none h-full overflow-y-auto')};
`;

export const ModalContent = styled.div`
  ${tw(
    'animated fadeInUp fixed shadow-inner max-w-2xl md:relative pin-b pin-x align-top m-auto justify-end md:justify-center p-8 bg-white md:rounded w-full md:h-auto md:shadow flex flex-start'
  )};
  height: 100vh !important;
`;

export const ModalContainer = styled.div`
  ${tw('animated fadeIn fixed z-40 pin overflow-auto bg-smoke-dark flex my-8')};
  height: 100vh;
`;

export const CodeContainer = styled.div`
  ${tw('w-5/6 overflow-y-auto')};
`;
