const code = `import styled from 'react-emotion';
import { ParallaxLayer } from 'react-spring';
import fullTriangle from '../images/fullTriangle.svg';

export const Divider = styled(ParallaxLayer)\`
  \${tw('absolute w-full h-full')};
  background: \${props => props.bg};
  svg {
    fill: \${props => props.fill};
  }
  clip-path: \${props => props.clipPath};
\`;

export const DividerMiddle = styled(Divider)\`
  clip-path: polygon(0 15%, 100% 25%, 100% 85%, 0 75%);
\`;

export const Content = styled(ParallaxLayer)\`
  \${tw('p-6 md:p-12 lg:p-24 justify-center items-center flex z-50')};
\`;

export const Hero = styled.div\`
  \${tw('w-full xl:w-2/3')};
\`;

export const Inner = styled.div\`
  \${tw('w-full xxl:w-2/3 text-center lg:text-left')};
\`;

export const BigTitle = styled.h1\`
  \${tw('text-5xl lg:text-6xl font-poppins text-white mb-6 tracking-wide')};
  text-shadow: 0 5px 35px rgba(255, 255, 255, 0.15);
\`;

export const Title = styled.h1\`
  \${tw('text-4xl lg:text-4xl font-poppins text-white mb-8 tracking-wide relative inline-block')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  &:before {
    content: '';
    width: 40px;
    height: 40px;
    background: url(\${fullTriangle});
    position: absolute;
    background-size: 40px;
    transform: rotate(90deg);
    left: -60px;
    top: 5px;
  }
\`;

export const Subtitle = styled.p\`
  \${tw('text-2xl lg:text-4xl font-sans text-white mt-8 xxl:w-3/4')};
  text-shadow: 0 2px 15px rgba(0, 0, 0, 0.2);
\`;

export const ProjectsWrapper = styled.div\`
  \${tw('flex flex-wrap justify-between mt-8')};
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: repeat(2, 1fr);
  @media (max-width: 1200px) {
    grid-gap: 3rem;
  }
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
\`;

export const WaveWrapper = styled.div\`
  \${tw('absolute pin-b w-full')};
  transform: matrix(1, 0, 0, -1, 0, 0);
\`;

export const InnerWave = styled.div\`
  \${tw('relative h-full')};
  svg {
    width: 100%;
    height: 40vh;
  }
\`;

export const AboutHero = styled.div\`
  \${tw('flex flex-col lg:flex-row items-center mt-8')};
  a {
    color: #e07628;
    text-decoration: none;
    cursor: pointer;
  }
\`;

export const Avatar = styled.img\`
  \${tw('rounded-full w-32 xl:w-48 shadow-lg h-full')};
\`;

export const AboutSub = styled.span\`
  \${tw('text-white pt-12 lg:pt-0 lg:pl-12 text-2xl lg:text-3xl xl:text-4xl')};
\`;

export const AboutDesc = styled.p\`
  \${tw('text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify xxl:w-3/4')};
  width: 80%;
  margin: 0 auto;
\`;

export const AboutLink = styled.p\`
  \${tw('z-50 text-grey-light text-lg md:text-xl lg:text-2xl font-sans pt-6 md:pt-12 text-justify xxl:w-3/4')};
  width: 80%;
  margin: 0 auto;
  a {
    color: #e07628;
    text-decoration: none;
    cursor: pointer;
  }
\`;

export const ContactText = styled.p\`
  \${tw('text-grey-light font-sans text-xl md:text-2xl lg:text-3xl')};
  a {
    color: #e07628;
    text-decoration: none;
  }
\`;

export const Footer = styled.footer\`
  \${tw('text-center text-grey absolute pin-b p-6 font-sans text-md lg:text-lg')};
  a {
    color: #e07628;
    text-decoration: none;
  }
\`;

export const Wrapper = styled.a\`
  width: 100%;
  \${tw('shadow-lg relative no-underline rounded-lg px-16 py-16 mb-4 text-white')};
  background: \${props => props.bg};
  transition: transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  &:hover {
    transform: translateY(-5px);
  }
\`;

export const Text = styled.div\`
  \${tw('font-sans')};
\`;

export const CardTitle = styled.div\`
  \${tw('text-white uppercase text-2xl md:text-3xl xl:text-4xl tracking-wide font-sans pt-8')};
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
\`;

export const CardTech = styled.div\`
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
\`;

export const CardBackground = styled.div\`
  \${tw('rounded')};
  position: absolute;
  top: 10%;
  left: 5%;
  width: 90%;
  height: 80%;
  opacity: 0.5;
  z-index: -1;
\`;

export const CardButton = styled.button\`
  \${tw('bg-white border border-blue-dark hover:bg-blue-dark text-blue-dark hover:text-white font-bold py-2 px-4 rounded-full')};
  outline: none;
\`;

export const ButtonContainer = styled.span\`
  \${tw('relative visible sm:invisible md:visible lg:visible xl:visible')};
\`;
`;

const links = [
  {
    line: 3,
    location: [
      'src',
      'fullTriangle.svg',
    ],
  },
];

const libraries = ['reactEmotion', 'reactSpring'];

export default {
  libraries,
  code,
  links,
  name: 'styled.js',
  label: 'styled.js',
};
