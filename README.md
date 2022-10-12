# react-native-date-picker-by-week

The date picker by week component for react-native.

![weekView](assets/demo.gif)

## Table of Contents

- [Installation](#installation)
- [Basic usage](#basic-usage)
- [Props](#props)
- [Contributors](#contributors)

## Installation

The component required date-fns library

> `npm install --save date-fns`

> `npm install --save react-native-date-picker-by-week`

## Basic usage

```js
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
```

## Props

| Prop Name              | Type   | Default  | Description                        |     |
| ---------------------- | ------ | -------- | ---------------------------------- | --- |
| date                   | String | Required | State variable for date            |     |
| setDate                | String | Required | UseState for the the date variable |     |
| currDateDay            | String | Required | Color for Current Day Text         |     |
| currDayDate            | String | Required | Color for Current Date Text        |     |
| remainingDays          | String | Required | Color for Remaining Days Text      |     |
| remainingDates         | String | Required | Color for Remaining Dates Text     |     |
| selectedDateBackground | String | Required | Background color for Selected Day  |     |
| selectedDay            | String | Required | Color for Selected Day Text        |     |
| selectedDate           | String | Required | Color for Selected Date Text       |     |

## Contributors

<a href="https://github.com/risav-sarkar/react-native-date-picker-by-week/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=risav-sarkar/react-native-date-picker-by-week" />
</a>

Made with [contrib.rocks](https://contrib.rocks).
