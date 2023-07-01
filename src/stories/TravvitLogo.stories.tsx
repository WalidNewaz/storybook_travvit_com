import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { TravvitLogo } from '../components/TravvitLogo/TravvitLogo';

export default {
  title: 'Components/TravvitLogo',
  component: TravvitLogo,
  decorators: [(story) => <div className="p-1">{story()}</div>],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TravvitLogo>;

export const TravvitLogo1: Story = {
  name: 'Full size logo',
  args: {
    size: 'full',
  },
};

export const TravvitLogo2: Story = {
  name: 'Extra small logo',
  args: {
    size: 'xs',
  },
};

export const TravvitLogo3: Story = {
  name: 'Small logo',
  args: {
    size: 'small',
  },
};

export const TravvitLogo4: Story = {
  name: 'Medium logo',
  args: {
    size: 'medium',
  },
};

export const TravvitLogo5: Story = {
  name: 'Large logo',
  args: {
    size: 'large',
  },
};

export const TravvitLogo6: Story = {
  name: 'Extra large logo',
  args: {
    size: 'xl',
  },
};
