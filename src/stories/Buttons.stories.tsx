import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../components/Button/Button';
import FloatingActionButton from '../components/Buttons/FloatingActionButton';
import FloatingActionMenu from '../components/Menu/FloatingActionMenu/FloatingActionMenu';

/** Assets */
import { AiOutlinePlus } from 'react-icons/ai';
import { PiMountainsDuotone } from 'react-icons/pi';
import { FaPersonHiking } from 'react-icons/fa6';
import { BiTrip } from 'react-icons/bi';

const meta = {
  title: 'Components/Buttons',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof Button>;

export const Fob: Story = {
  name: 'Floating Action Button',
  render: () => (
    <FloatingActionButton
      icon={<AiOutlinePlus className="w-6 h-6 text-white" />}
      onClick={() => console.log('Clicked on the FOB.')}
    />
  ),
};

const handleAddTrip = () => {
  console.log('Add a trip!');
};

const handleAddActivity = () => {
  console.log('Add an activity!');
};

const handleAddPlace = () => {
  console.log('Add a place!');
};

export const Fom: Story = {
  name: 'Floating Action Menu',
  render: () => (
    <FloatingActionMenu
      icon={<AiOutlinePlus className="w-6 h-6 text-white" />}
      position="bottom-right"
      menuItems={[
        {
          label: 'Add a Place',
          onClick: handleAddPlace,
          icon: PiMountainsDuotone,
        },
        {
          label: 'Add an Activity',
          onClick: handleAddActivity,
          icon: FaPersonHiking,
        },
        { label: 'Add a Trip', onClick: handleAddTrip, icon: BiTrip },
      ]}
    />
  ),
};
