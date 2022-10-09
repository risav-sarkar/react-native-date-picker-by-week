import { useState } from "react";
import { StyleSheet, View } from "react-native";
import DatePicker from "./datePicker";

export default function App() {
  const [date, setDate] = useState(new Date());
  return (
    <View style={styles.container}>
      <DatePicker
        date={date}
        setDate={setDate}
        backgroundColor1={"red"}
        grey1={"blue"}
        color1={"yellow"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#adadad",
    alignItems: "center",
    justifyContent: "center",
  },
});
