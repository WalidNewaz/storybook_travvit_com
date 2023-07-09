import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { ResponsiveVideo } from '../components/ResponsiveVideo';

export default {
  title: 'Components/ResponsiveVideo',
  component: ResponsiveVideo,
  // decorators: [
  //   (story) => <div className="bg-travvit-orange/10 h-screen">{story()}</div>,
  // ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof ResponsiveVideo>;

export const Default: Story = {};
