import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { NotFoundPage } from '../components/404/404';

/** Assets */
import backgroundImg1 from './images/jaanus-jagomagi-night-1200.jpeg';
import backgroundImg2 from './images/austin-crow-desert-large.jpeg';
import backgroundImg3 from './images/jaanus-jagomagi-1200.jpeg';
import backgroundImg4 from './images/laura-chouette-lake-large.jpeg';
import backgroundImg5 from './images/laura-chouette-lake-large.webp';
import backgroundImg6 from './images/laura-chouette-lake-large.avif';

export default {
  title: 'Components/Page not found',
  component: NotFoundPage,
  // decorators: [
  //   (story) => <div className="bg-travvit-orange/10 h-screen">{story()}</div>,
  // ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof NotFoundPage>;

export const Backgournd1: Story = {
  args: {
    jpegBackgroundImg: backgroundImg1,
  },
};

export const Backgournd2: Story = {
  args: {
    jpegBackgroundImg: backgroundImg2,
  },
};

export const Backgournd3: Story = {
  args: {
    jpegBackgroundImg: backgroundImg3,
    className: 'text-slate-900 drop-shadow-lg',
  },
};

export const Backgournd4: Story = {
  args: {
    jpegBackgroundImg: backgroundImg4,
  },
};

export const Backgournd5: Story = {
  args: {
    jpegBackgroundImg: backgroundImg4,
    webpBackgroundImg: backgroundImg5,
    // avifBackgroundImg: backgroundImg6,
  },
};
