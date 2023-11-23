import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
import { AntDesign } from "@expo/vector-icons"; //むしめがね用
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
        //headerShown: false, //ヘッダー隠す
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
      <Text style={{ color: "white" }}>Name: {item.name}</Text>
      <Text style={{ color: "white" }}>Title: {item.title}</Text>
      <Text style={{ color: "white" }}>Hogen: {item.hogen}</Text>
      <Text style={{ color: "white" }}>IconSrc: {item.icon}</Text>
      <View style={styles.horizontalLine} />
    </View>
  ));

  return (
    <View style={styles.talk_table_container}>
      <View style={styles.search_area}>
        <View style={styles.text_input_container}>
          <AntDesign
            name="search1"
            size={24}
            color="black"
            style={styles.search_icon}
          />
          <TextInput
            style={styles.text_input}
            placeholder="Search" // プレースホルダーを設定
            // onChangeText={(e) => setSearch(e)} // 検索機能を追加する場合はこの行を有効にする
          />
        </View>
      </View>
      <Text>{search}</Text>
      <ScrollView>{talkList}</ScrollView>

      {/* Rectangular button with plus icon */}
      <TouchableOpacity
        style={styles.rectangularButton}
        onPress={() => {
          // Handle button press here
          // For example, you can navigate to a different screen
        }}
      >
        <Text style={styles.plusText}>+</Text>
      </TouchableOpacity>
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
        <Button
          title="トーク履歴"
          onPress={() => navigation.navigate("TalkHistory")}
        />
        <TouchableOpacity style={styles.b_hogen} onPress={reverseVisible}>
          <Text style={styles.buttonText}>{hogen}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.talk_container}>
        <View style={styles.partner_area}>
          <View style={styles.t_option}>
            <Text style={styles.area_text}>partner_text_here</Text>
          </View>
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
          <View style={styles.t_option}>
            <Text style={styles.area_text}>your_text_here</Text>
          </View>
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

  const navigation = useNavigation();

  const [chat, setChat] = useState("");

  const [visible, setVisible] = useState(false);
  const reverseVisible = () => {
    setVisible((vis) => !vis);
  };

  const talkHistory = talkHistoryData.map((item) => (
    <View
      style={
        item.user_id == 12345
          ? styles.talk_history_container_mine
          : styles.talk_history_container_partner
      }
      key={item.id}
    >
      {/* <View style={styles.talk_history_content}> */}
      <View style={styles.talk_time_mine_parent}>
        <Text
          style={
            item.user_id == 12345
              ? styles.talk_time_mine
              : styles.talk_time_mine_hidden
          }
        >
          {item.time}
        </Text>
      </View>

      <View
        style={
          item.user_id == 12345
            ? styles.talk_history_content_mine
            : styles.talk_history_content_partner
        }
      >
        <View style={styles.talk_content_text}>
          <Text>Name: {item.name}</Text>
          <Text>UserId: {item.user_id}</Text>
          <Text>icon: {item.icon}</Text>
          <Text>talkContent: {item.talk_content}</Text>
        </View>
        <View style={styles.talk_history_b_area}>
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
      </View>
      <View>
        <Text
          style={
            item.user_id == 12345
              ? styles.talk_time_partner_hidden
              : styles.talk_time_partner
          }
        >
          {item.time}
        </Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.talk_history}>
      <ScrollView style={styles.talk_history_area}>{talkHistory}</ScrollView>
      <View style={styles.talk_history_b_input}>
        <TouchableOpacity
          style={styles.talk_history_b_camera}
          onPress={() => console.log("カメラを開く")}
        >
          <Fontisto name="camera" size={20} color="#d9d9d9" />
        </TouchableOpacity>
        <TextInput
          style={styles.talk_history_chat_input}
          placeholder="Message..."
          placeholderTextColor="#d9d9d9"
          onChangeText={(e) => setChat(e)}
        />
        <TouchableOpacity
          style={styles.talk_history_b_mic}
          onPress={() => console.log("マイクを起動")}
        >
          <Fontisto name="mic" size={20} color="#d9d9d9" />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.talk_history_b_send}
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
    backgroundColor: "#5214BA",
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  talk_container: {
    flexDirection: "row", // テキストと横線を横方向に配置
    alignItems: "center", // 要素を中央に配置

    flexDirection: "column", // 横並びに配置
    justifyContent: "space-between", // 左右に均等に配置
    paddingHorizontal: 16, // 左右の余白
    paddingVertical: 20,
  },
  horizontalLine: {
    flex: 1, // 空間を均等に分配して横線を伸ばす
    borderBottomColor: "#e6cde3", // 横線の色を指定
    borderBottomWidth: 1, // 横線の太さを指定
    marginTop: 5,
    padding: 5,
  },
  text_input: {
    backgroundColor: "#e6cde3", //変更
    width: "85%", //変更
    alignSelf: "center", // 横方向に中央に配置
    fontSize: 18, // テキストの大きさを変更
    borderBottomWidth: 1, // 下部にボーダーラインを追加
    borderColor: "gray", // ボーダーラインの色を指定
  },
  talk_list: {
    padding: 10, //スタイル変更
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

  talk_history_container_mine: {
    flex: 1,
    display: "flex",
    flexDirection: "row",

    marginLeft: "auto",
    alignItems: "flex-end",

    Width: "100%",

    // borderWidth: 2,
    // borderColor: "pink",
  },

  talk_history_container_partner: {
    flex: 1,
    display: "flex",
    flexDirection: "row",

    // borderWidth: 2,
    // borderColor: "pink",
  },

  talk_history_content_mine: {
    minWidth: "1%",
    maxWidth: "70%",

    marginTop: 10,
    marginRight: 4,
    // position: "relative",
    padding: 4,
    marginTop: 10,
    marginRight: 5,
    marginBottom: 0,
    marginLeft: "auto",
    // marginRight: -32,
    // paddingRight: -10,
    // paddingTop: 12,
    // paddingBottom: 0,
    backgroundColor: "#DFCEFF",
    borderWidth: 0.2,
    borderRadius: 8,
    borderColor: "#DFCEFF",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  talk_history_content_partner: {
    minWidth: "1%",
    maxWidth: "70%",
    marginTop: 10,
    marginLeft: 5,
    padding: 4,
    // marginRight: -32,
    // paddingRight: -10,
    // paddingTop: 12,
    // paddingBottom: 0,
    backgroundColor: "#DFCEFF",
    borderWidth: 0.2,
    borderRadius: 8,
    borderColor: "#DFCEFF",

    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },

  talk_content_text: {
    // width: "88%",
    maxWidth: "90%",
    minWidth: "10%",

    // marginRight: 5,

    // borderWidth: 2,
    // borderColor: "pink",
  },

  talk_icon1: {
    position: "relative",
    top: 3,
  },

  talk_icon2: {
    position: "relative",
    bottom: 3,
  },

  talk_time_partner: {
    position: "absolute",
    bottom: 0,
    left: 5,
    fontSize: 12,
    justifyContent: "flex-end",
  },

  talk_time_partner_hidden: {
    display: "none",
  },

  talk_time_mine_parent: {},

  talk_time_mine: {
    fontSize: 12,
    marginRight: 5,
  },

  // ↓入力欄のデザイン

  talk_history_chat_input: {
    //backgroundColor: "#ddd",
    color: "#d9d9d9",
    width: "70%",
    borderBottomWidth: 1,
    marginLeft: 10, //右側の間を調整
  },

  //↓Talk（チャット画面）のスタイル
  topber: {
    //方言選択ボタン区切ってる線より上
    borderBottomWidth: 1, // ボーダーの太さ（ピクセル単位）
    borderBottomColor: "#5214BA", // ボーダーの色
    flexDirection: "row", // 入力欄とアイコンを横に配置
    justifyContent: "space-between", // 上下に均等に配置
  },

  b_hogen: {
    //方言選択ボタンの形
    backgroundColor: "#5214AB", // ボタンの背景色
    paddingVertical: 5, // 垂直方向の余白
    paddingHorizontal: 10, // 水平方向の余白
    borderRadius: 100, // ボタンの角丸設定
    marginLeft: 220, //左の余白
    height: 25,
    marginTop: 5,
  },

  buttonText: {
    //方言選択ボタンの文字の色
    color: "#d9d9d9", // ボタンのテキストの色
    textAlign: "right", // 右寄せ
    paddingLeft: 0, // 左側の余白を削除
  },

  talk_container: {
    //チャット画面の大枠
    flexDirection: "column", // 垂直方向に配置
    justifyContent: "space-between", // 上下に均等に配置
    paddingHorizontal: 10, // 左右の余白
    paddingVertical: 20,
  },

  partner_area: {
    //相手側のメッセージ表示
    backgroundColor: "#DFCEFF",
    padding: 10,
    borderRadius: 10,
    marginRight: 50, //右側の間を調整
    height: 75, //高さを設定
    flexDirection: "row", // 入力欄とアイコンを横に配置
    justifyContent: "space-between", //均等に配置
  },

  t_option: {
    //テキストの改行のためのオプション
    flex: 1,
  },

  area_text: {
    //メッセージのテキスト表示
    marginTop: 0, //上の余白
    marginBottom: 0, //下の余白
    fontSize: 15, //文字の大きさ
  },

  b_area: {
    //表示メッセージ横のボタン2つ用
    flexDirection: "column", //ボタンを縦に配置
    justifyContent: "space-between", //均等に配置
  },

  partner_stage: {
    //相手側のアバター用のステージ（足下の楕円）
    width: 150,
    height: 50,
    backgroundColor: "#d9d9d9",
    borderRadius: 100,
    overflow: "visible", //写真がはみ出ても表示されるようにする
    marginTop: 80,
  },

  avatar_image: {
    //アバター用のスタイル
    width: 100,
    height: 100,
    position: "absolute", // 画像の位置を絶対位置に設定
    left: 25, // 楕円内での画像の左の位置調整
    bottom: 20, // 楕円内での画像の上の位置調整
  },

  your_stage: {
    //こちら側のアバター用のステージ（足下の楕円）
    width: 150,
    height: 50,
    backgroundColor: "#d9d9d9",
    borderRadius: 100,
    overflow: "visible", //写真がはみ出ても表示されるようにする
    marginTop: 80,
    marginLeft: 220,
    marginBottom: 5,
  },

  your_area: {
    //こちら側のメッセージ表示
    backgroundColor: "#DFCEFF",
    padding: 10,
    borderRadius: 10,
    marginLeft: 50, //左側の間を調整
    height: 75, //高さを設定
    flexDirection: "row", // 入力欄とアイコンを横に配置
    justifyContent: "space-between", //均等に配置
  },

  b_input: {
    //入力フォームの枠
    backgroundColor: "#5214AB", // フォームの背景色
    paddingVertical: 5, // 垂直方向の余白
    paddingHorizontal: 10, // 水平方向の余白
    borderRadius: 100, // フォームの角丸設定
    flexDirection: "row", // 入力欄とアイコンを横に配置
    bottom: 0,
    marginTop: 50, //上の余白
    justifyContent: "center",
    alignItems: "center",
  },

  b_camera: {
    //カメラボタン
    marginRight: 5, //右側の間を調整
  },

  chat_input: {
    //入力フォームのテキスト入力部分
    //backgroundColor: "#ddd",
    color: "#d9d9d9",
    width: "70%",
    borderBottomWidth: 1,
    marginLeft: 10, //右側の間を調整
  },

  talk_history_b_input: {
    //入力欄
    height: "100%",
    flex: 1,
    backgroundColor: "#5214AB", // ボタンの背景色
    paddingVertical: 5, // 垂直方向の余白
    paddingHorizontal: 10, // 水平方向の余白
    borderRadius: 100, // ボタンの角丸設定
    flexDirection: "row", // 入力欄とアイコンを横に配置
    bottom: 0,
    alignItems: "center",
    // marginTop: 50, //上の余白
    justifyContent: "center",
    // gap: 10,
  },

  talk_history_b_camera: {
    //カメラボタン
    marginRight: 5, //右側の間を調整
  },

  talk_history_b_mic: {
    //マイクボタン
    marginLeft: 20, //左側の間を調整
  },

  talk_history_b_send: {
    //送信ボタン
    marginLeft: 15, //右側の間を調整
    width: 20,
    height: 20,
    backgroundColor: "#d9d9d9",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
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

  talk_history_b_area: {
    //表示メッセージ横のボタン2つ用
    // backgroundColor: "#DFCEFF",
    flexDirection: "column", //ボタンを縦に配置
    justifyContent: "space-between", //均等に配置
    display: "flex",
    flexDirection: "column",

    marginLeft: 5,

    // borderWidth: 2,
    // borderColor: "pink",
  },
  // ↑トーク履歴表示画面のスタイル終わりじゃぜ

  //TalkTable↓
  talk_time_mine_hidden: {
    display: "none",
  },
  search_area: {
    backgroundColor: "#39057A",
    alignItems: "center",
    justifyContent: "center",
  }, //虫眼鏡アイコン用

  text_input_container: {
    flexDirection: "row", // アイコンとテキスト入力を横に配置
    alignItems: "center", // 中央寄せ
    backgroundColor: "#e6cde3", // テキストボックスの背景色
    width: "85%", // テキストボックスの幅を設定
    alignSelf: "center", // 横方向に中央に配置
    fontSize: 18, // テキストの大きさを変更
    borderBottomWidth: 1, // 下部にボーダーラインを追加
    borderColor: "gray", // ボーダーラインの色を指定
    padding: 5,
    marginTop: 15, // search欄の上の空白
    marginBottom: 15,
    borderRadius: 5, // 角を丸くする
  }, // 検索欄

  horizontalLine: {
    // Add your horizontal line styles here
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    marginVertical: 5,
  },
  
  rectangularButton: {
    position: 'absolute',
    bottom: 20, // 必要に応じて下部の距離を調整してください
    right: 20, // 必要に応じて右側の距離を調整してください
    backgroundColor: '#5214BA', // 背景色を変更
    borderRadius: 50, // ボタンの半径を指定して円形にする
    width: 50, // ボタンの幅を指定
    height: 50, // ボタンの高さを指定
    borderWidth: 3, // 枠線の太さ
    borderColor: 'white', // 枠線の色
    alignItems: 'center',
    justifyContent: 'center',
  },

  plusText: {
    fontSize: 40, // フォントサイズを指定
    fontWeight: 'bold', // フォントを太くする
    color: 'white', // フォントの色を指定
    textAlign: 'center', // テキストを中央に配置
    lineHeight: 43, // ラインの高さをボタンの高さに合わせる
  },

});

export default TalkScreenStack;
