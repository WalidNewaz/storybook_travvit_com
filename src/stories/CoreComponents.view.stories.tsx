import type { Meta, StoryObj } from '@storybook/react';
import View from '../components/ReactCore/View/View';

const meta = {
  title: 'ReactNative/View',
  tags: ['autodocs'],
  component: View,
} satisfies Meta<typeof View>;

export default meta;
type Story = StoryObj<typeof View>;

export const Primary: Story = {
  args: {
    text: 'Hello Walid',
  },
};
