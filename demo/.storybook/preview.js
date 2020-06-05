import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

import '../src/styles/main.css';

const cssReq = require.context('!!raw-loader!../src', true, /.+\.css$/);
const cssTokenFiles = cssReq
  .keys()
  .map((filename) => ({ filename, content: cssReq(filename).default }));

// const scssReq = require.context(
//   '!!raw-loader!../src/styles',
//   true,
//   /.+\.scss$/
// );
// const scssTokenFiles = scssReq
//   .keys()
//   .map(filename => ({ filename, content: scssReq(filename).default }));

// const lessReq = require.context(
//   '!!raw-loader!../src/styles',
//   true,
//   /.+\.less$/
// );
// const lessTokenFiles = lessReq
//   .keys()
//   .map(filename => ({ filename, content: lessReq(filename).default }));

const svgIconsReq = require.context(
  '!!raw-loader!../src/assets/icons',
  true,
  /.\.svg$/
);
const svgIconTokenFiles = svgIconsReq
  .keys()
  .map((filename) => ({ filename, content: svgIconsReq(filename).default }));

addParameters({
  designToken: {
    files: {
      css: cssTokenFiles,
      // less: lessTokenFiles,
      // scss: scssTokenFiles,
      svgIcons: svgIconTokenFiles
    }
  },
  options: {
    panelPosition: 'right'
  }
});