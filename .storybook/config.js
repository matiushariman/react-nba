import { configure } from '@storybook/react';

import '../app/global-styles';

// automatically import all files ending in *.stories.js
const req = require.context('../app/', true, /.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
