import type { Meta, StoryObj } from '@storybook/react';
import View from '../components/ReactCore/View/View';
import React from 'react';

const meta = {
  title: 'ReactCore/View',
  component: View,
} satisfies Meta<typeof View>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => <View />,
};