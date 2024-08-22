'use strict';

import { $, delay } from '/utils/common.js';

const { createElement, useEffect, useRef, useState } = React;

export default function CanvasPage() {
  const cnv = useRef(null);
  const [hasCursor, setCursor] = useState('');

  useEffect(() => {
    if (cnv.current && cnv.current.getContext) {
      const rectBound = { width: 40, height: 20 };
      const ctx = cnv.current.getContext('2d');

      ctx.fillStyle = '#fff';

      const mousemoveHandler = (event) => {
        setCursor('no-cursor');

        ctx.clearRect(0, 0, cnv.current.width, cnv.current.height);
        ctx.fillRect(
          event.offsetX - rectBound.width / 2,
          event.offsetY - rectBound.height / 2,
          rectBound.width,
          rectBound.height
        );

        delay(() => setCursor(''), 200);
      };

      cnv.current.addEventListener('mousemove', mousemoveHandler);

      return () => {
        if (cnv.current) {
          cnv.current.removeEventListener('mousemove', mousemoveHandler);
        }
      };
    }
  }, []);

  return createElement('canvas', {
    ref: cnv,
    className: hasCursor ?? null,
    width: $('main').clientWidth,
    height: $('main').clientHeight,
  });
}
