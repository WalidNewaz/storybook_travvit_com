import React, { useState, useEffect } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { useSelector, useDispatch } from 'react-redux';
import ContentLoader from 'react-content-loader';
import type { RequestStatus } from '../types';
import { Mockstore } from './mocks/store';
import { login, logout } from './mocks/profile/profileSlice';
import { createPlace, resetStatus } from './mocks/places/placesSlice';
import { FormStates } from '../components/Forms/enums';

/** Component */
import { FullPageScroll } from '../components/FullPageScroll/FullPageScroll';
import { TravvitFooter } from '../components/TravvitFooter/TravvitFooter';
import { Header as TravvitHeader } from '../components/Header/Header';
import AddPlaceForm from '../components/Forms/AddPlace/AddPlaceForm';

import type { clickHandler } from '../types';

/** Assets */
import { getMenuItems } from './mocks/menuItems';

const WrappedHeader = () => {
  const dispatch = useDispatch();
  const menuItems = getMenuItems(dispatch, login, logout);
  const user = useSelector((state: any) => state.profile.user);
  return <TravvitHeader menuItems={menuItems} user={user} />;
};

export default {
  title: 'Pages/Add Place',
  component: FullPageScroll,
  decorators: [
    (story) => {
      return (
        <Mockstore>
          <div className="flex w-full h-full bg-travvit-orange/10">
            <div className="left-column flex-1"></div>
            <div className="middle-column flex-[0_1_92%] max-w-screen-dt_mid mt-8">
              <WrappedHeader />
              {story()}
              <TravvitFooter />
            </div>
            <div className="right-column flex-1"></div>
          </div>
        </Mockstore>
      );
    },
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof FullPageScroll>;

const AddPlacePage: React.FC = () => {
  const dispatch = useDispatch();
  const onCreatePlace = async (place: any) => {
    await dispatch(createPlace(place));
  };
  const formState = useSelector((state: any) => state.places.status);

  useEffect(() => {
    if (formState === FormStates.SUCCEEDED) {
      dispatch(resetStatus());
      // TODO: Redirect to the place page
    }
  }, [formState]);

  return <AddPlaceForm createPlace={onCreatePlace} formState={formState} />;
};

export const AddPlace: Story = {
  name: 'Add Place',
  render: () => <AddPlacePage />,
};
