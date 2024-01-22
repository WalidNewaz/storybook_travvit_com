import React, { useState } from 'react';

/** Components */
import TabPane from '../../Tabs';
import GeoJSON from './GeoJSON';
import Map from './Map';
import { IconButton } from '../../IconButton/IconButton';
import { FaRegSave } from 'react-icons/fa';

/** Types */
import type { submitHandler } from '../../../types';

const MapEditor: React.FC<{ onSave: submitHandler }> = ({ onSave }) => {
  const [geometry, setGeometry] = useState<any>(null);

  const saveMap = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => {
    e.preventDefault();
    onSave && onSave(geometry);
  };

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
      <div className="px-8 w-full flex justify-end">
        <IconButton
          label={'Save'}
          icon={<FaRegSave />}
          onClick={saveMap}
          className="text-base flex items-center"
          primary
        />
      </div>
    </>
  );
};

export default MapEditor;
