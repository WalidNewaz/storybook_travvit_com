import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import Alert from '../components/Alert/Alert';
import AlertList from '../components/Alert/AlertList';
import AlertErrorList from '../components/Alert/AlertErrorList';

import { FiMapPin } from 'react-icons/fi';

export default {
  title: 'Components/Alert',
  component: Alert,
  decorators: [
    (story) => <div className="max-w-[80rem] h-full flex p-4">{story()}</div>,
  ],
  tags: ['autodocs'],
} as Meta;

export const Default: StoryObj<typeof Alert> = {
  name: 'Default Alert',
  args: {
    icon: <FiMapPin className="w-5 h-5 text-red-700" />,
    heading: 'Default Alert',
    message: <p>This is a default alert.</p>,
  },
};

export const List: StoryObj<typeof AlertList> = {
  name: 'List Alert',
  render: () => (
    <AlertList
      heading="There were 2 errors with your submission"
      listItems={[
        'Your password must be at least 8 characters long.',
        'Your password must contain at least one number.',
      ]}
      hidden={false}
    />
  ),
};

export const ErrorList: StoryObj<typeof AlertErrorList> = {
  name: 'Error List Alert',
  render: () => (
    <AlertErrorList
      heading="There were 2 errors with your submission"
      listItems={[
        'Your password must be at least 8 characters long.',
        'Your password must contain at least one number.',
      ]}
      hidden={false}
    />
  ),
};
