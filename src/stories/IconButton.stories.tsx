import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { PhoneIcon } from '@heroicons/react/24/outline';
import { IconButton } from '../components/IconButton/IconButton';

export default {
  title: 'Components/Icon Button',
  component: IconButton,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof IconButton>;

export const ChevDown: Story = {
  name: 'Call Button',
  args: {
    primary: true,
    className: 'flex',
    label: 'Call me',
    icon: <PhoneIcon className="icon" aria-hidden="true" />,
  },
};
