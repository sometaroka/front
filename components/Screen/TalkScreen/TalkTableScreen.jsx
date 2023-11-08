import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState, useEffect } from "react";
// import { AntDesign } from '@expo/vector-icons';//むしめがね用
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
      {/* <Text style={{ color: 'white' }}>Name: {item.name}</Text>
      <Text style={{ color: 'white' }}>Title: {item.title}</Text>
      <Text style={{ color: 'white' }}>Hogen: {item.hogen}</Text>
      <Text style={{ color: 'white' }}>IconSrc: {item.icon}</Text> */} {/*文字を白色に変更*/}
      
      {/* <View style={styles.horizontalLine} />*/} {/*アイテム間の水平線用 */}
    </View>
  ));

  return ( 
    <View style={styles.talk_table_container}>
       {/* <View style={styles.search_area}>
       <View style={styles.text_input_container}>
       <AntDesign name="search1" size={24} color="black" style={styles.search_icon}/> */} {/*新たにスタイルを定義*/}
        <TextInput
          style={styles.text_input}
          placeholder="Search" // プレースホルダーを設定
          // onChangeText={(e) => setSearch(e)} // 検索機能を追加する場合はこの行を有効にする
        />  
        </View>
    //   </View>
    //   <Text>{search}</Text>
    //   <ScrollView>{talkList}</ScrollView>
    //   {/* </View> */}
    // </View> 
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
    // backgroundColor: "#5214BA",
    flex: 1,
    // alignItems: "center",
    justifyContent: "center",
  },
  // talk_container: {
  //   flexDirection: 'row', // テキストと横線を横方向に配置
  //   alignItems: 'center', // 要素を中央に配置

  //   flexDirection: "column", // 横並びに配置
  //   justifyContent: "space-between", // 左右に均等に配置
  //   paddingHorizontal: 16, // 左右の余白
  //   paddingVertical: 20,
  // },
  // horizontalLine: {
  //   flex: 1, // 空間を均等に分配して横線を伸ばす
  //   borderBottomColor: '#e6cde3', // 横線の色を指定
  //   borderBottomWidth: 1, // 横線の太さを指定
  //   marginTop: 5,
  //   padding: 5,
  // },
  text_input: {
    // backgroundColor: "#e6cde3",//変更
    // width: "85%",//変更
    //alignSelf: 'center', // 横方向に中央に配置
    //fontSize: 18, // テキストの大きさを変更
    borderBottomWidth: 1, // 下部にボーダーラインを追加
    //borderColor: 'gray', // ボーダーラインの色を指定
  },
  talk_list: {
    // padding: 10,//スタイル変更
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

  // search_area: {
  //   backgroundColor: "#39057A",
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // }, //虫眼鏡アイコン用

  // text_input_container: {
  //   flexDirection: 'row', // アイコンとテキスト入力を横に配置
  //   alignItems: 'center', // 中央寄せ
  //   backgroundColor: "#e6cde3", // テキストボックスの背景色
  //   width: '85%', // テキストボックスの幅を設定
  //   alignSelf: 'center', // 横方向に中央に配置
  //   fontSize: 18, // テキストの大きさを変更
  //   borderBottomWidth: 1, // 下部にボーダーラインを追加
  //   borderColor: 'gray', // ボーダーラインの色を指定
  //   padding: 5,
  //   marginTop: 15, // search欄の上の空白
  //   marginBottom: 15,
  //   borderRadius: 5, // 角を丸くする
  // } // 色々
  
});

export default TalkScreenStack;
