import { StyleSheet, View, Text, Dimensions } from "react-native";
import { ExpandableCalendar, CalendarProvider } from "react-native-calendars";
import { LineChart } from "react-native-chart-kit";

const ExpandableCalendarScreen = () => {
  const marked = {
    "2023-06-22": { marked: true },
    "2023-06-23": { marked: true },
  };

  const minDate = new Date().toISOString().split("T")[0];
  const maxDate = new Date().toISOString().split("T")[0];

  console.log(minDate);
  console.log(maxDate);

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "white",
        flex: 1,
        paddingTop: 30,
        // paddingHorizontal: 12,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          borderColor: "black",
          borderWidth: 1,
          paddingTop: 15,
        }}
      >
        <Text style={{ fontSize: 24, marginBottom: 15 }}>Your Workouts</Text>
        <CalendarProvider date={new Date().toISOString().split("T")[0]}>
          <ExpandableCalendar
            //   onCalendarToggled={}

            onDayPress={(day) => console.log("onDayPress", day)}
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
            pastScrollRange={2}
            futureScrollRange={2}
          />
        </CalendarProvider>
      </View>
      {/* <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            padding: 12,
            borderColor: "black",
            borderWidth: 1,
          }}
        >
          <LineChart
            data={{
              labels: ["January", "February", "March", "April", "May", "June"],
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
      </View> */}
    </View>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
