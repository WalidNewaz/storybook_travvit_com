import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { HeroSlider } from '../components/HeroSlider/HeroSlider';
import { MediaCard } from '../components/MediaCard/MediaCard';

import type { MediaTypes } from '../components/HeroSlider/HeroSlider';

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

const storySlides = [
  {
    media: mountainsLake as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Mountains and lake',
    description: 'USA Trip Planner: Design Your Perfect Vacation',
    descriptionClasses: 'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
  },
  {
    media: zion as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Zion National Park',
    description: 'USA Trip Planner: Design Your Perfect Vacation',
    descriptionClasses: 'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
  },
  {
    media: ynp as string,
    mediaType: 'image' as MediaTypes,
    alt: 'Yellowstone National Park',
    description: 'USA Trip Planner: Design Your Perfect Vacation',
    descriptionClasses: 'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
  },
];

export const Default: Story = {
  name: 'Default',
  render: () => (
    <HeroSlider
      slides={storySlides}
      SlideComponent={MediaCard}
      containerClasses="max-w-[80rem]"
    />
  ),
};
