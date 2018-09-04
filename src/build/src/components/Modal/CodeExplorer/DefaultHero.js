const code = `import React from 'react';

const DefaultHero = () => (
  <div className="bg-grey-lighter h-full py-12">
    <div className="flex items-stretch">
      <div className="flex-1 text-grey-darker text-center px-4 py-2 m-2" />
      <div className="self-start flex-grow text-blue-dark text-center text-2xl bg-grey-light rounded-lg p-4 mt-4">
        Welcome to the codebase for this site
      </div>
      <div className="flex-1 text-grey-darker text-center px-4 py-2 m-2" />
    </div>
    <div className="flex items-stretch h-8 pt-4">
      <div className="self-start flex-shrink text-center text-lg text-black pt-8 pl-32 ml-24">
        Ways to explore the code...
      </div>
    </div>
    <div className="flex items-stretch h-8">
      <div className="self-start flex-grow text-center text-black p-8 mt-4">
        Click a file or folder on the right to explore the code.
      </div>
    </div>
    <div className="flex items-stretch h-8">
      <div className="self-start flex-grow text-center text-black p-8 mt-4">
        Click the library icons above and go to highlights of the codebase.
      </div>
    </div>
    <div className="flex items-stretch h-8">
      <div className="self-start flex-grow text-center text-black p-8 mt-4">
        Click here to start a tour.
      </div>
    </div>
  </div>

);

export default DefaultHero;
`;

const links = [];

const libraries = ['react'];

export default {
  libraries,
  code,
  links,
  name: 'DefaultHero.js',
  label: 'DefaultHero.js',
};