import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

/** Component */
import { Card } from '../components/Card/Card';
import {
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CloseIcon,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  YoutubeIcon,
  HambugerIcon,
  SignInIcon,
  SignOutIcon,
} from '../components/Icons';

import { PhoneIcon } from '@heroicons/react/24/outline';

export default {
  title: 'Components/Icons',
  component: Card,
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof Card>;

export const ChevDown: Story = {
  name: 'Chevron Down',
  render: () => <ChevronDown classes="icon" />,
};

export const ChevLeft: Story = {
  name: 'Chevron Left',
  render: () => <ChevronLeft classes="icon" />,
};

export const ChevRight: Story = {
  name: 'Chevron Right',
  render: () => <ChevronRight classes="icon" />,
};

export const ClsIcon: Story = {
  name: 'Close Icon',
  render: () => <CloseIcon classes="icon" />,
};

export const Facebook: Story = {
  name: 'Facebook Icon',
  render: () => <FacebookIcon classes="icon" />,
};

export const Github: Story = {
  name: 'Github Icon',
  render: () => <GithubIcon classes="icon" />,
};

export const Instagram: Story = {
  name: 'Instagram Icon',
  render: () => <InstagramIcon classes="icon" />,
};

export const Youtube: Story = {
  name: 'Youtube Icon',
  render: () => <YoutubeIcon classes="icon" />,
};

export const Hambuger: Story = {
  name: 'Hambuger Icon',
  render: () => <HambugerIcon classes="icon" />,
};

export const SignIn: Story = {
  name: 'Sign In Icon',
  render: () => <SignInIcon classes="icon" />,
};

export const SignOut: Story = {
  name: 'Sign Out Icon',
  render: () => <SignOutIcon classes="icon" />,
};

export const Phone: Story = {
  name: 'Phone Icon',
  render: () => <PhoneIcon className="icon" />,
};
