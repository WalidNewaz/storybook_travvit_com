import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { AvatarGroup } from '../components/AvatarGroup/AvatarGroup';
import { Avatar } from '../components/Avatar/Avatar';

/** Assets */
import face1 from './images/img_7.jpeg';
import face2 from './images/img_10.jpeg';
import face3 from './images/img_30.jpeg';
import face4 from './images/timothy-paul-smith-256424.jpeg';

export default {
  title: 'Components/AvatarGroup',
  component: AvatarGroup,
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

export const GroupOfPeople: Story = {
  name: 'Medium',
  args: {
    AvatarComponent: Avatar,
    groupMembers: avatarProps,
    limit: 4,
    size: 'medium',
  },
};
