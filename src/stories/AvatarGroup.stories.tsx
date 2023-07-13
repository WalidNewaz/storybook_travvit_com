import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { AvatarGroup } from '../components/AvatarGroup/AvatarGroup';
import { Avatar } from '../components/Avatar/Avatar';

/** Assets */
import face1 from './images/avatar-jane-1.jpeg';
import face2 from './images/avatar-jane-2.jpeg';
import face3 from './images/avatar-jane-3.jpeg';
import face4 from './images/avatar-timothy-paul-smith.jpeg';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof AvatarGroup>;

const avatarProps = [
  {
    src: face1 as string,
    alt: 'face1',
  },
  {
    src: face2 as string,
    alt: 'face2',
  },
  {
    src: face3 as string,
    alt: 'face3',
  },
  {
    src: face4 as string,
    alt: 'face4',
  },
  {
    src: face3 as string,
    alt: 'face3',
  },
];

export const xs: Story = {
  name: 'Extra Small',
  args: {
    AvatarComponent: Avatar,
    groupMembers: avatarProps,
    limit: 4,
    size: 'xs',
  },
};

export const Small: Story = {
  name: 'Small',
  args: {
    AvatarComponent: Avatar,
    groupMembers: avatarProps,
    limit: 4,
    size: 'small',
  },
};

export const Medium: Story = {
  name: 'Medium',
  args: {
    AvatarComponent: Avatar,
    groupMembers: avatarProps,
    limit: 4,
    size: 'medium',
  },
};
