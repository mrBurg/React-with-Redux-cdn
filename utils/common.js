'use strict';

export const $ = document.querySelector.bind(document);
export const $$ = document.querySelectorAll.bind(document);

export const generateUID = (format = [1e7] + -1e3 + -4e3 + -8e3 + -1e11) =>
  format.replace(/[018]/g, (c) =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );

export const delay = (() => {
  let timeoutId = 0;

  return (callback, ms) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(callback, ms);
  };
})();
