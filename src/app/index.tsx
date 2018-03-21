import * as React from 'react';
import { App as TodoApp } from 'app/components';
import { hot } from 'react-hot-loader';

import { injectGlobal } from 'react-emotion';

injectGlobal`
  html, body, #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0;
  }`;

export const App = hot(module)(() => (
  <TodoApp />
));
