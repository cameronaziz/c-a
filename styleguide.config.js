const path = require('path');
const gatsbyWebpack = require('gatsby/dist/utils/webpack.config');

const directory = path.resolve(__dirname, '/');
const suppliedStage = 'develop';
const program = {
  directory,
};

const config = gatsbyWebpack(program, directory, suppliedStage).resolve();

module.exports = {
  webpackConfig: {
    entry: config.entry,
    output: config.output,
    module: {
      rules: [
        // Babel loader, will use your project’s .babelrc
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        // Other loaders that are needed for your components
        {
          test: /\.css$/,
          loader: 'style-loader!css-loader?modules',
        },
      ],
    },
  },
};
