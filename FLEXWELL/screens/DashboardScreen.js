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
import { SelectList } from "react-native-dropdown-select-list";
import { LineChart } from "react-native-chart-kit";
import {
  textAccent,
  textAccentSecondary,
  textPrimary,
  textSecondary,
} from "../color-and-size.config";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchActivities,
  fetchDetailActivityMiddleware,
} from "../action/fetchActivitiesCreator";

const DashboardScreen = ({ route, navigation }) => {
  const dispatch = useDispatch();

  const { isLoading, activities, errorMsg } = useSelector(
    (state) => state.activitiesReducer
  );

  const { activity } = useSelector((state) => state.detailActivityReducer);

  // const mapped = activity?.exercises?.map((e) => e);

  console.log(activity, "ini Activity Detail");
  // console.log("ini activity detail yang baru", mapped);

  const [marked, setMarked] = useState({});

  console.log(activities, "ini activities");

  useEffect(() => {
    dispatch(fetchActivities());
  }, []);

  const date = new Date().toISOString().split("T")[0];
  const markedDateArray = Object.keys(marked);

  console.log(markedDateArray);
  console.log(
    markedDateArray.findIndex((arrayDate) => arrayDate === "2023-06-22"),
    "findIndex"
  );

  useEffect(() => {
    if (activities?.length) {
      const currMarked = {};
      activities.forEach((val) => {
        if (val?.date) {
          currMarked[val.date] = { marked: true };
        }
      });
      setMarked(currMarked);
    }
  }, [activities]);

  console.log(marked, "xxxxxxxxxxxxx");

  const [category, setCategory] = useState("");

  const [myDay, setMyDay] = useState(new Date().toISOString().split("T")[0]);

  const dataMuscle = [
    { key: 1, value: "UpperArm" },
    { key: 2, value: "Waist" },
    { key: 3, value: "Calf" },
    { key: 4, value: "Thigh" },
    { key: 5, value: "Chest" },
    { key: 6, value: "Shoulder" },
  ];

  const plaseFormat = (myDate) => {
    const inputDate = myDate;
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

  const [exercise, setExercise] = useState({});

  useEffect(() => {
    if (activity) {
      const choosenActivity = activity.find(
        (e) => e?.activity?.date.split("T")[0] === myDay
      );
      setExercise(choosenActivity);
    }
  }, [myDay]);

  console.log(exercise, "Ttttttttttttttttttttt");

  useEffect(() => {
    console.log(myDay, "tes");
  }, [myDay]);

  useEffect(() => {
    console.log(category, "tes");
  }, [category]);
  return (
    // <View
    //   style={{
    //     alignItems: "center",
    //     alignItems: "center",
    //     flex: 1,
    //   }}
    // >
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
              paddingVertical: 8,
              borderRadius: 8,
              overflow: "hidden",
              gap: 2,
              display:
                markedDateArray.findIndex(
                  (arrayDate) => arrayDate === myDay
                ) !== -1
                  ? "flex"
                  : "none",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                paddingBottom: 4,
              }}
            >
              <Text
                style={{
                  color: "textAccentSecondary",
                  fontSize: 12,
                  fontWeight: "400",
                }}
              >
                {plaseFormat(myDay)}
              </Text>
            </View>
            <View
              style={{
                backgroundColor: textPrimary,
                width: "100%",
                height: 3,
              }}
            />
            <View
              style={{
                marginHorizontal: 16,
                paddingVertical: 16,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "flex-end",
                  gap: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 24,
                  }}
                >
                  {exercise?.activity?.duration}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                  }}
                >
                  min
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "column",
                  marginTop: 4,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  EXERCISE
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                  }}
                >
                  {exercise?.name}
                </Text>
              </View>

              <View
                style={{
                  width: "100%",
                  height: 2,
                  backgroundColor: textPrimary,
                  borderRadius: 8,
                  marginTop: 8,
                }}
              />
              <View style={{ marginTop: 12, width: "100%" }}>
                {exercise?.exercises?.map((e, i) => {
                  return (
                    <View key={i} style={{ marginTop: 12 }}>
                      <Text
                        style={{
                          fontSize: 14,
                          fontWeight: "bold",
                        }}
                      >
                        {e.name}
                      </Text>
                      <Text
                        style={{
                          fontSize: 12,
                        }}
                      >
                        {e.repetition} Reps | {e.totalSet} Sets
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>

        {/* Measurement */}

        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 24,
          }}
        >
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                }}
              >
                Measurements
              </Text>
              <SelectList
                setSelected={(val) => setCategory(val)}
                data={dataMuscle}
                save="value"
                search={false}
                boxStyles={{
                  borderRadius: 16,
                  borderColor: textSecondary,
                  borderWidth: 0.8,
                }}
                defaultOption={{
                  key: "1",
                  value: "UpperArm",
                  disabled: false,
                }}
                dropdownStyles={{
                  marginBottom: 0,
                }}
                inputStyles={{
                  width: 120,
                }}
                maxHeight={dataMuscle.length * 40}
              />
            </View>
            <View style={{ backgroundColor: "blue", marginLeft: -20 }}>
              <LineChart
                data={{
                  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  datasets: [
                    {
                      data: [60, 55, 54, 55, 56, 55, 56],
                    },
                  ],
                }}
                bezier
                width={Dimensions.get("window").width * 1.1} // from react-native
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
          <View
            style={{
              flexDirection: "column",
              alignItems: "center",
              marginTop: 24,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: "Poppins",
                  fontSize: 16,
                }}
              >
                Body Weight
              </Text>
            </View>
            <View style={{ backgroundColor: "blue", marginLeft: -20 }}>
              <LineChart
                data={{
                  labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                  datasets: [
                    {
                      data: [60, 55, 54, 55, 56, 55, 56],
                    },
                  ],
                }}
                bezier
                width={Dimensions.get("window").width * 1.1} // from react-native
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
      </View>
    </ScrollView>
    // </View>
  );
};

export default DashboardScreen;
