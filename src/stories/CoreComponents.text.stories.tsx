import type { Meta, StoryObj } from '@storybook/react';
import Text from '../components/ReactCore/Text/Text';

const meta = {
  title: 'ReactCore/Text',
  tags: ['autodocs'],
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof Text>;

export const Primary: Story = {
  args: {
    baseText: 'Hello',
    innerText: 'Walid',
  },
};