import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import axios from "axios";

const App = () => {
  const [text, setText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  const handleTranslate = () => {
    axios
      .post("http://10.0.2.2:8000/translate/", { text: text })
      .then((response) => {
        setTranslatedText(response.data.translated_text);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="標準語を大阪弁に変換しよう！"
        multiline={true}
        onChangeText={(text) => setText(text)}
        value={text}
      />
      <Button title="変換" onPress={handleTranslate} />
      <Text h4>{translatedText}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  input: {
    width: "100%",
    height: 200,
    borderWidth: 1,
    padding: 10,
    marginTop: 10,
    textAlignVertical: "top",
  },
});

export default App;
