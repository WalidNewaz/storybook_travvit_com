import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import type { MediaType } from '../types';

/** Component */
import { HeroSlider } from '../components/HeroSlider/HeroSlider';

/** Assets */
import mountainsLakeJpeg from './images/mountains_lake.jpeg';
import mountainsLakeWebp from './images/mountains_lake.webp';
import zionJpeg from './images/ZNP-1.jpeg';
import zionWebp from './images/ZNP-1.webp';
import ynpJpeg from './images/yellowstone-np.jpeg';
import ynpWebp from './images/yellowstone-np.webp';

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
    media: mountainsLakeJpeg,
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
    media: zionJpeg,
    mediaType: 'image' as MediaType,
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
    media: ynpJpeg,
    mediaType: 'image' as MediaType,
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
