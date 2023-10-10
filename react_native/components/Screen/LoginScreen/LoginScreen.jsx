import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";

function HomeScreen() {
  return;
  // テスト２
}

function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressLogin = () => {
    console.log(email + password);
  };

  return (
    <View>
      <Text>Login</Text>
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
      <Text>
        {email}&{password}
      </Text>
      <Button
        title={"Login"}
        style={styles.button}
        onPress={handleOnPressLogin}
      />
      <Button
        title="新規登録"
        onPress={() => navigation.navigate("RegisterScreen")}
      />
    </View>
  );
}

function RegisterScreen() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressRegister = () => {
    console.log(name + email + password);
  };

  return (
    <View>
      <Text>Register</Text>
      <TextInput
        style={styles.text_input}
        placeholder="Name"
        onChangeText={(e) => setName(e)}
      />
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
      <Text>
        {name}&{email}&{password}
      </Text>
      <Button
        title={"Register"}
        style={styles.button}
        onPress={handleOnPressRegister}
      />
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

export { LoginScreen, RegisterScreen };
