import React from 'react';

import { storiesOf } from '@storybook/react';
import notes from './Readme.md';

const Welcome = () => (
  <div>
    <h2>Welcome to the mTree.io Storybook!</h2>
    <p>Hop over to notes to for Storybook Documentati sdlfk sadlk asdlk lk  lon.</p>
  </div>
)

storiesOf('Welcome', module).add('to Storybook', () => <Welcome />, { notes });
