import React, { useState } from "react";
import {
  View,
  Text,
  Button,
  Image,
  StyleSheet,
  TextInput,
  ScrollView,
  Pressable
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
        <View style={styles.area}>
          <Text style={styles.title_name}>User Name：</Text>
          <TextInput
            style={styles.text_input}
            value={inputValue_1}
            onChangeText={(text) => setInputValue_1(text)}
          />
        </View>
        <View style={styles.area}>
          <Text style={styles.title_introduce}>About you：</Text>
          <TextInput
            style={styles.text_input}
            value={inputValue_2}
            onChangeText={(text) => setInputValue_2(text)}
          />
        </View>
        <View style={styles.area}>
          <Text style={styles.title_email}>Email：</Text>
          <TextInput
            style={styles.text_input}
            value={inputValue_3}
            onChangeText={(text) => setInputValue_3(text)}
          />
        </View>
        <View style={styles.area}>
          <Text style={styles.title_current}>居住地：</Text>
          <TextInput
            style={styles.text_input}
            value={inputValue_4}
            onChangeText={(text) => setInputValue_4(text)}
          />
        </View>
        <View style={styles.area}>
          <Text style={styles.title_pass}>パスワード：</Text>
          <TextInput
            style={styles.text_input}
            value={inputValue_5}
            onChangeText={(text) => setInputValue_5(text)}
          />
        </View>
        <View style={styles.area}>
          <Text style={styles.title_fav}>お気に入り方言：</Text>
          <TextInput
            style={styles.text_input}
            value={inputValue_6}
            onChangeText={(text) => setInputValue_6(text)}
          />
        </View>
        <Pressable
          style={styles.button_style}
          onPress={handleSubmit}>
          <Text style={styles.button_text}>保存</Text>
        </Pressable>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#5214BA",
  },
  area: {
    margin: 7,
    width: 365,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "blue",
    flexDirection: "row",
    borderRadius: 5,
    backgroundColor: "#b0c4de",
  },
  headerImage: {
    height: 80,
    width: "100%",
  },

  iconImage: {
    bottom: 20,
    left: 145,
    height: 90,
    width: 90,
    borderRadius: 50,
  },
  title_name: {
    marginLeft: 35,
    fontWeight: "bold",
    fontSize: 20,
  },
  title_introduce: {
    marginLeft: 30,
    fontWeight: "bold",
    fontSize: 20,
  },
  title_email: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title_current: {
    fontWeight: "bold",
    fontSize: 20,
  },
  title_pass: {
    marginLeft: 25,
    fontWeight: "bold",
    fontSize: 20,
  },
  title_fav: {
    marginLeft: 55,
    fontWeight: "bold",
    fontSize: 20,
  },

  text_input: {
    width: "80%",
  },
  button_style: {
    marginTop: 10,
    left: 145,
    width: 100,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "blue",
    backgroundColor: "#b0c4de",
  },
  button_text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default ProfileScreen_Setting_User;
