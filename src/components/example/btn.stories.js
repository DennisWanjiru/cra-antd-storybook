import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Button } from 'antd';
import notes from './README.md';


storiesOf('UI|Button', module)
  .add('default', () => <Button onClick={()=>action('clicked')}>Hello Button</Button>,
  { notes }
).add('primary', () => (
    <Button type='primary' onClick={()=>action('clicked')}>
      ABCD
    </Button>
  ));
