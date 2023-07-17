import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { ActionIcon } from '../components/ActionIcon/ActionIcon';
import LikeActionIcon from '../components/ActionIcon/LikeAction/LikeAction';
import AddActionIcon from '../components/ActionIcon/AddAction/AddAction';
import ShareActionIcon from '../components/ActionIcon/ShareAction/ShareAction';

export default {
  title: 'Components/Action Icons',
  component: ActionIcon,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ActionIcon>;

export const Like: Story = {
  name: 'Like icon',
  render: () => (
    <div className="w-60 h-60 bg-slate-50 relative rounded-2xl flex justify-center items-center">
      <LikeActionIcon
        label="Like button"
        onClick={() => console.log('You clicked me!')}
      />
    </div>
  ),
};

export const Add: Story = {
  name: 'Add icon',
  render: () => (
    <div className="w-60 h-60 bg-slate-50 relative rounded-2xl flex justify-center items-center">
      <AddActionIcon
        label="Add button"
        onClick={() => console.log('You clicked me!')}
      />
    </div>
  ),
};

export const Share: Story = {
  name: 'Share icon',
  render: () => (
    <div className="w-60 h-60 bg-slate-50 relative rounded-2xl flex justify-center items-center">
      <ShareActionIcon
        label="Share button"
        onClick={() => console.log('You clicked me!')}
      />
    </div>
  ),
};
