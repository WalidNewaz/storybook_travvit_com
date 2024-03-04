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
import {
  TripUser,
  TripActivitySummary,
  UserConnection,
  UserInvite,
  UserInviteStatus,
  WailistedUser,
  BannedUser,
  ActivityGear,
  UserProfileSummary,
} from '../components/ListItems';
import Lists, {
  TripUserList,
  TripActivityList,
  UserConnectionList,
  TripInviteList,
  TripWaitlist,
  TripBannedUserList,
  ActivityGearList,
  UserProfileList,
} from '../components/Lists';

/** Interfaces */
import MenuItemType from '../components/Menu/MenuItem/MenuItem.interface';

/** Assets */
import lakeHaiyahaJpeg from './images/lake_haiyaha.jpeg';
import incaTrail from './images/inca-trail.jpeg';
import kalalauTrail from './images/kalalau_trail.jpeg';
import niagraFalls from './images/niagra-falls.jpeg';
import jane1Jpeg from './images/avatar-jane-1.jpeg';
import jane2Jpeg from './images/avatar-jane-2.jpeg';
import jane3Jpeg from './images/avatar-jane-3.jpeg';

export default {
  title: 'Components/Lists',
  component: Lists,
  decorators: [
    (story) => (
      <div className="bg-travvit-orange/5 max-w-[80rem] h-[100vh] flex">
        {story()}
      </div>
    ),
  ],
  tags: ['autodocs'],
} as Meta;

// Trip participants
const tripUsers: Partial<TripUser>[] = [
  {
    id: '1',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    approved: true,
    numActivities: 3,
  },
  {
    id: '2',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    approved: false,
    numActivities: 5,
  },
  {
    id: '3',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    approved: true,
    numActivities: 3,
  },
  {
    id: '4',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    approved: false,
    numActivities: 0,
  },
  {
    id: '5',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    approved: false,
    numActivities: 3,
  },
];

// Trip User list story
export const TripUserListStory: StoryObj<typeof TripUserList> = {
  name: 'Trip participant list',
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

    return <TripUserList items={tripUsers} menuItems={menuItems} />;
  },
};

// Trip invites
const tripInvites: Pick<
  UserInvite,
  'id' | 'firstName' | 'lastName' | 'email' | 'status' | 'lastSentAt'
>[] = [
  {
    id: '1',
    firstName: 'Test',
    lastName: 'User',
    email: 'test@example.com',
    status: 'pending' as UserInviteStatus,
    lastSentAt: new Date(),
  },
  {
    id: '2',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser2@email.com',
    status: 'accepted' as UserInviteStatus,
    lastSentAt: new Date(),
  },
  {
    id: '3',
    firstName: 'Test',
    lastName: 'User',
    email: 'test3user@example.com',
    status: 'rejected' as UserInviteStatus,
    lastSentAt: new Date(),
  },
  {
    id: '4',
    firstName: 'Test',
    lastName: 'User',
    email: 'testuser4@email.com',
    status: 'canceled' as UserInviteStatus,
    lastSentAt: new Date(),
  },
  {
    id: '5',
    firstName: 'Test',
    lastName: 'User',
    email: 'myuser5@email.com',
    status: 'pending' as UserInviteStatus,
    lastSentAt: new Date(),
  },
];

// Trip Invite list story
export const TripInviteListStory: StoryObj<typeof TripInviteList> = {
  name: 'Trip invite list',
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

    return <TripInviteList items={tripInvites} menuItems={menuItems} />;
  },
};

// Waitlisted users
const waitlistedUsers: Pick<
  WailistedUser,
  'id' | 'name' | 'location' | 'imageUrl' | 'waitlistedOn'
>[] = [
  {
    id: '1',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    waitlistedOn: new Date(),
  },
  {
    id: '2',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
    waitlistedOn: new Date(),
  },
  {
    id: '3',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane3Jpeg,
    waitlistedOn: new Date(),
  },
  {
    id: '4',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    waitlistedOn: new Date(),
  },
  {
    id: '5',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
    waitlistedOn: new Date(),
  },
];

// Waitlisted users list story
export const WaitlistedUsersListStory: StoryObj<typeof TripWaitlist> = {
  name: 'Trip waitlist',
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

    return <TripWaitlist items={waitlistedUsers} menuItems={menuItems} />;
  },
};

// Banned users
const bannedUsers: Pick<
  BannedUser,
  'id' | 'name' | 'location' | 'imageUrl' | 'bannedOn'
>[] = [
  {
    id: '1',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    bannedOn: new Date(),
  },
  {
    id: '2',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
    bannedOn: new Date(),
  },
  {
    id: '3',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane3Jpeg,
    bannedOn: new Date(),
  },
  {
    id: '4',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
    bannedOn: new Date(),
  },
  {
    id: '5',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
    bannedOn: new Date(),
  },
];

// Banned users list story
export const BannedUsersListStory: StoryObj<typeof TripBannedUserList> = {
  name: 'Trip banned users',
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

    return <TripBannedUserList items={bannedUsers} menuItems={menuItems} />;
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

// List of trip activities
const tripActivities: Partial<TripActivitySummary>[] = [
  {
    id: '1',
    activityName: 'Lake Haiyaha Hike',
    imageUrl: lakeHaiyahaJpeg,
    startTime: new Date().toLocaleString(),
    duration: {
      amount: 3,
      unit: 'hour',
    },
    groupMembers: avatarProps,
  },
  {
    id: '2',
    activityName: 'Kalalau Trail Hike',
    imageUrl: kalalauTrail,
    startTime: '12/25/2023, 8:30:00 AM',
    duration: {
      amount: 8,
      unit: 'hour',
    },
    groupMembers: avatarProps,
  },
  {
    id: '3',
    activityName: 'Inca Trail Hike',
    imageUrl: incaTrail,
    startTime: '12/28/2023, 8:30:00 AM',
    duration: {
      amount: 5,
      unit: 'day',
    },
    groupMembers: avatarProps.slice(1, 3),
  },
  {
    id: '4',
    activityName: 'Niagra Falls Hike',
    imageUrl: niagraFalls,
    startTime: '01/6/2024, 11:30:00 AM',
    duration: {
      amount: 4,
      unit: 'hour',
    },
    groupMembers: avatarProps.slice(0, 3),
  },
  {
    id: '5',
    activityName: 'Lake Haiyaha Hike',
    imageUrl: lakeHaiyahaJpeg,
    startTime: '10:00am',
    duration: {
      amount: 3,
      unit: 'hour',
    },
    groupMembers: avatarProps,
  },
];

// Trip Activity list story
export const TripActivityListStory: StoryObj<typeof TripActivityList> = {
  name: 'Trip activities list',
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
    return <TripActivityList items={tripActivities} menuItems={menuItems} />;
  },
};

// User connections
const userConnections: Pick<
  UserConnection,
  'id' | 'name' | 'location' | 'imageUrl'
>[] = [
  {
    id: '1',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
  },
  {
    id: '2',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
  },
  {
    id: '3',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane3Jpeg,
  },
  {
    id: '4',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane1Jpeg,
  },
  {
    id: '5',
    name: 'Test User',
    location: 'Denver, CO',
    imageUrl: jane2Jpeg,
  },
];

// Followers list story
export const FollowersListStory: StoryObj<typeof UserConnectionList> = {
  name: 'Followers list',
  render: () => {
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

    const menuItems = [
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

    return <UserConnectionList items={userConnections} menuItems={menuItems} />;
  },
};

// Following list story
export const FollowingListStory: StoryObj<typeof UserConnectionList> = {
  name: 'Following list',
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

    return <UserConnectionList items={userConnections} menuItems={menuItems} />;
  },
};

// Blocked list story
export const BlockedListStory: StoryObj<typeof UserConnectionList> = {
  name: 'Blocked list',
  render: () => {
    // View the blocked user's profile
    const handleViewProfile = (id: string) => {
      console.log('View profile', id);
    };

    // Unblock the user
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

    return <UserConnectionList items={userConnections} menuItems={menuItems} />;
  },
};

// Activity gear
const activityGear: Pick<
  ActivityGear,
  'id' | 'name' | 'description' | 'imageUrl' | 'quantity' | 'quantityUnit'
>[] = [
  {
    id: '1',
    name: 'Test Gear',
    description: 'Test gear description',
    imageUrl: jane1Jpeg,
    quantity: 1,
    quantityUnit: 'item',
  },
  {
    id: '2',
    name: 'Test Gear',
    description: 'Test gear description',
    imageUrl: jane2Jpeg,
    quantity: 2,
    quantityUnit: 'item',
  },
  {
    id: '3',
    name: 'Test Gear',
    description: 'Test gear description',
    // imageUrl: jane3Jpeg,
    quantity: 3,
    quantityUnit: 'item',
  },
  {
    id: '4',
    name: 'Test Gear',
    description: 'Test gear description',
    imageUrl: jane1Jpeg,
    quantity: 4,
    quantityUnit: 'item',
  },
  {
    id: '5',
    name: 'Test Gear',
    description: 'Test gear description',
    imageUrl: jane2Jpeg,
    quantity: 5,
    quantityUnit: 'item',
  },
];

// Activity gear list story
export const ActivityGearListStory: StoryObj<typeof ActivityGearList> = {
  name: 'Activity gear list',
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

    return <ActivityGearList items={activityGear} menuItems={menuItems} />;
  },
};

// User profiles
import { UserStatus } from '../components/ListItems/UserProfileSummary/StatusBadge';
import { UserRole } from '../components/ListItems/UserProfileSummary/RoleBadge';
const userProfiles: Partial<UserProfileSummary>[] = [
  {
    id: '1',
    name: 'Test User',
    email: 'test.user@email.com',
    username: 'testuser',
    role: UserRole.USER,
    status: UserStatus.ACTIVE,
    imageUrl: jane1Jpeg,
    location: 'Denver, CO',
    createdAt: new Date(),
  },
  {
    id: '2',
    name: 'Test User 2',
    email: 'test.user2@email.com',
    username: 'testuser',
    role: UserRole.USER,
    status: UserStatus.PENDING,
    imageUrl: jane1Jpeg,
    location: 'Aspen, CO',
    createdAt: new Date(),
  },
  {
    id: '3',
    name: 'Jane Doe',
    email: 'jane.doe@email.com',
    username: 'testuser',
    role: UserRole.ADMIN,
    status: UserStatus.ACTIVE,
    imageUrl: jane1Jpeg,
    location: 'Boulder, CO',
    createdAt: new Date(),
  },
];

// User profile list story
export const UserProfileListStory: StoryObj<typeof UserProfileList> = {
  name: 'User profile list',
  render: () => {
    const menuItems: Pick<MenuItemType, 'label' | 'onClick' | 'icon'>[] = [
      {
        label: 'View Profile',
        onClick: (id: string) => console.log('View profile', id),
        icon: FaRegCircleUser,
      },
      {
        label: 'Suspend',
        onClick: (id: string) => console.log('Suspend user', id),
        icon: FaUserSlash,
      },
    ];
    return <UserProfileList items={userProfiles} menuItems={menuItems} />;
  },
};
