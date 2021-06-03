import React from "react";
import { View, Text, Dimensions } from "react-native";
import { AppFonts } from "../../Theme/AppFonts";
const width = Dimensions.get("window").width;
const WEEK_en = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
export default ({ isChinese, weekStartsOn }) => {
  const week_localized = WEEK_en;
  const weekStartsOnMinnor = weekStartsOn % 7;
  const weekTranformed = [
    ...week_localized.slice(weekStartsOnMinnor),
    ...week_localized.slice(0, weekStartsOnMinnor),
  ];
  return (
    <View
      style={{
        width,
        height: 30,
        flexDirection: "row",
      }}
    >
      {weekTranformed.map((day) => (
        <View
          style={{
            flex: 1,
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
          key={day}
        >
          <Text
            style={{
              color: "rgba(63, 63, 63, 0.2)",
              fontSize: 12,
              fontWeight: "600",
              fontFamily: AppFonts.regular,
            }}
          >
            {day}
          </Text>
        </View>
      ))}
    </View>
  );
};
