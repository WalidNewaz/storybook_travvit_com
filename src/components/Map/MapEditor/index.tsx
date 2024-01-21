import React, { useState } from 'react';
import TabPane from '../../Tabs';
import GeoJSON from './GeoJSON';
import Map from './Map';

const MapEditor: React.FC = () => {
  const [geometry, setGeometry] = useState<any>(null);

  const tabs = [
    {
      label: 'Map',
      content: <Map geometry={geometry} setGeometry={setGeometry} />,
    },
    {
      label: 'GeoJSON',
      content: <GeoJSON geometry={geometry} setGeometry={setGeometry} />,
    },
  ];

  return <TabPane tabs={tabs} />;
};

export default MapEditor;
