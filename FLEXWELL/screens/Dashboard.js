import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Pressable,
  Dimensions,
  ScrollView,
} from "react-native";
import { CalendarProvider, ExpandableCalendar } from "react-native-calendars";
import { LineChart } from "react-native-chart-kit";
import { primaryColor, textAccent } from "../color-and-size.config";

const DashboardScreen = ({ route, navigation }) => {
  const marked = {
    "2023-06-22": { marked: true },
    "2023-06-23": { marked: true },
  };

  const [items, setItems] = useState({});
  const windowWidth = Dimensions.get("window").width * 0.9;
  const agendaHeight = Dimensions.get("window").height * 0.4;

  const minDate = new Date().toISOString().split("T")[0];
  const maxDate = new Date().toISOString().split("T")[0];

  const [myDay, setMyDay] = useState([]);

  const dateFormatter = (inputDay) => {
    const inputDate = inputDay;
    const dateParts = inputDate.split("-");

    const year = parseInt(dateParts[0]);
    const month = parseInt(dateParts[1]) - 1;
    const day = parseInt(dateParts[2]);

    const date = new Date(year, month, day);
    const options = {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedDate = date.toLocaleDateString("en-US", options);
    return formattedDate;
  };

  useEffect(() => {
    console.log(myDay);
  }, [myDay]);
  return (
    <ScrollView>
      <View
        style={{
          flexDirection: "column",
          marginVertical: 24,
          flex: 1,
        }}
      >
        {/* Calendar View */}
        <View style={{ flex: 1 }}>
          <CalendarProvider date={new Date().toISOString().split("T")[0]}>
            <ExpandableCalendar
              onDayPress={(day) => setMyDay(day.dateString)}
              style={{
                borderRadius: 15,
              }}
              theme={{
                calendarBackground: "white",
                textDayFontSize: 12,
                textMonthFontSize: 16,
                textDayHeaderFontSize: 12,
                arrowColor: "red",
                dotColor: "red",
                selectedDotColor: "white",
                selectedDayBackgroundColor: "rgb(255, 124, 97)",
              }}
              markedDates={marked}
              closeOnDayPress={false}
              disableMonthChange={true}
              minDate={"2023-01-01"}
              maxDate={"2024-12-31"}
              monthFormat={"MMM/yyyy"}
              allowShadow={false}
            />
          </CalendarProvider>
          <View
            style={{
              marginHorizontal: 24,
              backgroundColor: textAccent,
              paddingVertical: 4,
              paddingHorizontal: 4,
              borderRadius: 16,
              display: myDay === "2023-06-22" ? "flex" : "none",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text>{dateFormatter(myDay)}</Text>
            </View>
          </View>
        </View>

        {/* Measurement */}
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <View style={{ backgroundColor: "blue" }}>
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
                backgroundColor: "white",
                backgroundGradientFrom: "white",
                backgroundGradientTo: "white",
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
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
