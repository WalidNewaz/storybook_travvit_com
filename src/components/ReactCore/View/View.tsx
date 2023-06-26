import React from 'react';
import {View, Text} from 'react-native';

interface ViewBoxesWithColorAndTextProps {
  text: string;
}

/**
 * Primary UI view component for user interaction
 */
const ViewBoxesWithColorAndText = ({ text }: ViewBoxesWithColorAndTextProps) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: 100,
        padding: 20,
      }}>
      <View style={{backgroundColor: 'blue', flex: 0.3}} />
      <View style={{backgroundColor: 'red', flex: 0.5}} />
      <Text>{ text }</Text>
    </View>
  );
};

export default ViewBoxesWithColorAndText;

