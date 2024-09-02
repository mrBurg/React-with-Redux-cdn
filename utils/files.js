'use strict';

import { generateUID } from '/utils/common.js';

const create = document.createElement.bind(document);

const addStyle = (path, atBegin = false, callback = () => void 0) => {
  const link = create('link');
  const id = path.split('/').at(-1).split('.')[0].toLowerCase();

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

export const appendStyle = (path, callback) => {
  addStyle(path, false, callback);
};
export const prependStyle = (path, callback) => {
  addStyle(path, true, callback);
};

export const appendScript = (path, callback = () => void 0) => {
  const script = document.createElement('script');
  const id = path.split('/').at(-1).split('.')[0].toLowerCase();

  script.onload = () => {
    callback();
  };
  script.setAttribute('id', `${id}-${generateUID()}`);
  script.setAttribute('type', 'text/javascript');
  script.setAttribute('src', path);

  document.head.appendChild(script);
};

/* function loadScript(src, fallbackSrc) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve(script);
    script.onerror = () => {
      // Якщо є помилка завантаження, завантажте локальний скрипт
      const fallbackScript = document.createElement('script');
      fallbackScript.src = fallbackSrc;
      fallbackScript.onload = () => resolve(fallbackScript);
      fallbackScript.onerror = () =>
        reject(new Error('Failed to load both scripts'));

      document.head.appendChild(fallbackScript);
    };

    document.head.appendChild(script);
  });
}

// URL онлайн-ресурсу та локальний шлях
const onlineScriptUrl =
  'https://unpkg.com/react@18.3.1/umd/react.development.js';
const localScriptUrl = '/path/to/local/react.development.js';

// Завантаження скрипта з онлайн-ресурсу або локально
loadScript(onlineScriptUrl, localScriptUrl)
  .then((script) => {
    console.log('Script loaded successfully:', script.src);
  })
  .catch((error) => {
    console.error('Error loading script:', error);
  });
 */
