import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { ProfileStackScreen_Setting } from "../../ScreenTransition/ProfileTransition/ProfileStackScreen";
import PostData from "./PostData.json";

const ProfileScreen_MyProfileAndHome = () => {
  const navigation = useNavigation();

  const postData = PostData.map((item) => (
    <View style={styles.postArea2} key={item.name}>
      <Text>Name: {item.name}</Text>
      <Text>User Id: {item.userId}</Text>
      <Text>Icon: {item.icon}</Text>
      <Text>Post: {item.post}</Text>
      <Text>Hougen: {item.hougen}</Text>
      <Text>Good: {item.good}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Image
          style={styles.headerImage}
          source={require("../../../assets/icon.png")}
        />
        <View style={styles.imageNameSettingArea}>
          <Image
            style={styles.iconImage}
            source={require("../../../assets/icon.png")}
          />
          <Text style={styles.userName}>UserName</Text>
          <Button
            style={styles.SettingButton}
            title="設定"
            onPress={() => navigation.navigate("ProfileStackScreen_Setting")}
          />
        </View>

        <Text>紹介文</Text>
        <Button
          title="フォロー"
          onPress={() => navigation.navigate("ProfileStackScreen_Follow")}
        />
        <Button
          title="フォローワー"
          onPress={() => navigation.navigate("ProfileStackScreen_Follower")}
        />
        <Button
          title="お気に入り方言"
          onPress={() =>
            navigation.navigate("ProfileStackScreen_FavoriteDialect")
          }
        />
      </View>
      <ScrollView Style={styles.postArea}>{postData}</ScrollView>
    </View>
  );
};

// スタイル用の関数を定義する．
// 呼び出しは上の通り
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  headerImage: {
    width: "100%",
    height: 70,
  },

  headerArea: {
    borderWidth: 2,
    borderColor: "red",
  },

  postArea2: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: "blue",
  },

  // imageNameSettingAreaのスタイル

  imageNameSettingArea: {
    borderWidth: 2,
    borderColor: "skyblue",
    flexDirection: "row",
    // justifyContent: "center",
    alignItemsItems: "center",
  },

  iconImage: {
    marginRight: "6%",
    height: 60,
    width: 60,
  },

  userName: {
    alignItems: "center",
  },

  settingButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  // imageNameSettingAreaのスタイルここまで
});

export default ProfileScreen_MyProfileAndHome;
