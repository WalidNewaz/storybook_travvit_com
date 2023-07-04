import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { TravvitHeader } from '../components/TravvitHeader/TravvitHeader';

export default {
  title: 'Components/TravvitHeader',
  component: TravvitHeader,
  decorators: [(story) => <div className="p-1">{story()}</div>],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TravvitHeader>;

export const LoggedIn: Story = {
  args: {
    user: {
      name: 'Jane Doe',
    },
  },
};

export const LoggedOut: Story = {};
