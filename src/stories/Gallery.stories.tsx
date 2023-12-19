import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';

/** Component */
import Lightbox from '../components/Lightbox';

import type { MediaType } from '../types';

/** Assets */
import mountainsLake from './images/mountains_lake.jpeg';
import mountainsLakeWebp from './images/mountains_lake.webp';
import camping from './images/Camping.jpeg';
import yellowStone from './images/yellowstone-np.jpeg';
import niagra from './images/niagra-falls.jpeg';
import mountainsLakeJpeg from './images/mountains_lake.jpeg';
import zionJpeg from './images/ZNP-1.jpeg';
import zionWebp from './images/ZNP-1.webp';
import ynpJpeg from './images/yellowstone-np.jpeg';
import ynpWebp from './images/yellowstone-np.webp';

import womanMp4 from './video/woman-lake-1080p.mp4';
import womanWebm from './video/woman-lake-1080p.webm';

export default {
  title: 'Components/Gallery',
  component: Lightbox,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem] h-[50vh] flex">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Lightbox>;

const storySlides = [
  {
    media: mountainsLakeJpeg,
    alt: 'Mountains and lake',
    // description: 'USA Trip Planner: Design Your Perfect Vacation',
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: zionJpeg,
    mediaType: 'image' as MediaType,
    alt: 'Zion National Park',
    description: 'Come visit Zion National Park in Utah',
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
  {
    media: ynpJpeg,
    mediaType: 'image' as MediaType,
    alt: 'Yellowstone National Park',
    description: 'Explore Yellowstone National Park',
    containerClasses: 'max-w-[80rem]',
    className: 'w-[90vh]',
    mediaClassName: 'w-full h-full',
  },
];

export const Image: Story = {
  name: 'Image Gallery',
  render: () => {
    const items = storySlides.map((slide) => ({
      type: 'image',
      url: slide.media,
    }));

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0);

    const openLightbox = (index: number) => {
      setCurrentSlide(index);
      setLightboxOpen(true);
    };

    const closeLightbox = () => {
      setLightboxOpen(false);
    };

    return (
      <div className="w-[80rem] h-[50vh] flex flex-col relative">
        {/* Thumbnails */}
        <div className="flex flex-wrap justify-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer p-2"
              onClick={() => openLightbox(index)}
            >
              {item.type === 'image' ? (
                <img
                  src={item.url}
                  alt={`Image ${index}`}
                  className="w-16 h-16 object-cover rounded"
                />
              ) : (
                <div className="w-16 h-16 bg-gray-800 flex items-center justify-center text-white rounded">
                  📹
                </div>
              )}
            </div>
          ))}
        </div>
        <Lightbox
          slides={storySlides}
          rotate={false}
          dots={false}
          currentSlide={currentSlide}
          lightboxOpen={lightboxOpen}
          closeLightbox={closeLightbox}
        />
      </div>
    );
  },
};
