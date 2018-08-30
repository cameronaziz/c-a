import renderer from './renderer';

const code = `import 'dotenv/config';
import 'babel-polyfill';
import Express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

import createStore, { sagaMiddleware } from './createStore';
import renderer from './renderer';
import config from './config';
import rootSaga from '../sagas';

const { PORT } = process.env;

const app = Express();

app.use(cors());

app.use('/public', Express.static('public'));
app.use('/semantic', Express.static('semantic-theme'));
app.use(cookieParser());


app.get('*', (req, res) => {
  const now = new Date();
  console.log(\`New Request at \${now.toLocaleString('en-US')}\`);
  const context = {};
  const store = createStore();

  const saga = sagaMiddleware.run(rootSaga);

  if (context.notFound) {
    res.status(404);
  }
  let content = renderer(req, store, context);
  saga.done.then(() => {
    content = renderer(req, store, context);
    res.send(content);
  });
  store.close();
});

app.listen(PORT, () => {
  console.log(\`Express server running on \${config.port}\`); // eslint-disable-line no-console
});
`;

const links = [
  {
    line: 8,
    location: ['node', 'renderer'],
    code: renderer,
  },
];

export default {
  name: ['node', 'server'],
  label: 'server.js',
  code,
  links,
};
