import React from "react";
import { View, Text, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ProfileScreen_Setting = () => {
  // console.log(route);
  const navigation = useNavigation();

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
      <Button
        title="ログアウト"
        onPress={() => navigation.navigate("ProfileStackScreen_Follow")}
      />
    </View>
  );
};

export default ProfileScreen_Setting;
