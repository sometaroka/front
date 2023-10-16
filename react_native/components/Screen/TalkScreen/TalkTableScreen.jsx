import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import MainScreen from "../MainScreen/MainScreen";
import talkListData from "./TalkList.json";

const Stack = createStackNavigator();

function TalkScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerShown: false, //ヘッダー隠す
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
    >
      <Stack.Screen name="Login" component={ChatScreen} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} /> */}
    </Stack.Navigator>
  );
}

function ChatScreen() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");

  const handleOnPressLogin = () => {
    console.log(search);
  };

  const talkList = talkListData.map((item) => (
    <View
      key={item.name}
      style={styles.talk_list}
      onTouchEnd={() => console.log("test")}
    >
      <Text>Name: {item.name}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Hogen: {item.hogen}</Text>
      <Text>IconSrc: {item.icon}</Text>
    </View>
  ));

  return (
    <View>
      <TextInput
        style={styles.text_input}
        placeholder="search"
        onPress={(e) => setSearch(e)}
      />
      {talkList}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_input: {
    backgroundColor: "#ddd",
    width: "50%",
    borderBottomWidth: 1,
  },
  talk_list: {
    backgroundColor: "#e6cde3",
    borderBottomWidth: "1px",
    marginBottom: "3%",
  },
});

export default TalkScreenStack;
