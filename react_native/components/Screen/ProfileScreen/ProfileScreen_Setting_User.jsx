import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
} from "react-native";
import UserData from "./UserData.json";

const ProfileScreen_Setting_User = ({ navigation }) => {
  const [inputValue_1, setInputValue_1] = useState(UserData[0].name);
  const [inputValue_2, setInputValue_2] = useState(UserData[0].introduce);
  const [inputValue_3, setInputValue_3] = useState(UserData[0].eMail);
  const [inputValue_4, setInputValue_4] = useState(UserData[0].currentAddress);
  const [inputValue_5, setInputValue_5] = useState(UserData[0].password);
  const [inputValue_6, setInputValue_6] = useState(UserData[0].favoriteHougen);

  const handleSubmit = () => {
    const formData = {
      name: inputValue_1,
      introduce: inputValue_2,
      eMail: inputValue_3,
      currentAddress: inputValue_4,
      password: inputValue_5,
      favoriteHougen: inputValue_6,
    };

    console.log("送信された値:", formData);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <Image
          style={styles.headerImage}
          source={require("../../../assets/icon.png")}
        />
        <Image
          style={styles.iconImage}
          source={require("../../../assets/icon.png")}
        />
        <Text>名前変更</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputValue_1}
          onChangeText={(text) => setInputValue_1(text)}
        />
        <Text>自己紹介文</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputValue_2}
          onChangeText={(text) => setInputValue_2(text)}
        />
        <Text>メールアドレス</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputValue_3}
          onChangeText={(text) => setInputValue_3(text)}
        />
        <Text>居住地</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputValue_4}
          onChangeText={(text) => setInputValue_4(text)}
        />
        <Text>パスワード</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputValue_5}
          onChangeText={(text) => setInputValue_5(text)}
        />
        <Text>お気に入り方言</Text>
        <TextInput
          style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
          value={inputValue_6}
          onChangeText={(text) => setInputValue_6(text)}
        />
        <Button title="変更" onPress={handleSubmit} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
