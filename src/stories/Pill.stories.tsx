import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { Pill } from '../components/Pill/Pill';

export default {
  title: 'Components/Pill',
  component: Pill,
} as Meta;

type Story = StoryObj<typeof Pill>;

export const Primary: Story = {
  name: 'Primary representation',
  args: {
    label: 'This is a large Pill',
    color: 'red',
  },
};
