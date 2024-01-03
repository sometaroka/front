import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { Audio } from "expo-av";
import { styles } from "./TalkTableScreen";

const ChatHistory = ({ item, my_id }) => {
  const [iconName, setIconName] = useState("volume-up");

  const playSound = async () => {
    setIconName("pause");
    // console.log(iconName);

    try {
      const { sound } = await Audio.Sound.createAsync(
        require("../../../assets/voice/HougenVoice1.m4a")
      );

      await sound.playAsync();

      sound.setOnPlaybackStatusUpdate(async (status) => {
        if (status.didJustFinish) {
          await sound.unloadAsync();
          // console.log("再生成功");
          setIconName("volume-up");
        }
      });
    } catch (error) {
      console.error("音声の再生中にエラーが発生しました", error);
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
