import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Stopwatch } from "react-native-stopwatch-timer";

const StopwatchExample = () => {
  const [isTimerStart, setIsTimerStart] = useState(false);
  const [resetTimer, setResetTimer] = useState(false);
  const [timerDuration, setTimerDuration] = useState(0);
  const [formattedTime, setFormattedTime] = useState("");
  const [laps, setLaps] = useState([]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
    timerText: {
      fontSize: 48,
      fontWeight: "bold",
      marginBottom: 20,
    },
    buttonContainer: {
      flexDirection: "row",
      justifyContent: "space-around",
      marginBottom: 20,
    },
    button: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      backgroundColor: "#007AFF",
      borderRadius: 5,
    },
    buttonText: {
      color: "#FFFFFF",
      fontSize: 16,
      fontWeight: "bold",
    },
    lapText: {
      fontSize: 20,
      fontWeight: "bold",
      marginBottom: 10,
    },
    lapTimeText: {
      fontSize: 16,
      marginBottom: 5,
    },
  });

  // Function to handle start/stop button press
  const toggleTimer = () => {
    setIsTimerStart(!isTimerStart);
    setResetTimer(false);
  };

  // Function to handle reset button press
  const resetStopwatch = () => {
    setIsTimerStart(false);
    setResetTimer(true);
    setTimerDuration(0);
    setFormattedTime("");
    setLaps([]);
  };

  // Function to handle lap button press
  const addLap = () => {
    setLaps([...laps, timerDuration]);
  };

  // Function to format the stopwatch time
  const formatTime = (time) => {
    let minutes = Math.floor(time / (60 * 1000));
    let seconds = Math.floor((time % (60 * 1000)) / 1000);
    let milliseconds = Math.floor((time % 1000) / 10);
    return (
      (minutes < 10 ? "0" + minutes : minutes) +
      ":" +
      (seconds < 10 ? "0" + seconds : seconds) +
      "." +
      (milliseconds < 10 ? "0" + milliseconds : milliseconds)
    );
  };

  // Function to update the stopwatch time
  const updateTime = (time) => {
    setTimerDuration(time);
    setFormattedTime(formatTime(time));
  };

  return (
    <View style={styles.container}>
      <Stopwatch
        laps
        msecs
        start={isTimerStart}
        reset={resetTimer}
        options={options}
        getTime={updateTime}
      />

      <Text style={styles.timerText}>{formattedTime}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleTimer}>
          <Text style={styles.buttonText}>
            {isTimerStart ? "Stop" : "Start"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={resetStopwatch}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={addLap}>
          <Text style={styles.buttonText}>Lap</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.lapText}>Laps:</Text>
      {laps.map((lap, index) => (
        <Text key={index} style={styles.lapTimeText}>
          Lap {index + 1}: {formatTime(lap)}
        </Text>
      ))}
    </View>
  );
};

export default StopwatchExample;
