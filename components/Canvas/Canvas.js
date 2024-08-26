'use strict';

import { $, delay } from '/utils/common.js';
import { appendStyle } from '/utils/files.js';

appendStyle('/components/Canvas/Canvas.css');

const { createElement: create, useEffect, useRef, useState } = React;

export const Canvas = () => {
  const cnv = useRef(null);
  const [hasCursor, setCursor] = useState('');
  const [cnvProps, setCnvProps] = useState({
    width: Math.floor($('main').clientWidth),
    height: Math.floor($('main').clientHeight),
  });

  useEffect(() => {
    if (cnv.current && cnv.current.getContext) {
      const rectBound = { width: 40, height: 20 };
      const ctx = cnv.current.getContext('2d');

      const mousemoveHandler = (event) => {
        setCursor(() => 'no-cursor');

        ctx.fillStyle = '#fff';
        ctx.clearRect(0, 0, cnv.current.width, cnv.current.height);
        ctx.fillRect(
          event.offsetX - rectBound.width / 2,
          event.offsetY - rectBound.height / 2,
          rectBound.width,
          rectBound.height
        );

        delay(() => setCursor(() => ''), 200);
      };

      const resizeHandler = () => {
        setCnvProps({
          width: Math.floor($('main').clientWidth),
          height: Math.floor($('main').clientHeight),
        });
      };

      cnv.current.addEventListener('mousemove', mousemoveHandler);
      window.addEventListener('resize', resizeHandler);

      return () => {
        if (cnv.current) {
          cnv.current.removeEventListener('mousemove', mousemoveHandler);
          window.addEventListener('resize', resizeHandler);
        }
      };
    }
  }, []);

  return create('canvas', {
    ref: cnv,
    className: classNames('canvas', { [hasCursor]: hasCursor }),
    width: cnvProps.width,
    height: cnvProps.height,
  });
};
