import React from 'react';
import { Text, StyleSheet } from 'react-native';

interface BoldAndBeautifulProps {
  baseText: string;
  innerText: string;
}

const BoldAndBeautiful = ({ baseText, innerText }: BoldAndBeautifulProps) => {
  return (
    <Text style={styles.baseText}>
      {baseText}
      <Text style={styles.innerText}> {innerText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontWeight: 'bold',
  },
  innerText: {
    color: 'red',
  },
});

export default BoldAndBeautiful;
