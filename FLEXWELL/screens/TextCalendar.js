import React, { useRef } from "react";
import { StyleSheet } from "react-native";
import { ExpandableCalendar, CalendarProvider } from "react-native-calendars";

const ExpandableCalendarScreen = () => {
  const marked = useRef({});
  const theme = useRef({
    backgroundColor: "#ffffff",
    calendarBackground: "#ffffff",
    textSectionTitleColor: "#b6c1cd",
    selectedDayBackgroundColor: "#00adf5",
    selectedDayTextColor: "#ffffff",
    todayTextColor: "#00adf5",
    dayTextColor: "#2d4150",
    textDisabledColor: "#d9e1e8",
    dotColor: "#00adf5",
    selectedDotColor: "#ffffff",
    arrowColor: "#00adf5",
    disabledArrowColor: "#d9e1e8",
    monthTextColor: "#00adf5",
    indicatorColor: "#00adf5",
    textDayFontFamily: "monospace",
    textMonthFontFamily: "monospace",
    textDayHeaderFontFamily: "monospace",
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
  });
  const todayBtnTheme = useRef({
    todayButtonTextColor: "",
  });

  return (
    <CalendarProvider showTodayButton theme={todayBtnTheme.current}>
      <ExpandableCalendar
        theme={theme.current}
        firstDay={1}
        markedDates={marked.current}
      />
    </CalendarProvider>
  );
};

export default ExpandableCalendarScreen;

const styles = StyleSheet.create({
  calendar: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
