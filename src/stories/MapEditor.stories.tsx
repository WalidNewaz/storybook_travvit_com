import type { Meta, StoryObj } from '@storybook/react';
import React, { useRef } from 'react';

import 'leaflet/dist/leaflet.css';
// import 'leaflet-geoman-free/dist/leaflet-geoman.css';
/** Component */
import MapEditor from '../components/Map/MapEditor';

export default {
  title: 'Components/MapEditor',
  component: MapEditor,
  decorators: [
    (story) => {
      return (
        <div className="bg-travvit-orange/10 min-h-[85vh] h-[100vh] w-[100vw]">
          {story()}
        </div>
      );
    },
  ],
  tags: ['autodocs'],
} as Meta;

type Story = StoryObj<typeof MapEditor>;

export const MapEditorStory: Story = {
  name: 'Map Editor',
  render: () => {
    return (
      <div className="App">
        <MapEditor />
      </div>
    );
  },
};
