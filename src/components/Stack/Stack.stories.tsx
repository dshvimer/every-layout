import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Stack, {StackProps} from './Stack';
import Box from '../Box/Box';

export default {
  title: 'Stack',
  component: Stack
} as Meta;

const Template: Story<StackProps> = props => (
<Stack {...props}>
    <Box style={{'border': '1px solid black'}}>something</Box>
    <Box style={{'border': '1px solid black'}}>something</Box>
    <Box style={{'border': '1px solid black'}}>something</Box>
    <Box style={{'border': '1px solid black'}}>something</Box>
</Stack>
);

export const Primary = Template.bind({});
Primary.args = {space: 'var(--s1)'};