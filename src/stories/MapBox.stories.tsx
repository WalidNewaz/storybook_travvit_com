import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';

/** Component */
import MapBox from '../components/Map/MapBox/MapBox';

export default {
  title: 'Components/MapBox',
  component: MapBox,
  decorators: [
    (story) => {
      return (
        <div className="bg-travvit-orange/10 min-h-[85vh] h-[75vh] w-[100vw]">
          {story()}
        </div>
      );
    },
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MapBox>;

export const Default: Story = {};
