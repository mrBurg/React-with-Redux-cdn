'use strict';

import { $ } from '/utils/common.js';
import { prependStyle } from '/utils/files.js';
import { store } from '/app/store.js';
import { App } from '/App.js';

prependStyle('/global.css');

const { createRoot } = ReactDOM;
const { Provider } = ReactRedux;
const rootContainer = $('#root');
const root = createRoot(rootContainer);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
