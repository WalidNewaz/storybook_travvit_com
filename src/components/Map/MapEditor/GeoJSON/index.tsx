import React from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/ext-language_tools';

const GeoJSONEditor: React.FC<{
  geometry: any;
  setGeometry: React.Dispatch<any>;
}> = ({ geometry, setGeometry }) => {
  function onChange(newValue: any) {
    const uglifiedGeometry = JSON.stringify(JSON.parse(newValue));
    setGeometry(uglifiedGeometry);
  }

  const beautifiedGeometry =
    geometry && JSON.stringify(JSON.parse(geometry), null, 2);

  return (
    <div className="col-span-full">
      <AceEditor
        placeholder="GeoJSON string here..."
        mode="json"
        theme="tomorrow"
        name="blah2"
        onChange={onChange}
        fontSize={16}
        showPrintMargin={true}
        showGutter={true}
        highlightActiveLine={true}
        value={beautifiedGeometry as string | ''}
        setOptions={{
          enableBasicAutocompletion: false,
          enableLiveAutocompletion: false,
          enableSnippets: false,
          showLineNumbers: true,
          tabSize: 2,
        }}
        width="100%"
        height="75vh"
      />
    </div>
  );
};

export default GeoJSONEditor;
