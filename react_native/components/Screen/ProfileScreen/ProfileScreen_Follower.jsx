import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
} from "react-native";
import FollowerData from "./FollowerData.json";

const ProfileScreen_Follower = ({ navigation }) => {
  // console.log(route);

  const followerData = FollowerData.map((item) => (
    <View style={styles.followerArea} key={item.name}>
      <Text>Name: {item.name}</Text>
      <Text>Self Introduce: {item.selfIntroduce}</Text>
      <Text>User Id: {item.userId}</Text>
      <Text>Icon: {item.icon}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View>
        <Text>フォロワー</Text>
      </View>
      <ScrollView>{followerData}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  icon: {
    height: 70,
    width: 70,
  },

  userInfomationArea: {
    borderColor: "red",
    borderWidth: 2,
  },

  followerArea: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default ProfileScreen_Follower;
