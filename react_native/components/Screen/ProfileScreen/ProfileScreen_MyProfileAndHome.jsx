import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
  Pressable,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
// import { ProfileStackScreen_Setting } from "../../ScreenTransition/ProfileTransition/ProfileStackScreen";
import PostData from "./PostData.json";

const ProfileScreen_MyProfileAndHome = () => {
  const navigation = useNavigation();

  const postData = PostData.map((item) => (
    <View style={styles.postArea2} key={item.name}>
      <Image
        style={styles.otherIcon}
        source={require("../../../assets/icon.png")}
        />
      <View style={styles.container}>
        <View style={styles.container3}>
      <Text style={styles.otherName}>{item.name}</Text>
      <Text style={styles.otherId}>@{item.userId}</Text>
      </View>
      <Text style={styles.otherPost}>{item.post}</Text>
      <View style={styles.container3}>
      <Text style={styles.otherDailect}>方言: {item.hougen}</Text>
      <Text style={styles.otherDailect}>Good: {item.good}</Text>
      </View>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Image
          style={styles.headerImage}
          source={require("../../../assets/icon.png")}
        />
        <View style={styles.container3}>
          <Image
            style={styles.iconImage}
            source={require("../../../assets/icon.png")}
          />
          <View style={styles.container2}>
            <Pressable
              style={styles.edit}
               onPress={() => navigation.navigate("ProfileStackScreen_Follower")}>
                <Text style={styles.follow}>Followers</Text>
            </Pressable>
        <Pressable
          style={styles.edit}
          onPress={() => navigation.navigate("ProfileStackScreen_Follow")}>
          <Text style={styles.follow}>Following</Text>
          </Pressable>
          <Pressable
          style={styles.edit}
          onPress={() => navigation.navigate("ProfileStackScreen_Setting")}>
          <Text style={styles.edit_font}>Edit Profile</Text>
          </Pressable>
          <Pressable
          style={styles.edit}
          onPress={() => navigation.navigate("ProfileStackScreen_FavoriteDialect")}>
          <Text style={styles.edit_font}>Fav Dailect</Text>
          </Pressable>
        </View>
        </View>
        <Text style={styles.userName}>UserName</Text>
        <Text style={styles.introduce}>About you</Text>
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
    backgroundColor: "#5214BA",
    // alignItems: "center",
    // justifyContent: "center",
  },
  container2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },


  headerImage: {
    width: "100%",
    height: 90,
  },

  headerArea: {
    borderWidth: 1,
    borderColor: "#AD80FFCC",
  },

  postArea2: {
    marginTop: 8,
    borderWidth: 1,
    borderColor: "#AD80FFCC",
    flexDirection: "row"
  },

  // imageNameSettingAreaのスタイル

  container3: {
    flexDirection: "row",
    alignItemsItems: "center",
  },

  iconImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },

  userName: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 45,
    margin: 15,
    color: "#E6E7E8",
  },
  introduce: {
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 35,
    margin: 15,
    color: "#E6E7E8",
  },
  settingButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  follow: {
    color: "white",
  },
  edit_font: {
    color: "white",
  },
  edit: {
    width: 120,
    height: 25,
    top: 15,
    backgroundColor: "#AD80FFCC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    marginBottom: 10,
  },

  otherIcon: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
  otherName: {
    margin: 5,
    fontSize: 18,
    fontWeight: "bold",
    color: "#E6E7E8",
  },
  otherId: {
    marginTop: 7,
    color: "#C0C0C0"
  },
  otherPost: {
    margin: 5,
    color: "#E6E7E8",
  },
  otherDailect: {
    marginLeft: 5,
    color: "#E6E7E8",
  }
  // imageNameSettingAreaのスタイルここまで
});

export default ProfileScreen_MyProfileAndHome;
