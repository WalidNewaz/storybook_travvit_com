import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Login } from '../components/Login/Login';

export default {
  title: 'Components/Travvit Login',
  component: Login,
  decorators: [
    (story) => <div className="bg-travvit-orange/10 h-screen">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Login>;

export const Default: Story = {};
