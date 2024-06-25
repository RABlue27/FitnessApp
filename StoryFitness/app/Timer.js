// Timer.js
import React, { useState, useEffect } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

const Timer = ({ startValue }) => {
  const [seconds, setSeconds] = useState(startValue);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isRunning && seconds > 0) {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1);
      }, 1000);
    } else if (!isRunning || seconds === 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, seconds]);

  const resetTimer = () => {
    setIsRunning(false);
    setSeconds(startValue);
  };

  const goToNext = () => {
    if (seconds === 0) {
      setSeconds(Math.ceil((Math.random() * 20) / 5) * 5);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{seconds}s</Text>
      <View style={styles.buttonContainer}>
        <Button title={isRunning ? "Pause" : "Start"} onPress={() => setIsRunning(!isRunning)} />
        <Button title="Next" onPress={goToNext} disabled={seconds !== 0} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 48,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

export default Timer;
