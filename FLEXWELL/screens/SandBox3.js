const agendaData = [
  { task: "buy eggs", date: "2023-05-03T00:00:00.000Z" },
  { task: "buy eggs", date: "2023-06-02T00:00:00.000Z" },
  { task: "fix my car", date: "2023-06-03T00:00:00.000Z" },
  { task: "went to saloon", date: "2023-05-04T00:00:00.000Z" },
];

import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Dimensions, ScrollView } from "react-native";
import { Agenda, AgendaList, CalendarProvider } from "react-native-calendars";

import { LineChart } from "react-native-chart-kit";

const Sandbox2 = () => {
  const [items, setItems] = useState({});
  const windowWidth = Dimensions.get("window").width * 0.9;
  const agendaHeight = Dimensions.get("window").height * 0.4;

  useEffect(() => {
    const loadItems = () => {
      const newItems = {};

      agendaData.forEach((item) => {
        const date = new Date(item.date);
        const strTime = date.toISOString().split("T")[0];

        if (!newItems[strTime]) {
          newItems[strTime] = [];
        }

        newItems[strTime].push({
          name: item.task,
        });
      });

      // Populate empty arrays for the two-month range
      const currentDate = new Date();
      const startDate = new Date();
      startDate.setMonth(currentDate.getMonth() - 2);
      startDate.setDate(1); // Set the start date to the first day of the month

      const endDate = new Date();
      endDate.setMonth(currentDate.getMonth() + 2);
      endDate.setDate(0); // Set the end date to the last day of the month

      const currentTimestamp = startDate.getTime();
      const endTimestamp = endDate.getTime();

      for (
        let timestamp = currentTimestamp;
        timestamp <= endTimestamp;
        timestamp += 24 * 60 * 60 * 1000
      ) {
        const date = new Date(timestamp);
        const strTime = date.toISOString().split("T")[0];

        if (!newItems[strTime]) {
          newItems[strTime] = [];
        }
      }

      setItems(newItems);
    };

    loadItems();
  }, []);

  const renderItem = (item) => {
    return (
      <View style={styles.item}>
        <Text>{item.name}</Text>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Agenda
          showOnlySelectedDayItems={true}
          selected={new Date()}
          showClosingKnob={true}
          pastScrollRange={1}
          futureScrollRange={1}
          items={items}
          renderItem={renderItem}
          style={{
            height: agendaHeight,
            backgroundColor: "#ffffff",
            width: windowWidth,
          }}
          theme={{
            calendarBackground: "#ffffff",
            agendaKnobColor: "#F77C61",
            todayTextColor: "#F77C61", // Change today's date text color to red
            selectedDayBackgroundColor: "#F77C61", // Change selected day background color to red
            dotColor: "#F77C61", // Change the dot color in the agenda to red
            selectedDotColor: "#F77C61", // Change the selected dot color in the agenda to red
          }}
        />

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ padding: 12, margin: 12 }}>
            <LineChart
              data={{
                labels: [
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                ],
                datasets: [
                  {
                    data: [55, 51, 54, 55, 56, 55],
                  },
                ],
              }}
              bezier
              width={Dimensions.get("window").width * 0.9} // from react-native
              height={220}
              withInnerLines={true}
              withOuterLines={false}
              withVerticalLines={false}
              withHorizontalLines={true}
              yLabelsOffset="15"
              yAxisInterval={1} // optional, defaults to 1
              chartConfig={{
                backgroundColor: "#FFFFFF",
                backgroundGradientFrom: "#FFFFFF",
                backgroundGradientTo: "#FFFFFF",
                decimalPlaces: 0, // optional, defaults to 2dp
                strokeWidth: "3",
                fillShadowGradientFrom: "rgb(247, 124, 97)",
                fillShadowGradientFromOpacity: "0.8",
                fillShadowGradientToOpacity: "0.3",
                color: (opacity = 1) => `rgba(247, 124, 97, ${opacity})`,
                labelColor: (opacity = 1) => `rgba(247, 124, 97, ${opacity})`,
                propsForDots: {
                  r: "4",
                  strokeWidth: "2",
                  stroke: "rgb(247, 124, 97)",
                },
              }}
              style={{
                marginVertical: 8,
                backgroundColor: "red",
              }}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "green",
    padding: 12,
    justifyContent: "center",
    alignItems: "center",
  },
  additionalComponent: {
    backgroundColor: "#f9c2ff",
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  item: {
    backgroundColor: "rgb(247, 124, 97)",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20,
  },
});

export default Sandbox2;
