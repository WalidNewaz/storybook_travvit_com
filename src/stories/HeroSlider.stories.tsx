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

const storySlides = [
  {
    media: mountainsLake,
    alt: 'Mountains and lake',
    description: 'USA Trip Planner: Design Your Perfect Vacation',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: zion,
    mediaType: 'image',
    alt: 'Zion National Park',
    description: 'Come visit Zion National Park in Utah',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: ynp,
    mediaType: 'image',
    alt: 'Yellowstone National Park',
    description: 'Explore Yellowstone National Park',
    descriptionClasses:
      'xs:text-3xl sm:text-4xl md:text-5xl capitalize mb-6 text-center',
    buttonText: 'Explore',
    buttonOnClick: () => undefined,
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
];

export const Default: Story = {
  name: 'Default',
  render: () => (
    <HeroSlider
      slides={storySlides}
      containerClasses="max-w-[80rem]"
      // mediaStyle={{ height: '90vh' }}
    />
  ),
};
