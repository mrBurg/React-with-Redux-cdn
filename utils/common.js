'use strict';

const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
const create = document.createElement.bind(document);

const generateUID = (format = [1e7] + -1e3 + -4e3 + -8e3 + -1e11) => {
  return format.replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

const addStyle = (path, atBegin = false, callback = () => void 0) => {
  const link = create('link');
  const resourceUri = path.split('/');
  const id = resourceUri.at(-1).split('.')[0].toLowerCase();

  link.onload = () => callback();
  link.setAttribute('id', `${id}-${generateUID()}`);
  link.setAttribute('rel', 'stylesheet');
  link.setAttribute('href', path);

  if (atBegin) {
    document.head.prepend(link);

    return;
  }

  document.head.appendChild(link);
};

const appendStyle = (path, callback) => {
  addStyle(path, false, callback);
};

const prependStyle = (path, callback) => {
  addStyle(path, true, callback);
};

const appendScript = (path, callback = () => void 0) => {
  const script = document.createElement('script');
  const resourceUri = path.split('/');
  const id = resourceUri.at(-1).split('.')[0].toLowerCase();

  script.onload = () => callback();
  script.setAttribute('id', `${id}-${generateUID()}`);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', path);

  document.head.appendChild(script);
};

const delay = (() => {
  let timeoutId = 0;

  return (callback, ms) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(callback, ms);
  };
})();

export { $, $$, create, appendStyle, prependStyle, appendScript, delay };
