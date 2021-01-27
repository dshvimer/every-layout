import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';

import Cluster from './Cluster';
import Box from '../Box/Box';

export default {
  title: 'Cluster',
  component: Cluster
} as Meta;

const Template: Story = props => (
    <Cluster style={{'border': '1px solid black'}}>
        <div>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
            <Box style={{'border': '1px solid black'}}>Hello 123</Box>
        </div>
    </Cluster>
);

export const Primary = Template.bind({});
Primary.args = {};