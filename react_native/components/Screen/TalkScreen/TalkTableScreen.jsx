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
  TouchableOpacity,
} from "react-native";
import MainScreen from "../MainScreen/MainScreen";
import talkListData from "./TalkList.json";
import hogenListData from "./HogenList.json";
import talkHistoryData from "./TalkHistory.json";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

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
      {/* <View style={styles.talk_history_content}> */}
      <View
        style={
          item.user_id == 12345
            ? styles.talk_history_content_mine
            : styles.talk_history_content_partner
        }
      >
        <Text>Name: {item.name}</Text>
        <Text>UserId: {item.user_id}</Text>
        <Text>icon: {item.icon}</Text>
        <Text>talkContent: {item.talk_content}</Text>
      </View>
      <View style={styles.b_area}>
        <TouchableOpacity
          style={styles.talk_icon1}
          onPress={() => console.log("intonation")}
        >
          <FontAwesome name="comment" size={17} color="#5214BA" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.talk_icon2}
          onPress={() => console.log("音が鳴る2")}
        >
          <Fontisto name="volume-up" size={17} color="#5214BA" />
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.talk_time}>{item.time}</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.talk_history}>
      <ScrollView style={styles.talk_history_area}>{talkHistory}</ScrollView>
      <View style={styles.b_input}>
        <TouchableOpacity
          style={styles.b_camera}
          onPress={() => console.log("カメラを開く")}
        >
          <Fontisto name="camera" size={20} color="#d9d9d9" />
        </TouchableOpacity>
        <TextInput
          style={styles.chat_input}
          placeholder="Message..."
          placeholderTextColor="#d9d9d9"
          onChangeText={(e) => setChat(e)}
        />
        <TouchableOpacity
          style={styles.b_mic}
          onPress={() => console.log("マイクを起動")}
        >
          <Fontisto name="mic" size={20} color="#d9d9d9" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.b_send}
          onPress={() => console.log("送信")}
        >
          <Fontisto name="play" size={10} color="#5214BA" />
        </TouchableOpacity>
      </View>
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

  talk_history_area: {
    height: "90%",
    // borderWidth: 2,
    // borderColor: "pink",
  },

  talk_history: {
    borderTopWidth: 2,
    borderColor: "#5214BA",
    height: "100%",
    // borderWidth: 2,
    // borderColor: "pink",
  },

  talk_history_container: {
    flex: 1,
    display: "flex",
    flexDirection: "row",

    // borderWidth: 1,
    // borderColor: "red",
  },

  talk_history_content_mine: {
    minWidth: "35%",
    maxWidth: "70%",
    marginTop: 10,
    marginLeft: 4,
    padding: 4,
    // marginRight: -32,
    // paddingRight: -10,
    // paddingTop: 12,
    // paddingBottom: 0,
    backgroundColor: "#DFCEFF",
    borderWidth: 0.2,
    borderRadius: 8,
    borderColor: "#DFCEFF",
  },

  talk_history_content_partner: {
    minWidth: "35%",
    maxWidth: "70%",
    marginTop: 10,
    marginLeft: 4,
    padding: 4,
    // marginRight: -32,
    // paddingRight: -10,
    // paddingTop: 12,
    // paddingBottom: 0,
    // backgroundColor: "#DFCEFF",
    backgroundColor: "pink",
    borderWidth: 0.2,
    borderRadius: 8,
    borderColor: "#DFCEFF",
  },

  b_area: {
    flex: 1,
    //表示メッセージ横のボタン2つ用
    backgroundColor: "#DFCEFF",
    flexDirection: "column", //ボタンを縦に配置
    justifyContent: "space-between", //均等に配置
  },

  talk_icon1: {
    position: "relative",
    top: 10,
  },

  talk_icon2: {
    position: "relative",
    bottom: 3,
  },

  talk_time: {
    position: "absolute",
    bottom: 0,
    left: 10,
    fontSize: 12,
    justifyContent: "flex-end",
  },

  // ↓入力欄のデザイン
  chat_input: {
    //backgroundColor: "#ddd",
    color: "#d9d9d9",
    width: "70%",
    borderBottomWidth: 1,
    marginLeft: 10, //右側の間を調整
  },

  b_input: {
    //入力欄
    height: "100%",
    flex: 1,
    backgroundColor: "#5214AB", // ボタンの背景色
    paddingVertical: 5, // 垂直方向の余白
    paddingHorizontal: 10, // 水平方向の余白
    borderRadius: 100, // ボタンの角丸設定
    flexDirection: "row", // 入力欄とアイコンを横に配置
    bottom: 0,
    // marginTop: 50, //上の余白
  },

  b_camera: {
    //カメラボタン
    marginRight: 5, //右側の間を調整
  },

  b_mic: {
    //マイクボタン
    marginLeft: 20, //左側の間を調整
  },

  b_send: {
    //送信ボタン
    marginLeft: 15, //右側の間を調整
    width: 20,
    height: 20,
    backgroundColor: "#d9d9d9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },

  b_area: {
    //表示メッセージ横のボタン2つ用
    flexDirection: "column", //ボタンを縦に配置
    justifyContent: "space-between", //均等に配置
  },
  // ↑トーク履歴表示画面のスタイル終わりじゃぜ
});

export default TalkScreenStack;
