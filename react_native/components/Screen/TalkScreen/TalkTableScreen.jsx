import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  Modal,
} from "react-native";
import MainScreen from "../MainScreen/MainScreen";
import talkListData from "./TalkList.json";
import hogenListData from "./HogenList.json";

const Stack = createStackNavigator();

const user_table = { id: 1, name: "testUser", icon: "icon.png" };

function TalkScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        // headerShown: false, //ヘッダー隠す
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
    >
      <Stack.Screen name="TalkTable" component={TalkTable} />
      <Stack.Screen name="Talk" component={Talk} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} /> */}
    </Stack.Navigator>
  );
}

function TalkTable() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");

  const talkList = talkListData.map((item) => (
    <View
      key={item.name}
      style={styles.talk_list}
      onTouchEnd={() => navigation.navigate("Talk")}
    >
      <Text>Name: {item.name}</Text>
      <Text>Title: {item.title}</Text>
      <Text>Hogen: {item.hogen}</Text>
      <Text>IconSrc: {item.icon}</Text>
    </View>
  ));

  return (
    <View style={styles.talk_table_container}>
      <TextInput
        style={styles.text_input}
        placeholder="search"
        onChangeText={(e) => setSearch(e)}
      />
      <Text>{search}</Text>
      {talkList}
    </View>
  );
}

function Talk() {
  const navigation = useNavigation();

  const [chat, setChat] = useState("");
  const [hogen, setHogen] = useState("京都弁");

  const [visible, setVisible] = useState(false);
  const reverseVisible = () => {
    setVisible((vis) => !vis);
  };

  const hogenList = hogenListData.map((item) => (
    <View key={item.id}>
      <Button
        title={item.name}
        onPress={() => {
          setHogen(item.name), reverseVisible();
        }}
      />
    </View>
  ));

  const handleOnPress = () => {
    // console.log(chat);
  };

  return (
    <View>
      <View>
        <Button title={hogen} onPress={reverseVisible} />
      </View>
      <View style={styles.talk_container}>
        <View style={styles.partner_area}>
          <Text>partner_text_here</Text>
          <Text>intonation</Text>
          <Image
            style={styles.avatar_image}
            source={require("../../../assets/icon.png")}
          />
          <Button
            title={"voice"}
            style={styles.button}
            onPress={() => console.log("音が鳴る")}
          />
        </View>
        <View style={styles.your_area}>
          <Text>your_text_here</Text>
          <Text>intonation</Text>
          <Image
            style={styles.avatar_image}
            source={require("../../../assets/icon.png")}
          />
          <Button
            title={"voice"}
            style={styles.button}
            onPress={() => console.log("音が鳴る2")}
          />
        </View>

        <Modal
          animationType="slide"
          presentationStyle="pageSheet"
          visible={visible}
        >
          <View style={styles.modalView}>
            <Button title="閉じる" onPress={reverseVisible} />
            {hogenList}
          </View>
        </Modal>
      </View>

      <TextInput
        style={styles.chat_input}
        placeholder="inputText"
        onChangeText={(e) => setChat(e)}
      />
      <Text>
        {chat}&{hogen}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  talk_table_container: {
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  talk_container: {
    flexDirection: "column", // 横並びに配置
    justifyContent: "space-between", // 左右に均等に配置
    paddingHorizontal: 16, // 左右の余白
    paddingVertical: 20,
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
  partner_area: {
    backgroundColor: "lightgray",
    padding: 30,
    borderRadius: 10,
  },
  your_area: {
    backgroundColor: "lightblue",
    padding: 30,
    borderRadius: 10,
  },
  avatar_image: {
    width: 100,
    height: 100,
  },
  chat_input: {
    backgroundColor: "#ddd",
    width: "50%",
    borderBottomWidth: 1,
  },
  // partner_area: { left: 0 },
  // your_area: { alignSelf: "flex-end" },
});

export default TalkScreenStack;
