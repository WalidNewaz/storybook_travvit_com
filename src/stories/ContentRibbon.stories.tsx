import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Components */
import ContentRibbon from '../components/ContentRibbon/ContentRibbon';
import {
  FaPersonHiking,
  FaCampground,
  FaPersonSkiing,
  FaPersonRunning,
} from 'react-icons/fa6';
import { GiMountainClimbing } from 'react-icons/gi';
import { MdDirectionsBike } from 'react-icons/md';
import { IconButton } from '../components/IconButton/IconButton';

export default {
  title: 'Components/Content Ribbon',
  component: ContentRibbon,
  decorators: [
    (story) => <div className="bg-travvit-orange/10">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ContentRibbon>;

export const NoOverflowRibbon: Story = {
  name: 'No overflow',
  render: () => (
    <ContentRibbon>
      <IconButton
        className="flex m-2"
        label="Hiking"
        icon={<FaPersonHiking className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Climbing"
        icon={<GiMountainClimbing className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Camping"
        icon={<FaCampground className="w-6 h-6" aria-hidden="true" />}
      />
    </ContentRibbon>
  ),
};

export const OverflowRibbon: Story = {
  name: 'Overflow',
  render: () => (
    <ContentRibbon>
      <IconButton
        className="flex m-2"
        label="Hiking"
        icon={<FaPersonHiking className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Climbing"
        icon={<GiMountainClimbing className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Camping"
        icon={<FaCampground className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Skiing"
        icon={<FaPersonSkiing className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Mtn Biking"
        icon={<MdDirectionsBike className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Running"
        icon={<FaPersonRunning className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Hiking"
        icon={<FaPersonHiking className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Climbing"
        icon={<GiMountainClimbing className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Camping"
        icon={<FaCampground className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Skiing"
        icon={<FaPersonSkiing className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Mtn Biking"
        icon={<MdDirectionsBike className="w-6 h-6" aria-hidden="true" />}
      />
      <IconButton
        className="flex m-2"
        label="Running"
        icon={<FaPersonRunning className="w-6 h-6" aria-hidden="true" />}
      />
    </ContentRibbon>
  ),
};
