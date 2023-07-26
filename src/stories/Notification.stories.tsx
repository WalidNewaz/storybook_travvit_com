import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import Notification from '../components/Notification/Notification';
import SuccessNotification from '../components/Notification/SuccessNotification';
import WarningNotification from '../components/Notification/WarningNotification';
import ErrorNotification from '../components/Notification/ErrorNotification';
import ErrorListNotification from '../components/Notification/ErrorListNotification';

export default {
  title: 'Components/Notification',
  component: Notification,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem] h-[50vh] flex">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Notification>;

export const Success: Story = {
  name: 'Success Notification',
  render: () => (
    <SuccessNotification
      heading="Successfully saved!"
      message="Anyone with a link can now view this file."
      hidden={false}
    />
  ),
};

export const Warning: Story = {
  name: 'Warning Notification',
  render: () => (
    <WarningNotification
      heading="Warning!"
      message="Anyone with a link can now view this file."
      hidden={false}
    />
  ),
};

export const Error: Story = {
  name: 'Error Notification',
  render: () => (
    <ErrorNotification
      heading="Error occurred!"
      message="Anyone with a link can now view this file."
      hidden={false}
    />
  ),
};

export const ErrorList: Story = {
  name: 'Error List Notification',
  render: () => (
    <ErrorListNotification
      heading="Error occurred!"
      listItems={[
        'Your password must be at least 8 characters long.',
        'Your password must contain at least one number.',
      ]}
      hidden={false}
    />
  ),
};
