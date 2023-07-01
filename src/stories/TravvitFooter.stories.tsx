import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';

export default {
  title: 'Components/TravvitFooter',
  component: TravvitFooter,
  decorators: [(story) => <div className="p-1">{story()}</div>],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof TravvitFooter>;

export const Footer1: Story = {
  name: 'Footer',
  render: () => <TravvitFooter />,
};
