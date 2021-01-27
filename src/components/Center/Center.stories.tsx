import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Center from './Center';
import Box from '../Box/Box';

export default {
  title: 'Center',
  component: Center
} as Meta;

const Template: Story = props => (
    <Box style={{'border': '1px solid black'}}>
        <Center>
            <Box style={{'border': '1px solid black'}}>
                hello
            </Box>
        </Center>
    </Box>
);

export const Primary = Template.bind({});
Primary.args = {};