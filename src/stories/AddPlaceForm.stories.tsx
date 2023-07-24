import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import AddPlaceForm from '../components/Forms/AddPlace/AddPlaceForm';

export default {
  title: 'Components/Add Place Form',
  component: AddPlaceForm,
  decorators: [
    (story) => <div className="bg-travvit-orange/10 h-full">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof AddPlaceForm>;

export const Default: Story = {};
