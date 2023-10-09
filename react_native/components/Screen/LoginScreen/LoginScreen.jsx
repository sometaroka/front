import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPress = () => {
    console.log(email + password);
  };

  return (
    <View>
      <Text>
        {email}&{password}
      </Text>
      <TextInput
        style={styles.text_input}
        placeholder="Email"
        onChangeText={(e) => setEmail(e)}
      />
      <TextInput
        style={styles.text_input}
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />
      <Button title={"Login"} style={styles.button} onPress={handleOnPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_input: {
    backgroundColor: "#ddd",
    width: "50%",
    borderBottomWidth: 1,
  },
  button: {
    backgroundColor: "#ccc",
  },
});

export default LoginScreen;
