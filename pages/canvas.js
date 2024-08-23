'use strict';

import { Canvas } from '/components/Canvas/Canvas.js';

const { createElement: create } = React;

export default function CanvasPage() {
  return create(Canvas);
}
