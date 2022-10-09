import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React from "react";

import { format, startOfWeek, subDays, addDays } from "date-fns";
import { useState } from "react";

const DatePicker = ({
  date,
  setDate,
  currDateDay,
  currDayDate,
  selectedDateBackground,
  selectedDay,
  selectedDate,
  remainingDays,
  remainingDates,
}) => {
  const currDate = new Date();

  const [weekStart, setWeekStart] = useState(
    startOfWeek(currDate, { weekStartsOn: 0 })
  );

  const data = ["S", "M", "T", "W", "T", "F", "S"];

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      alignItems: "center",
    },

    menu: {
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "100%",
    },

    btn: {
      padding: 6,
      borderRadius: 50,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },

    btnImage: {
      height: 20,
      width: 20,
    },

    dateContainer: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
    dateComp: {
      alignItems: "center",
      width: 38,
    },
    dateBtn: {
      borderRadius: 50,
      height: 35,
      width: 35,
      alignItems: "center",
      justifyContent: "center",
    },
    dateBtnSelected: {
      borderRadius: 50,
      backgroundColor: selectedDateBackground,
      height: 35,
      width: 35,
      alignItems: "center",
      justifyContent: "center",
    },
    shadow: {
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.btn, styles.shadow]}
          onPress={() => {
            setWeekStart(subDays(weekStart, 7));
          }}
        >
          <Image
            style={styles.btnImage}
            source={require("./assets/leftIcon.png")}
          />
        </TouchableOpacity>

        <View style={styles.dateContainer}>
          {data.map((e, index) => {
            return (
              <View style={styles.dateComp}>
                <Text
                  style={{
                    fontSize: 16,
                    marginBottom: 8,
                    color:
                      format(addDays(weekStart, index), "Do") ===
                      format(date, "Do")
                        ? selectedDay
                        : format(addDays(weekStart, index), "Do") ===
                          format(currDate, "Do")
                        ? currDateDay
                        : remainingDays,
                    fontWeight:
                      format(addDays(weekStart, index), "Do") ===
                      format(currDate, "Do")
                        ? "bold"
                        : "normal",
                  }}
                >
                  {e}
                </Text>

                <TouchableOpacity
                  style={
                    format(addDays(weekStart, index), "Do") ===
                    format(date, "Do")
                      ? styles.dateBtnSelected
                      : styles.dateBtn
                  }
                  onPress={() => {
                    setDate(addDays(weekStart, index));
                  }}
                >
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: "bold",
                      color:
                        format(addDays(weekStart, index), "Do") ===
                        format(date, "Do")
                          ? selectedDate
                          : format(addDays(weekStart, index), "Do") ===
                            format(currDate, "Do")
                          ? currDayDate
                          : remainingDates,
                    }}
                  >
                    {format(addDays(weekStart, index), "d")}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.btn, styles.shadow]}
          onPress={() => {
            setWeekStart(addDays(weekStart, 7));
          }}
        >
          <Image
            style={styles.btnImage}
            source={require("./assets/rightIcon.png")}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;
