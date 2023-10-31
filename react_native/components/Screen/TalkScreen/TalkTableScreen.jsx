import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  Button,
  Image,
  TextInput,
  StyleSheet,
  Modal,
  ScrollView,
} from "react-native";
import MainScreen from "../MainScreen/MainScreen";
import talkListData from "./TalkList.json";
import hogenListData from "./HogenList.json";
import talkHistoryData from "./TalkHistory.json";

const Stack = createStackNavigator();

const user_table = { id: 1, name: "testUser", icon: "icon.png" };

function TalkScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#5214BA",
        // headerShown: false, //ヘッダー隠す
        headerStyle: {
          backgroundColor: "#FFFFFF",
        },
      }}
    >
      <Stack.Screen name="TalkTable" component={TalkTable} />
      <Stack.Screen name="Talk" component={Talk} />
      <Stack.Screen name="TalkHistory" component={TalkHistory} />
      {/* <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} /> */}
    </Stack.Navigator>
  );
}

// ↓↓適宜コメント文に切り替えたりして

// ガチ本番用(Django起動しないと使えない)
// function TalkTable() {
//   const navigation = useNavigation();

//   const [search, setSearch] = useState("");
//   const [data, setData] = useState("");

//   useEffect(() => {
//     const getMyData = async () => {
//       await fetch("http://localhost:8000/tests/", {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((res) => {
//           if (res.ok) {
//             return res.json();
//           }
//           throw new Error("Some Error");
//         })
//         .then((data) => {
//           // setData(data);
//           const talkList = data.map((item) => (
//             <View
//               style={styles.talk_list}
//               key={item.message_id}
//               onTouchEnd={() => navigation.navigate("Talk")}
//             >
//               <Text>{item.message_id}</Text>
//               <Text>{item.message_data}</Text>
//               <Text>{item.massege_date}</Text>
//             </View>
//           ));
//           setData(talkList);
//         })
//         .catch((error) => {
//           console.log(error);
//         });
//     };

//     getMyData();
//   }, []);

//   const talkList = talkListData.map((item) => (
//     <View
//       key={item.name}
//       style={styles.talk_list}
//       onTouchEnd={() => navigation.navigate("Talk")}
//     >
//       <Text>Name: {item.name}</Text>
//       <Text>Title: {item.title}</Text>
//       <Text>Hogen: {item.hogen}</Text>
//       <Text>IconSrc: {item.icon}</Text>
//     </View>
//   ));

//   return (
//     <View style={styles.talk_table_container}>
//       <TextInput
//         style={styles.text_input}
//         placeholder="search"
//         onChangeText={(e) => setSearch(e)}
//       />
//       <Text>{search}</Text>
//       {/* {talkList} */}
//       {data}
//     </View>
//   );
// }

// スタイル用(テストデータ)
function TalkTable() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

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
      <ScrollView>{talkList}</ScrollView>
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
        <Button
          title="トーク履歴"
          onPress={() => navigation.navigate("TalkHistory")}
        />
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

function TalkHistory() {
  const [inputValue, setInputValue] = useState(""); // ステート変数の名前を修正

  const handleSubmit = () => {
    console.log("送信された値:", inputValue); // 正しいステート変数を使用するように修正
    setInputValue(""); // 送信後に入力をクリアする
  };

  const talkHistory = talkHistoryData.map((item) => (
    <View style={styles.talk_history_container} key={item.id}>
      <View style={styles.talk_history_content}>
        <Text>Name: {item.name}</Text>
        <Text>icon: {item.icon}</Text>
        <Text>talkContent: {item.talk_content}</Text>
      </View>
      <View>
        <Text style={styles.talk_time}>{item.time}</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.talk_history}>
      <ScrollView>{talkHistory}</ScrollView>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <Button title="送信" onPress={handleSubmit} />
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

  // ↓トーク履歴表示画面のスタイルじゃぜ

  talk_history: {
    borderTopWidth: 2,
    borderColor: "#5214BA",
  },

  talk_history_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
  },

  talk_history_content: {
    minWidth: "35%",
    maxWidth: "75%",
    marginTop: 10,
    marginLeft: 4,
    padding: 4,
    // paddingTop: 12,
    // paddingBottom: 0,
    backgroundColor: "#DFCEFF",
    borderWidth: 0.2,
    borderRadius: 8,
  },

  talk_time: {
    position: "absolute",
    bottom: 0,
    left: 5,
    fontSize: 12,
    justifyContent: "flex-end",
  },
  // ↑トーク履歴表示画面のスタイル終わりじゃぜ
});

export default TalkScreenStack;
