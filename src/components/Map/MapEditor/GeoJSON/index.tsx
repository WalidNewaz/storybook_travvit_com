import React, { useState } from 'react';
import AceEditor from 'react-ace';

import 'ace-builds/src-noconflict/mode-json';
import 'ace-builds/src-noconflict/theme-tomorrow';
import 'ace-builds/src-noconflict/ext-language_tools';

const GeoJSONEditor: React.FC<{
  geometry: any;
  setGeometry: React.Dispatch<any>;
}> = ({ geometry, setGeometry }) => {
  // const [textValue, setTextValue] = useState(placeDescription);

  function onChange(newValue: any) {
    console.log('change', newValue);
    setGeometry(newValue);
  }

  const beautifiedGeometry =
    geometry && JSON.stringify(JSON.parse(geometry), null, 2);

  return (
    <div className="col-span-full">
      <AceEditor
        placeholder="Placeholder Text"
        mode="json"
        theme="tomorrow"
        name="blah2"
        // onLoad={this.onLoad}
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
        height="85vh"
      />
    </div>
  );
};

export default GeoJSONEditor;
