import React from "react";
import { View, Text, Button, Image, StyleSheet } from "react-native";

const ProfileScreen_Setting_User = ({ navigation }) => {
  // console.log(route);
  return (
    <View style={styles.container}>
      <View>
        <Image
          style={styles.headerImage}
          source={require("../../../assets/icon.png")}
        />
        <Image
          style={styles.iconImage}
          source={require("../../../assets/icon.png")}
        />
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

  headerImage: {
    height: 100,
    width: "100%",
  },

  iconImage: {
    height: 70,
    width: 70,
  },
});

export default ProfileScreen_Setting_User;
