import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import DialogModal from '../components/Modal/Dialog/';
import LoginModal from '../components/Modal/Login/';
import { IoListCircleSharp } from 'react-icons/io5';

export default {
  title: 'Components/Modal',
  component: DialogModal,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/10 max-w-[80rem] h-[50vh] flex">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof DialogModal>;

export const DefaultDialogModal: Story = {
  name: 'Default dialog modal',
  render: () => (
    <DialogModal
      icon={<IoListCircleSharp className="w-6 h-6 text-travvit-blue" />}
      heading="Deactivate account"
      message={
        <>
          <p className="mb-4">
            A dialog box component that displays long text, such as terms of
            agreement, is often referred to as a "scrollable dialog" or a "text
            dialog." This type of dialog box allows users to view content that
            extends beyond the visible area by providing a scrollbar or other
            means of scrolling through the text. It ensures that users can read
            and navigate through lengthy content comfortably within the confines
            of the dialog box.
          </p>
          <p className="mb-4">
            The specific terminology might vary depending on the user interface
            framework or design guidelines being followed.
          </p>
        </>
      }
      proceedButtonText="Deactivate"
      onProceed={() => alert('Proceed')}
      dismissButtonText="Cancel"
      onDismiss={() => alert('Dismiss')}
    />
  ),
};

export const DefaultLoginModal: Story = {
  name: 'Default login modal',
  render: () => <LoginModal />,
};
