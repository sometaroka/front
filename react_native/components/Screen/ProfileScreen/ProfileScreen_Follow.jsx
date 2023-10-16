import React from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";

const ProfileScreen_Follow = ({ navigation }) => {
  // console.log(route);
  return (
    <View style={styles.container}>
      <View>
        <Text>フォロー</Text>
      </View>
      <View style={styles.userInfomationArea}>
        <Image
          style={styles.icon}
          source={require("../../../assets/icon.png")}
        />
        <Text>UserName</Text>
        <Text>紹介文</Text>
      </View>
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
});

export default ProfileScreen_Follow;
