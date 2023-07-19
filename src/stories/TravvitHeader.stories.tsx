import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Header as TravvitHeader } from '../components/Header/Header';

import { menuItems } from './mocks/menuItems';
import { user } from './mocks/user';

export default {
  title: 'Components/TravvitHeader',
  component: TravvitHeader,
  decorators: [(story) => <div className="p-1">{story()}</div>],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TravvitHeader>;

export const LoggedIn: Story = {
  args: {
    user,
    menuItems,
  },
};

export const LoggedOut: Story = {
  args: {
    menuItems,
  },
};
