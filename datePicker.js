import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';

import {format, startOfWeek, subDays, addDays} from 'date-fns';
import {useState} from 'react';

const DatePicker = ({date, setDate, backgroundColor1, grey1, color1}) => {
  const currDate = new Date();
  const [weekStart, setWeekStart] = useState(
    startOfWeek(currDate, {weekStartsOn: 0}),
  );

  const data = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      alignItems: 'center',
    },

    menu: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },

    btn: {
      padding: 10,
      borderRadius: 50,
      backgroundColor: '#fff',
    },

    dateContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateComp: {
      alignItems: 'center',
      width: 38,
    },
    dateBtn: {
      borderRadius: 50,
      height: 35,
      width: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dateBtnSelected: {
      borderRadius: 50,
      backgroundColor: backgroundColor1,
      height: 35,
      width: 35,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => {
            setWeekStart(subDays(weekStart, 7));
          }}>
          {/* <FontAwesomeIcon size={16} icon={faCaretLeft} /> */}
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
                      format(addDays(weekStart, index), 'Do') ===
                      format(currDate, 'Do')
                        ? '#fff'
                        : grey1,
                    fontWeight:
                      format(addDays(weekStart, index), 'Do') ===
                      format(currDate, 'Do')
                        ? 'bold'
                        : 'normal',
                  }}>
                  {e}
                </Text>

                <TouchableOpacity
                  style={
                    format(addDays(weekStart, index), 'Do') ===
                    format(date, 'Do')
                      ? styles.dateBtnSelected
                      : styles.dateBtn
                  }
                  onPress={() => {
                    setDate(addDays(weekStart, index));
                  }}>
                  <Text
                    style={{
                      fontSize: 18,
                      fontWeight: 'bold',
                      color:
                        format(addDays(weekStart, index), 'Do') ===
                        format(date, 'Do')
                          ? color1
                          : format(addDays(weekStart, index), 'Do') ===
                            format(currDate, 'Do')
                          ? '#fff'
                          : grey1,
                    }}>
                    {format(addDays(weekStart, index), 'd')}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>

        <TouchableOpacity
          style={[styles.btn]}
          onPress={() => {
            setWeekStart(addDays(weekStart, 7));
          }}>
          {/* <FontAwesomeIcon size={16} icon={faCaretRight} /> */}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default DatePicker;