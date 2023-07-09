import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { Badge } from '../components/Badge';

export default {
  title: 'Components/Badge',
  component: Badge,
  // decorators: [
  //   (story) => <div className="bg-travvit-orange/10 h-screen">{story()}</div>,
  // ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
