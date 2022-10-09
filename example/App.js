import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DatePicker from "react-native-date-picker-by-week";

export default function App() {
  const [date, setDate] = useState(new Date());

  return (
    <View style={styles.container}>
      <DatePicker
        date={date}
        setDate={setDate}
        currDateDay={"#000000"}
        currDayDate={"#000000"}
        remainingDays={"#adadad"}
        remainingDates={"#a8a8a8"}
        selectedDateBackground={"#400D51"}
        selectedDay={"#400D51"}
        selectedDate={"#FFE9A0"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
