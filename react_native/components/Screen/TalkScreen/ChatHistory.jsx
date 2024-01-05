import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { styles } from "./TalkTableScreen";

const ChatHistory = ({ item, my_id }) => {
  const [iconName, setIconName] = useState("volume-up");
  const [voiceNum, setVoiceNum] = useState(1);

  const playSound = async () => {
    setIconName("pause");
    try {
      let soundObject;
      // 各ファイルに対して個別のrequireを使用
      switch (voiceNum) {
        case 1:
          soundObject = require("../../../assets/voice/HougenVoice1.m4a");
          break;
        case 2:
          soundObject = require("../../../assets/voice/HougenVoice2.m4a");
          break;
        // 以降、HougenVoice3.m4aからHougenVoice10.m4aまで同様に追加
        default:
          soundObject = require("../../../assets/voice/HougenVoice1.m4a");
      }

      const { sound } = await Audio.Sound.createAsync(soundObject);
      await sound.playAsync();

      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.didJustFinish) {
          await sound.unloadAsync();
          setIconName("volume-up");
          setVoiceNum((prevVoiceNum) => (prevVoiceNum % 2) + 1);
        }
      });
    } catch (error) {
      console.error(
        "音声ファイルの読み込みに失敗しました。エラー内容: ",
        error
      );
    }
  };

  useEffect(() => {
    console.log(iconName);
    // getTestData();
  }, [iconName]);

  return (
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
          {item.massege_date.substring(11, 16)}
          {/* {item.massege_date} */}
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
          <Text>翻訳後 {item.intnation}</Text>
          <Text>翻訳前: {item.message_data}</Text>

          {/* <Text>トークルームID: {item.message_id}</Text> */}
          {/* <Text>トーク日時:{item.massege_date}</Text>
                <Text>ユーザーID: {item.user}</Text> */}
        </View>
        <View style={styles.talk_history_b_area}>
          <TouchableOpacity
            style={styles.talk_icon1}
            onPress={() => console.log("ああ")}
          >
            <FontAwesome name="comment" size={17} color="#5214BA" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.talk_icon2}>
            <Fontisto
              name={iconName}
              size={17}
              color="#5214BA"
              onPress={() => playSound()}
            />
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
          {item.massege_date.substring(11, 16)}
          {/* {item.massege_date} */}
        </Text>
      </View>
    </View>
  );
};

export default ChatHistory;
