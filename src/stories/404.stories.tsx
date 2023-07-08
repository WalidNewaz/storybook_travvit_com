import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import { NotFoundPage } from '../components/404/404';

/** Assets */
import backgroundImg1 from './images/jaanus-jagomagi-night-1200.jpeg';
import backgroundImg2 from './images/austin-crow-desert-large.jpeg';
import backgroundImg3 from './images/jaanus-jagomagi-1200.jpeg';
import backgroundImg4 from './images/laura-chouette-lake-large.jpeg';

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
    backgroundImg: backgroundImg1,
  },
};

export const Backgournd2: Story = {
  args: {
    backgroundImg: backgroundImg2,
  },
};

export const Backgournd3: Story = {
  args: {
    backgroundImg: backgroundImg3,
    className: 'text-slate-900 drop-shadow-lg',
  },
};

export const Backgournd4: Story = {
  args: {
    backgroundImg: backgroundImg4,
  },
};
