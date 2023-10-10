import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet } from "react-native";
import MainScreen from "../MainScreen/MainScreen";

const Stack = createStackNavigator();

function LoginScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        // headerShown: false, //ヘッダー隠す
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="MainScreen" component={MainScreen} />
    </Stack.Navigator>
  );
}

function LoginScreen() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressLogin = () => {
    console.log(email + password);
    navigation.navigate("MainScreen");
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
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressRegister = () => {
    console.log(name + email + password);
    navigation.navigate("LoginScreen");
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

export default LoginScreenStack;
