import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Box, {BoxProps} from './Box';

export default {
  title: 'Box',
  component: Box
} as Meta;

const Template: Story<BoxProps> = props => (
<Box {...props} style={{'border': "1px solid black"}}>
    <div>Hello</div>
</Box>
);

export const Primary = Template.bind({});
Primary.args = {padding: 'var(--s2)'};