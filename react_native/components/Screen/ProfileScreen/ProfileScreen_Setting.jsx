import React from "react";
import { View, Text, Button, Alert } from "react-native";
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
    <View>
      <Text>設定画面</Text>
      <Button
        title="ユーザー設定"
        onPress={() => navigation.navigate("ProfileScreen_Setting_User")}
      />
      <Button
        title="アバター編集/ボイス変更"
        onPress={() => navigation.navigate("ProfileScreen_Setting_Avatar")}
      />
      <Button title={"ログアウト"} onPress={createTwoButtonAlert} />
    </View>
  );
};

export default ProfileScreen_Setting;
