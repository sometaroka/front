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
      <Image
        style={styles.otherIcon}
        source={require("../../../assets/icon.png")}
        />
      <View style={styles.container}>
        <View style={styles.container3}>
      <Text style={styles.otherName}>{item.name}</Text>
      <Text style={styles.otherId}>@{item.userId}</Text>
      </View>
        <Text style={styles.selfIntroduce}>{item.selfIntroduce}</Text>
      </View>
    </View>
  ));

  return (
    <View style={styles.container}>
      <ScrollView>{followerData}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "#5214BA",
    backgroundColor: "#5214BA",
  },
  container3: {
    flexDirection: "row",
    alignItemsItems: "center",
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
    flexDirection: "row",
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
  selfIntroduce: {
    margin: 5,
    color: "#E6E7E8",
  },

});

export default ProfileScreen_Follower;
