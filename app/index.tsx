import { buttons } from "@/constants/Buttons";
import React, { useCallback } from "react";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from "react-native";

const App: React.FC = () => {
  const [lastValue, setLastValue] = React.useState<string>("");
  const [currentValue, setCurrentValue] = React.useState<string>("");

  const handlePress = useCallback(
    (buttonValue: string) => {
      const handlers: { [key: string]: () => void } = {
        "delete-all": () => setCurrentValue(""),
        add: () => {},
        invert: () => {},
        percent: () => {},
        divide: () => {},
        multiply: () => {},
        subtract: () => {},
        equals: () => {},
        default: () => setCurrentValue(currentValue + buttonValue),
      };

      handlers[buttonValue] ? handlers[buttonValue]() : handlers.default();
    },
    [currentValue, lastValue]
  );

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#000000",
      }}
    >
      <TextInput
        style={{
          flex: 1.3 / 3,
          fontSize: 52,
          paddingHorizontal: 30,
          paddingBottom: 40,
          color: "#ffffff",
          fontFamily: "Inter_400Regular",
        }}
        value={currentValue}
        textAlign="right"
        textAlignVertical="bottom"
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          padding: 10,
          flexWrap: "wrap",
          flex: 2 / 3,
        }}
      >
        <FlatList
          data={buttons}
          numColumns={4}
          renderItem={({ item }) => (
            <View
              style={{
                width: item.value === "0" ? "50%" : "25%",
                justifyContent: "center",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <TouchableOpacity
                style={{
                  width: "90%",
                  height: 80,
                  backgroundColor: item.backgroundColor,

                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
                onPress={() => handlePress(item.value)}
              >
                <Text
                  style={{
                    fontSize: 32,
                    color: item.color,
                    fontFamily: "Inter_400Regular",
                  }}
                >
                  {item.title}
                </Text>
              </TouchableOpacity>
            </View>
          )}
          keyExtractor={(item) => item.value}
        />
      </View>
    </View>
  );
};

export default App;
