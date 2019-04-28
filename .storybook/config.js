import { addDecorator, addParameters, configure } from '@storybook/react';

import mTreeTheme from './mTreeTheme';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
};

addParameters({
  options: {
    theme: mTreeTheme,
  },
});


configure(loadStories, module);
