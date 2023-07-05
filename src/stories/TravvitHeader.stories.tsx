import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { TravvitHeader } from '../components/TravvitHeader/TravvitHeader';

/** Assets */
import face1 from './images/img_7.jpeg';

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
      id: 1,
      username: 'JaneDoe',
      email: 'jane@example.com',
      role: 'user',
      firstName: 'Jane',
      lastName: 'Doe',
      avatar: face1 as string,
    },
  },
};

export const LoggedOut: Story = {};
