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
  KeyboardAvoidingView,
} from "react-native";
// import MainScreen from "../MainScreen/MainScreen";
import talkListData from "./TalkList.json";
import hogenListData from "./HogenList.json";
import talkHistoryData from "./TalkHistory.json";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createStackNavigator();

const user_table1 = { id: 1, name: "testUser", icon: "icon.png" };
const user_table2 = { id: 2, name: "testUser2", icon: "icon.png" };

const my_id = user_table1.id;
// const my_id = user_table2.id;

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

// ガチ本番用(Django起動しないと使えない);
export function TalkTable() {
  const navigation = useNavigation();

  const [search, setSearch] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const getMyData = async () => {
      await fetch("http://192.168.3.4:8000/tests/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          throw new Error("Some Error");
        })
        .then((data) => {
          // setData(data);
          const talkList = data.map((item) => (
            <View
              style={styles.talk_list}
              key={item.talk_id}
              onTouchEnd={() =>
                navigation.navigate("Talk", { talk_id: item.talk_id })
              }
            >
              <Text>{item.talk_id}</Text>

              {/* <Talk talk_id={item.talk_id} />
              <TalkHistory talk_id={item.talk_id} /> */}
            </View>
          ));
          setData(talkList);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getMyData();
  }, []);

  // const talkList = talkListData.map((item) => (
  //   <View
  //     key={item.name}
  //     style={styles.talk_list}
  //     onTouchEnd={() => navigation.navigate("Talk")}
  //   >
  //     <Text>Name: {item.name}</Text>
  //     <Text>Title: {item.title}</Text>
  //     <Text>Hogen: {item.hogen}</Text>
  //     <Text>IconSrc: {item.icon}</Text>
  //   </View>
  // ));

  return (
    <View style={styles.talk_table_container}>
      <TextInput
        style={styles.text_input}
        placeholder="search"
        onChangeText={(e) => setSearch(e)}
      />
      <Text>{search}</Text>
      {/* {talkList} */}
      {data}
    </View>
  );
}

// スタイル用(テストデータ)
// function TalkTable() {
//   const navigation = useNavigation();

//   const [search, setSearch] = useState("");
//   const [data, setData] = useState("");

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
//       <ScrollView>{talkList}</ScrollView>
//     </View>
//   );
// }

export function Talk(props) {
  const { talk_id } = props.route.params;

  const navigation = useNavigation();

  const [chat, setChat] = useState("");
  const [hogen, setHogen] = useState("京都弁");

  const [visible, setVisible] = useState(false);
  const reverseVisible = () => {
    setVisible((vis) => !vis);
  };

  //選択した方言名をバックに送る処理
  const handleSubmit_hougen = (hougen_name) => {
    fetch("http://192.168.3.4:8000/tests/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        hugen_name: hougen_name,
      }),
    })
      .then(() => {
        console.log(hougen_name);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //↓talk_idに対応するトーク内容を取得　テンプレートリテラル使って
  //↓自分のトーク内容取得
  const [myTalkContent, setMyTalkContent] = useState("");

  const getMyTalkContent = async () => {
    await fetch(`http://192.168.3.4:8000/tests?${talk_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Some Error");
      })
      .then((data) => {
        let myTalkContent = null; //メッセージテーブルを最後から順に参照していって、user=1(※user:自分は1,相手は2(それ以外)とする)となる最初の要素のmessageを取得
        for (let i = data.length - 1; i >= 0; i--) {
          if (data[i].user === 1) {
            myTalkContent = data[i].message_data;
            break;
          }
        }
        setMyTalkContent(myTalkContent);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getMyTalkContent();
  }, []);

  //相手のトーク内容取得
  const [yourTalkContent, setyourTalkContent] = useState("");

  const getyourTalkContent = async () => {
    await fetch(`http://192.168.3.4:8000/tests?${talk_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Some Error");
      })
      .then((data) => {
        let yourTalkContent = null; //メッセージテーブルを最後から順に参照していって、user=1(※user:自分は1,相手は2(それ以外)とする)となる最初の要素のmessageを取得
        for (let i = data.length - 1; i >= 0; i--) {
          if (data[i].user === 1) {
            myTalkContent = data[i].message_data;
            break;
          }
        }

        setyourTalkContent(yourTalkContent);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getyourTalkContent();
  }, []);

  // チャット画面
  const hogenList = hogenListData.map((item) => (
    <View key={item.id}>
      <Button
        title={item.name}
        onPress={() => {
          setHogen(item.name), reverseVisible();
          handleSubmit_hougen(item.name);
        }}
      />
    </View>
  ));

  return (
    <View style={styles.chat}>
      <View style={styles.topber}>
        <Button
          title="トーク履歴"
          onPress={() =>
            navigation.navigate("TalkHistory", { talk_id: talk_id })
          }
        />
        <TouchableOpacity style={styles.b_hogen} onPress={reverseVisible}>
          <Text style={styles.buttonText}>{hogen}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.talk_container}>
        <View style={styles.partner_area}>
          <View style={styles.t_option}>
            <Text style={styles.area_text}>
              {talk_id}
              {yourTalkContent}
            </Text>
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
            <Text style={styles.area_text}>{myTalkContent}</Text>
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

// 下の通信機能を取り入れてください．
export function TalkHistory(props) {
  const { talk_id } = props.route.params;

  const [inputValue, setInputValue] = useState(""); // ステート変数の名前を修正

  //下から持ってきた1
  const [talkHistory, setHistory] = useState("");
  const [message, setMessage] = useState("");

  //下から持ってきた2
  const getTestData = async () => {
    await fetch(`http://192.168.3.4:8000/tests?${talk_id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error("Some Error");
      })
      .then((data) => {
        // setData(data);
        const talkHistory = data.map((item) => (
          <View
            style={
              item.user == my_id
                ? styles.talk_history_container_mine
                : styles.talk_history_container_partner
            }
            key={item.message_id}
          >
            {/* <View style={styles.talk_history_content}> */}
            <View style={styles.talk_time_mine_parent}>
              <Text
                style={
                  item.user == my_id
                    ? styles.talk_time_mine
                    : styles.talk_time_mine_hidden
                }
              >
                {item.message_date}
              </Text>
            </View>

            <View
              style={
                item.user == my_id
                  ? styles.talk_history_content_mine
                  : styles.talk_history_content_partner
              }
            >
              <View style={styles.talk_content_text}>
                <Text>トークルームID: {item.message_id}</Text>
                <Text>トーク内容: {item.message_data}</Text>
                <Text>翻訳後内容: {item.intnation}</Text>
                <Text>トーク日時:{item.message_date}</Text>
                <Text>ユーザーID: {item.user}</Text>
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
                  item.user == my_id
                    ? styles.talk_time_partner_hidden
                    : styles.talk_time_partner
                }
              >
                {item.message_date}
              </Text>
            </View>
          </View>
        ));
        setHistory(talkHistory);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //下から持ってきた3
  useEffect(() => {
    getTestData();
  }, []);

  //ログに入力したデータを表示
  const handleSubmit2 = () => {
    console.log("送信された値:", inputValue); // 正しいステート変数を使用するように修正
    setInputValue(""); // 送信後に入力をクリアする
  };

  //下から持ってきた4
  const handleSubmit = () => {
    fetch("http://192.168.3.4:8000/tests/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        message_data: message,
        intnation: "translate",
        user: my_id,
        talk_id: "78f121f4-7514-4aa5-84a2-a915c5727846",
      }),
    })
      // アバターが出てくる画面のチャットで使う．
      // 送ったデータが表示される．
      //  .then((response) => {
      //   if (!response.ok) {
      //     throw new Error("Network response was not ok");
      //   }
      //   return response.json();
      // })
      // .then((responseJson) => {
      //   const talkHistory = responseJson.map((item) => (
      //     <View
      //       style={styles.talk_list}
      //       key={item.message_id}
      //       onTouchEnd={() => navigation.navigate("Talk")}
      //     >
      //        <Text>{item.message_id}</Text>
      // <Text>{item.message_data}</Text>
      // <Text>{item.massege_date}</Text>
      // <Text>{item.intnation}</Text>
      // <Text>{item.user}</Text>
      //     </View>
      //   ));
      //   setHistory(talkHistory);
      // })
      // .catch((error) => {
      //   console.log(error);
      // });
      .then(() => {
        getTestData();
        console.log(message);
        setMessage("");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const navigation = useNavigation();

  // const [chat, setChat] = useState("");

  const [visible, setVisible] = useState(false);

  // const reverseVisible = () => {
  //   setVisible((vis) => !vis);
  // };

  return (
    <KeyboardAvoidingView
      behavior={Platform.select({
        ios: "position",
        android: undefined,
      })}
      keyboardVerticalOffset={Platform.select({
        ios: 136, // iOS
        android: -100, // android
      })}
    >
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
            value={message}
            onChangeText={(e) => setMessage(e)}
            // onChangeText={(e) => setChat(e)}
          />
          <TouchableOpacity
            style={styles.talk_history_b_mic}
            onPress={() => console.log("マイクを起動")}
          >
            <Fontisto name="mic" size={20} color="#d9d9d9" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.talk_history_b_send}
            onPress={() => {
              // handleSubmit2();
              handleSubmit();
            }}
          >
            <Fontisto name="play" size={10} color="#5214BA" />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

// // 通信機能
// function TalkHistory() {
//   // const [inputValue, setInputValue] = useState(""); // ステート変数の名前を修正

//   // const handleSubmit = () => {
//   //   console.log("送信された値:", inputValue); // 正しいステート変数を使用するように修正
//   //   setInputValue(""); // 送信後に入力をクリアする
//   // };

//   // const talkHistory = talkHistoryData.map((item) => (
//   //   <View key={item.id}>
//   //     <Text>Name: {item.name}</Text>
//   //     <Text>icon: {item.icon}</Text>
//   //     <Text>talkContent: {item.talk_content}</Text>
//   //   </View>
//   // ));

//   //上に持って行った1
//   const [talkHistory, setHistory] = useState("");
//   const [message, setMessage] = useState("");

//   //上に持って行った2
//   const getTestData = async () => {
//     await fetch("http://localhost:8000/tests/", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         }
//         throw new Error("Some Error");
//       })
//       .then((data) => {
//         // setData(data);
//         const talkHistory = data.map((item) => (
//           <View style={styles.talk_list} key={item.message_id}>
//             <Text>{item.message_id}</Text>
//             <Text>{item.message_data}</Text>
//             <Text>{item.massege_date}</Text>
//             <Text>{item.intnation}</Text>
//             <Text>{item.user}</Text>
//           </View>
//         ));
//         setHistory(talkHistory);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   //上に持って行った3
//   useEffect(() => {
//     getTestData();
//   }, []);

//   //上に持って行った4
//   const handleSubmit = () => {
//     fetch("http://localhost:8000/tests/", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         message_data: message,
//         intnation: "intonation~~~~!!!!!",
//         user: 1,
//         talk_id: "a29ac742-0796-4f36-b9bf-fd7b537b491d",
//       }),
//     })
//       // アバターが出てくる画面のチャットで使う．
//       // 送ったデータが表示される．
//       //  .then((response) => {
//       //   if (!response.ok) {
//       //     throw new Error("Network response was not ok");
//       //   }
//       //   return response.json();
//       // })
//       // .then((responseJson) => {
//       //   const talkHistory = responseJson.map((item) => (
//       //     <View
//       //       style={styles.talk_list}
//       //       key={item.message_id}
//       //       onTouchEnd={() => navigation.navigate("Talk")}
//       //     >
//       //        <Text>{item.message_id}</Text>
//       // <Text>{item.message_data}</Text>
//       // <Text>{item.massege_date}</Text>
//       // <Text>{item.intnation}</Text>
//       // <Text>{item.user}</Text>
//       //     </View>
//       //   ));
//       //   setHistory(talkHistory);
//       // })
//       // .catch((error) => {
//       //   console.log(error);
//       // });
//       .then(() => {
//         getTestData();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   return (
//     <View>
//       <ScrollView>
//         {talkHistory}
//         <TextInput
//           style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
//           value={message}
//           onChangeText={(e) => setMessage(e)}
//         />
//         <Button title="送信" onPress={handleSubmit} />
//       </ScrollView>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  talk_table_container: {
    flex: 1,
    // alignItems: "center",
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

  // partner_area: { left: 0 },
  // your_area: { alignSelf: "flex-end" },

  //↓Talk（チャット画面）のスタイル

  chat: {
    //画面全体のスタイル
    height: "100%",
  },

  topber: {
    //方言選択ボタン区切ってる線より上
    borderBottomWidth: 1, // ボーダーの太さ（ピクセル単位）
    borderBottomColor: "#5214BA", // ボーダーの色
    flexDirection: "row", // 入力欄とアイコンを横に配置
    justifyContent: "space-between", // 上下に均等に配置
    height: "7%",
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
    height: "86%",
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

  // チャット画面ここまで

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

  talk_time_mine_hidden: {
    display: "none",
  },

  // ↓入力欄のデザイン
  talk_history_chat_input: {
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
});

export default TalkScreenStack;
