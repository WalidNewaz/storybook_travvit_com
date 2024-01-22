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

  return (
    <>
      <TabPane tabs={tabs} />
      <p className="px-8 w-full text-sm leading-6 text-gray-600">
        Features cannot be edited once you switch tabs or save. If you need to
        edit a feature, delete it and create a new one.
      </p>
    </>
  );
};

export default MapEditor;
