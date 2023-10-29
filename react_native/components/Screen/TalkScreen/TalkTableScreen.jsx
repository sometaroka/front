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
import { Fontisto } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';


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

  // チャット画面
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
      <View style={styles.topber}> 
        <TouchableOpacity style={styles.b_hogen} onPress={reverseVisible}>
          <Text style={styles.buttonText}>{hogen}</Text>
        </TouchableOpacity>
        <Button
          title="トーク履歴"
          onPress={() => navigation.navigate("TalkHistory")}
        />
      </View>
      <View style={styles.talk_container}>
        <View style={styles.partner_area}>
          <Text style={styles.area_text}>partner_text_here</Text>
          <View style={styles.b_area}>
            <TouchableOpacity onPress={() => console.log("intonation")}>
              <FontAwesome name="comment" size={20} color="#5214BA" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("音が鳴る")}>
              <Fontisto name="volume-up" size={20} color="#5214BA" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.partner_stage}>
          <Image
            style={styles.avatar_image}
            source={require("../../../assets/icon.png")}
          />
        </View>

        <View style={styles.your_stage}>
          <Image
            style={styles.avatar_image}
            source={require("../../../assets/icon.png")}
          />
        </View>

        <View style={styles.your_area}>
          <Text style={styles.area_text}>your_text_here</Text>
          <View style={styles.b_area}>
            <TouchableOpacity onPress={() => console.log("intonation")}>
              <FontAwesome name="comment" size={20} color="#5214BA" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => console.log("音が鳴る2")}>
              <Fontisto name="volume-up" size={20} color="#5214BA" />
            </TouchableOpacity>
          </View>
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

      <View>
        <View style={styles.b_input}>
          <TouchableOpacity 
            style={styles.b_input_option} 
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
            style={styles.b_input_option} 
            onPress={() => console.log("マイクを起動")}
          >
            <Fontisto name="mic" size={20} color="#d9d9d9" />
          </TouchableOpacity>
        </View>
        <Text>
          {chat}&{hogen}
        </Text>
      </View>
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
    <View key={item.id}>
      <Text>Name: {item.name}</Text>
      <Text>icon: {item.icon}</Text>
      <Text>talkContent: {item.talk_content}</Text>
    </View>
  ));

  return (
    <View>
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
    flexDirection: "column", // 垂直方向に配置
    justifyContent: "space-between", // 上下に均等に配置
    paddingHorizontal: 10, // 左右の余白
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
    backgroundColor: "#DFCEFF",
    padding: 10,
    borderRadius: 10,
    marginRight: 50, //右側の間を調整
    height: 75, //高さを設定
    flexDirection: 'row', // 入力欄とアイコンを横に配置
    justifyContent: 'space-between', //均等に配置
  },
  your_area: {
    backgroundColor: "#DFCEFF",
    padding: 10,
    borderRadius: 10,
    marginLeft: 50, //左側の間を調整
    height: 75, //高さを設定
    flexDirection: 'row', // 入力欄とアイコンを横に配置
    justifyContent: 'space-between', //均等に配置
  },
  avatar_image: {
    width: 100,
    height: 100,
    position: 'absolute', // 画像の位置を絶対位置に設定
    left: 25, // 楕円内での画像の左の位置調整
    bottom: 20, // 楕円内での画像の上の位置調整
  },
  chat_input: {
    //backgroundColor: "#ddd",
    color: "#d9d9d9",
    width: "50%",
    borderBottomWidth: 1,
  },
  // partner_area: { left: 0 },
  // your_area: { alignSelf: "flex-end" },

  topber: { //方言選択ボタン区切ってる線より上
    borderBottomWidth: 1, // ボーダーの太さ（ピクセル単位）
    borderBottomColor: '#5214BA', // ボーダーの色
  },

  b_hogen: { //ボタンの形(方言)
    backgroundColor: '#5214AB', // ボタンの背景色
    paddingVertical: 5, // 垂直方向の余白
    paddingHorizontal: 10, // 水平方向の余白
    borderRadius: 100, // ボタンの角丸設定
    marginLeft: 325, //左の余白
  },
  buttonText: { //ボタンの文字の色
    color: '#d9d9d9', // ボタンのテキストの色
    textAlign: 'right', // 右寄せ
    paddingLeft: 0, // 左側の余白を削除
  },
  b_input: { //ボタンの形（入力欄）
    backgroundColor: '#5214AB', // ボタンの背景色
    paddingVertical: 5, // 垂直方向の余白
    paddingHorizontal: 10, // 水平方向の余白
    borderRadius: 100, // ボタンの角丸設定
    flexDirection: 'row', // 入力欄とアイコンを横に配置
    bottom: 0,
  },
  b_input_option: {
    marginRight: 5, //右側の間を調整
  },

  b_area: { //表示メッセージ横のボタン2つ用
    flexDirection: 'column', //ボタンを縦に配置
    justifyContent: 'space-between', //均等に配置
  },

  area_text: {
    marginTop: 0, //上の余白
    marginBottom: 0, //下の余白
    fontSize: 15, //文字の大きさ
  },

  partner_stage: {
    width: 150,
    height: 50,
    backgroundColor: '#d9d9d9',
    borderRadius: 100,
    overflow: 'visible',
    marginTop: 80,
},

your_stage: {
    width: 150,
    height: 50,
    backgroundColor: '#d9d9d9',
    borderRadius: 100,
    overflow: 'visible',
    marginTop: 80,
    marginLeft: 220,
    marginBottom: 5,
},


});

export default TalkScreenStack;
