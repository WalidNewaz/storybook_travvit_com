import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button/Button';
import { ButtonWithHooks } from '../components/Button/ButtonWithHooks';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Example/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  name: 'Primary representation',
  args: {
    primary: true,
    label: 'Button',
  },
};

export const Secondary: Story = {
  name: 'Secondary representation',
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
  },
};

// export const WithHooks: Story = {
//   render: () => <ButtonWithHooks />,
// };

