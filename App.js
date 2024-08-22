'use strict';

import { prependStyle } from '/utils/common.js';
import { Header } from '/components/Header/Header.js';
import { Main } from '/components/Main/Main.js';
import { Footer } from '/components/Footer/Footer.js';

prependStyle('/App.css');

const { createElement } = React;
const { BrowserRouter } = ReactRouterDOM;
const { connect } = ReactRedux;

const mapStateToProps = (state) => ({ state });

const AppComponent = ({ state }) => {
  console.log('App', state);

  return createElement(
    BrowserRouter,
    null,
    createElement(Header),
    createElement(Main),
    createElement(Footer)
  );
};

export const App = connect(mapStateToProps)(AppComponent);
