import React from "react";
import { View } from "react-native";
import { Line } from "react-chartjs-2";

const labels = ["January", "February", "March", "April", "May", "June", "July"];
const dataset1Data = [300, 450, 500, 550, 400, 600, 700];
const dataset2Data = [600, 700, 550, 800, 900, 750, 700];

const data = {
  labels,
  datasets: [
    {
      data: dataset1Data,
      color: (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
    },
    {
      data: dataset2Data,
      color: (opacity = 1) => `rgba(53, 162, 235, ${opacity})`,
    },
  ],
};

function LineChartScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Line data={data} width={300} height={200} bezier />
    </View>
  );
}

export default LineChartScreen;
