import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { Avatar } from '../components/Avatar';

/** Assets */
import face1 from './images/img_7.jpeg';

export default {
  title: 'Components/Avatar',
  component: Avatar,
} as Meta;

type Story = StoryObj<typeof Avatar>;

export const Small: Story = {
  name: 'Small',
  args: {
    size: 'small',
    src: face1,
  },
};

export const Medium: Story = {
  name: 'Medium',
  args: {
    size: 'medium',
    src: face1,
  },
};

export const Large: Story = {
  name: 'Large',
  args: {
    size: 'large',
    src: face1,
  },
};

export const XL: Story = {
  name: 'Extra Large',
  args: {
    size: 'xl',
    src: face1,
  },
};

export const XS: Story = {
  name: 'Extra Small',
  args: {
    size: 'xs',
    src: face1,
  },
};
