import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FollowData from "./FollowData.json";

const ProfileScreen_Follower = () => {
  // console.log(route);

  const navigation = useNavigation();

  const AAA = () => {
    navigation.navigate("ProfileScreen_OtherProfile");
  };

  const followData = FollowData.map((item) => (
    <View style={styles.followArea} key={item.name}>
      <TouchableOpacity onPress={AAA}>
        <Text>Name: {item.name}</Text>
      </TouchableOpacity>
      <Text>Self Introduce: {item.selfIntroduce}</Text>
      <Text>User Id: {item.userId}</Text>
      <Text>Icon: {item.icon}</Text>
    </View>
  ));

  return (
    <View style={styles.container}>
      <View>
        <Text>フォロー</Text>
      </View>
      <ScrollView>{followData}</ScrollView>
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

  followArea: {
    marginTop: 8,
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default ProfileScreen_Follower;
