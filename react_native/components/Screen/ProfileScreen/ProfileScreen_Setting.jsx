import React from "react";
import { View, Text, Button, Alert, Pressable, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen_Setting = () => {
  // console.log(route);
  const navigation = useNavigation();

  const createTwoButtonAlert = () =>
    Alert.alert("ログアウト", "本当にログアウトをしますか？", [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          console.log("OK Pressed"), navigation.goBack();
          navigation.goBack();
          navigation.goBack();
          // onPress: () => navigation.navigate("LoginScreen"),
        },
      },
    ]);

  return (
    <View style={styles.container}>
      <Pressable
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("ProfileScreen_Setting_User")}>
        <Text style={styles.font}>ユーザー設定</Text>
      </Pressable>
      <Pressable
        style={styles.buttonstyle}
        onPress={() => navigation.navigate("ProfileScreen_Setting_Avatar")}>
        <Text style={styles.font}>アバター編集/ボイス変更</Text>
      </Pressable>
      <Pressable
        style={styles.buttonstyle}
        onPress={createTwoButtonAlert}>
        <Text style={styles.font}>ログアウト</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#5214BA",
  },
  buttonstyle: {
    width: "100%",
    height: 60,
    backgroundColor: "#AD80FFCC",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#E6E7E8",
    marginBottom: 3,
  },
  font: {
    fontSize: 25,
    fontWeight: "bold",
    color: "#E6E7E8",
  }

})

export default ProfileScreen_Setting;
