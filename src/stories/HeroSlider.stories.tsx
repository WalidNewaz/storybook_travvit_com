import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { HeroSlider } from '../components/HeroSlider/HeroSlider';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import zion from './images/ZNP-1.jpeg';
import ynp from './images/yellowstone-2225083_960_720.jpeg';

export default {
  title: 'Components/Hero Slider',
  component: HeroSlider,
  decorators: [
    (story) => <div className="bg-travvit-orange/10">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof HeroSlider>;

const slides = [mountainsLake, zion, ynp];

export const Default: Story = {
  name: 'Default',
  render: () => (
    <HeroSlider slides={slides} containerStyle={{ height: '50vh' }} />
  ),
};
