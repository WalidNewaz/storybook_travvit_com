import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';

/** Component */
import {
  FaRegCircleUser,
  FaRegEnvelope,
  FaUserLargeSlash,
  FaUserMinus,
  FaUserCheck,
  FaPersonHiking,
  FaUserXmark,
  FaUserPlus,
  FaArrowRotateLeft,
  FaRegPenToSquare,
  FaRegTrashCan,
  FaUserSlash,
} from 'react-icons/fa6';

import ListItems, {
  UserConnectionListItem,
  UserConnection,
  TripUserListItem,
  TripUser,
  TripActivityListItem,
  TripActivitySummary,
  TripUserInviteItem,
  UserInvite,
  UserInviteStatus,
  TripWaitlistItem,
  WailistedUser,
  TripBannedUserListItem,
  BannedUser,
  ActivityGearListItem,
  ActivityGear,
  UserProfileSummary,
  UserProfileSummaryItem,
} from '../components/ListItems';

/** Interfaces */
import MenuItemType from '../components/Menu/MenuItem/MenuItem.interface';

/** Assets */
import lakeHaiyahaJpeg from './images/lake_haiyaha.jpeg';
import jane1Jpeg from './images/avatar-jane-1.jpeg';
import jane2Jpeg from './images/avatar-jane-2.jpeg';
import jane3Jpeg from './images/avatar-jane-3.jpeg';

export default {
  title: 'Components/List Items',
  component: ListItems,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/5 max-w-[80rem] h-[100vh] flex">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

// Define the interface for your item
export interface Item {
  id: number;
  name: string;
  // Add other properties as needed
}

// A trip participant
const tripUser: Pick<
  TripUser,
  'id' | 'name' | 'location' | 'imageUrl' | 'numActivities'
> = {
  id: '1' as string,
  name: 'Test User',
  location: 'Denver, CO',
  imageUrl: jane1Jpeg,
  numActivities: 3,
};

// Trip User story
export const TripUserStory: StoryObj<typeof TripUserListItem> = {
  name: 'Trip participant',
  render: () => {
    // View the participant's details
    const handleViewParticipant = (id: string) => {
      console.log('View participant', id);
    };

    // Send a message to the participant
    const handleMessageParticipant = (id: string) => {
      console.log('Message participant', id);
    };

    const menuItems = [
      {
        label: 'View Participant',
        onClick: handleViewParticipant,
        icon: FaRegCircleUser,
      },
      {
        label: 'Message',
        onClick: handleMessageParticipant,
        icon: FaRegEnvelope,
      },
    ];

    return <TripUserListItem {...tripUser} menuItems={menuItems} approved />;
  },
};

// Trip invite
const tripInvite: Pick<
  UserInvite,
  'id' | 'firstName' | 'lastName' | 'email' | 'status' | 'lastSentAt'
> = {
  id: '1' as string,
  firstName: 'Jane',
  lastName: 'Doe',
  email: 'jane1@email.com',
  status: 'canceled' as UserInviteStatus,
  lastSentAt: new Date(),
};

// Trip User invite story
export const TripUserInviteStory: StoryObj<typeof TripUserInviteItem> = {
  name: 'Trip invitation',
  render: () => {
    // View the participant's details
    const handleResendInvitation = (id: string) => {
      console.log('Resending invitation to:', id);
    };

    // Send a message to the participant
    const handleCancelInvitation = (id: string) => {
      console.log('Invitation canceled for:', id);
    };

    const menuItems = [
      {
        label: 'Resend Invitation',
        onClick: handleResendInvitation,
        icon: FaRegEnvelope,
      },
      {
        label: 'Cancle Invitation',
        onClick: handleCancelInvitation,
        icon: FaUserXmark,
      },
    ];

    return <TripUserInviteItem {...tripInvite} menuItems={menuItems} />;
  },
};

// A trip waitlisted user
const waitlistedUser: Pick<
  WailistedUser,
  'id' | 'name' | 'location' | 'imageUrl' | 'waitlistedOn'
> = {
  id: '1' as string,
  name: 'Test User',
  location: 'Denver, CO',
  imageUrl: jane1Jpeg,
  waitlistedOn: new Date(),
};

// Trip waitlisted user story
export const TripWaitlistedUserStory: StoryObj<typeof TripWaitlistItem> = {
  name: 'Trip waitlisted user',
  render: () => {
    // View the participant's details
    const handleAddAsParticipant = (id: string) => {
      console.log('Add user as participant', id);
    };

    // Remove from waitlist
    const handleRemoveFromWaitlist = (id: string) => {
      console.log('Remove user from waitlist', id);
    };

    const menuItems = [
      {
        label: 'Add as Participant',
        onClick: handleAddAsParticipant,
        icon: FaUserPlus,
      },
      {
        label: 'Remove user',
        onClick: handleRemoveFromWaitlist,
        icon: FaUserXmark,
      },
    ];

    return <TripWaitlistItem {...waitlistedUser} menuItems={menuItems} />;
  },
};

// A trip banned user
const bannedUser: Pick<
  BannedUser,
  'id' | 'name' | 'location' | 'imageUrl' | 'bannedOn'
> = {
  id: '1' as string,
  name: 'Test User',
  location: 'Denver, CO',
  imageUrl: jane1Jpeg,
  bannedOn: new Date(),
};

// Trip banned user story
export const TripBannedUserStory: StoryObj<typeof TripBannedUserListItem> = {
  name: 'Trip banned user',
  render: () => {
    // View the user's details
    const handleViewProfile = (id: string) => {
      console.log('View profile', id);
    };

    // Remove the user from the banned list
    const handleRemoveBan = (id: string) => {
      console.log('Remove ban for user', id);
    };

    const menuItems = [
      {
        label: 'View Profile',
        onClick: handleViewProfile,
        icon: FaRegCircleUser,
      },
      {
        label: 'Remove ban',
        onClick: handleRemoveBan,
        icon: FaArrowRotateLeft,
      },
    ];

    return <TripBannedUserListItem {...bannedUser} menuItems={menuItems} />;
  },
};

const avatarProps = [
  {
    src: jane1Jpeg as string,
    alt: 'Jane Doe',
  },
  {
    src: jane2Jpeg as string,
    alt: 'face2',
  },
  {
    src: jane3Jpeg as string,
    alt: 'face3',
  },
  {
    src: jane2Jpeg as string,
    alt: 'face2',
  },
  {
    src: jane3Jpeg as string,
    alt: 'face3',
  },
];

// A single trip activity
const tripActivity: Pick<
  TripActivitySummary,
  'id' | 'activityName' | 'imageUrl' | 'startTime' | 'duration' | 'groupMembers'
> = {
  id: '1' as string,
  activityName: 'Lake Haiyaha Hike',
  imageUrl: lakeHaiyahaJpeg,
  startTime: '10:00am',
  duration: {
    amount: 3,
    unit: 'hour',
  },
  groupMembers: avatarProps,
};

// Trip Activity story
export const TripActivityStory: StoryObj<typeof TripActivityListItem> = {
  name: 'Trip Activity',
  render: () => {
    const handleViewDetails = (id: string) => {
      console.log('View details', id);
    };

    const menuItems = [
      {
        label: 'View Details',
        onClick: handleViewDetails,
        icon: FaPersonHiking,
      },
    ];
    return <TripActivityListItem {...tripActivity} menuItems={menuItems} />;
  },
};

// A single user connection
const follower: Pick<UserConnection, 'id' | 'name' | 'location' | 'imageUrl'> =
  {
    id: '1' as string,
    name: 'Follower Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
  };

// Follower story
export const FollowerStory: StoryObj<typeof UserConnectionListItem> = {
  name: 'Follower',
  render: () => {
    // View the follower's profile
    const handleViewProfile = (id: string) => {
      console.log('View profile', id);
    };
    // Send a message to the follower
    const handleMessageUser = (id: string) => {
      console.log('Message user', id);
    };

    // Block the follower
    const handleBlockUser = (id: string) => {
      console.log('Block user', id);
    };

    const menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[] = [
      {
        label: 'View Profile',
        onClick: handleViewProfile,
        icon: FaRegCircleUser,
      },
      {
        label: 'Message',
        onClick: handleMessageUser,
        icon: FaRegEnvelope,
      },
      {
        label: 'Block',
        onClick: handleBlockUser,
        icon: FaUserLargeSlash,
      },
    ];
    return <UserConnectionListItem {...follower} menuItems={menuItems} />;
  },
};

// A single user being followed
const following: Pick<UserConnection, 'id' | 'name' | 'location' | 'imageUrl'> =
  {
    id: '1' as string,
    name: 'Following Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
  };

// Following story
export const FollowingStory: StoryObj<typeof UserConnectionListItem> = {
  name: 'Following',
  render: () => {
    // View the following's profile
    const handleViewProfile = (id: string) => {
      console.log('View profile', id);
    };

    // Send a message to the following
    const handleMessageUser = (id: string) => {
      console.log('Message user', id);
    };

    // Unfollow the following
    const handleUnfollowUser = (id: string) => {
      console.log('Unfollow user', id);
    };

    const menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[] = [
      {
        label: 'View Profile',
        onClick: handleViewProfile,
        icon: FaRegCircleUser,
      },
      {
        label: 'Message',
        onClick: handleMessageUser,
        icon: FaRegEnvelope,
      },
      {
        label: 'Unfollow',
        onClick: handleUnfollowUser,
        icon: FaUserMinus,
      },
    ];
    return <UserConnectionListItem {...following} menuItems={menuItems} />;
  },
};

// A single user being blocked
const blocked: Pick<UserConnection, 'id' | 'name' | 'location' | 'imageUrl'> = {
  id: '1' as string,
  name: 'Blocked Test User',
  location: 'Denver, CO',
  imageUrl: jane3Jpeg,
};

// Blocked story
export const BlockedStory: StoryObj<typeof UserConnectionListItem> = {
  name: 'Blocked',
  render: () => {
    // View the blocked user's profile
    const handleViewProfile = (id: string) => {
      console.log('View profile', id);
    };

    // Unblock the blocked user
    const handleUnblockUser = (id: string) => {
      console.log('Unblock user', id);
    };

    const menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[] = [
      {
        label: 'View Profile',
        onClick: handleViewProfile,
        icon: FaRegCircleUser,
      },
      {
        label: 'Unblock',
        onClick: handleUnblockUser,
        icon: FaUserCheck,
      },
    ];
    return <UserConnectionListItem {...blocked} menuItems={menuItems} />;
  },
};

// A single activity gear item
const activityGear: Pick<
  ActivityGear,
  'id' | 'name' | 'description' | 'imageUrl' | 'quantity' | 'quantityUnit'
> = {
  id: '1' as string,
  name: 'Test Gear',
  description: 'This is a long description for a test gear.',
  imageUrl: jane1Jpeg,
  quantity: 4,
  quantityUnit: 'piece',
};

// Activity gear story
export const ActivityGearStory: StoryObj<typeof ActivityGearListItem> = {
  name: 'Activity gear',
  render: () => {
    // View the gear item's details
    const handleUpdateQuantity = (id: string) => {
      console.log('Update quantity', id);
    };

    // Remove the gear item
    const handleRemoveGear = (id: string) => {
      console.log('Remove gear', id);
    };

    const menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[] = [
      {
        label: 'Update quantity',
        onClick: handleUpdateQuantity,
        icon: FaRegPenToSquare,
      },
      {
        label: 'Remove Gear',
        onClick: handleRemoveGear,
        icon: FaRegTrashCan,
      },
    ];
    return <ActivityGearListItem {...activityGear} menuItems={menuItems} />;
  },
};

// User profile summary
import { UserStatus } from '../components/ListItems/UserProfileSummary/StatusBadge';
import { UserRole } from '../components/ListItems/UserProfileSummary/RoleBadge';
const userProfile: Pick<
  UserProfileSummary,
  | 'id'
  | 'name'
  | 'email'
  | 'username'
  | 'role'
  | 'status'
  | 'imageUrl'
  | 'location'
  | 'createdAt'
  | 'menuItems'
> = {
  id: '1' as string,
  name: 'Jane Doe',
  email: 'jane123@email.com',
  username: 'jane123',
  role: UserRole.USER,
  status: UserStatus.ACTIVE,
  imageUrl: jane1Jpeg,
  location: 'Denver, CO',
  createdAt: new Date(),
  menuItems: [
    {
      label: 'View Profile',
      onClick: (id: string) => console.log('View profile', id),
      icon: FaRegCircleUser,
    },
    {
      label: 'Message',
      onClick: (id: string) => console.log('Message user', id),
      icon: FaRegEnvelope,
    },
    {
      label: 'Suspend',
      onClick: (id: string) => console.log('Suspend user', id),
      icon: FaUserSlash,
    },
  ],
};

// User profile summary story
export const UserProfileSummaryStory: StoryObj<typeof UserProfileSummaryItem> =
  {
    name: 'User profile summary',
    render: () => <UserProfileSummaryItem {...userProfile} />,
  };
