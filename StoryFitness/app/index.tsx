// index.tsx
import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import Timer from './Timer';

export default function Index() {
  const [startValue, setStartValue] = useState(60);

  return (
    <View style={styles.container}>
      <Text>Hello World!</Text>
      <Timer startValue={5} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 20,
    textAlign: 'center',
    width: '60%',
  },
});
