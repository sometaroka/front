import { useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useState } from "react";
import { View, Text, Button, TextInput, StyleSheet, Pressable } from "react-native";
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
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
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
  
  // アイコン画像を載せる
  return(
    <View style={styles.container}>
      <Pressable 
        style={styles.button_style}
        onPress={handleOnPressLogin}>
          <Text style={styles.button_text}>Login</Text>
      </Pressable>
      <Pressable 
        style={styles.button_style}
        onPress={() => navigation.navigate("Register")}>
        <Text style={styles.button_text}>Sign Up</Text>
      </Pressable>

    </View>
  )

  {/*return (
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
        onPress={() => navigation.navigate("Register")}
      />
    </View>
  );*/}
}

function RegisterScreen() {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressRegister = () => {
    console.log(name + email + password);
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>
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
      <TextInput
        style={styles.text_input}
        placeholder="Re Password"
        secureTextEntry={true}
        onChangeText={(e) => setPassword(e)}
      />
      <Pressable 
        style={styles.button_style1}
        onPress={handleOnPressRegister}>
        <Text style={styles.button_text}>Sign Up</Text>
      </Pressable>
      <Text>Already have an account ? Login</Text>
      <Pressable 
        style={styles.account}
        onPress={handleOnPressRegister}>
        <Text style={styles.button_text1}>Sign Up with Google</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#AD80FF",
  },
  text_input: {
    width: 290,
    height: 40,
    margin: 10,
    paddingLeft: 5,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  button_style: {
    top: 120,
    width: 300,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    marginBottom: 20
  },
  button_style1: {
    top: 10,
    width: 290,
    height: 40,
    backgroundColor: "#39057A",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    borderWidth: 2,
    marginBottom: 20
  },
  account: {
    width: 290,
    height: 40,
    backgroundColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    borderRadius: 5,
  },
  button_text: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white"
  },
  button_text1: {
    fontSize: 18,
    fontWeight: "bold",
    coler: "gray"
  },
  title: {
    fontWeight: "bold",
    fontSize: 40,
    color: "white",
    bottom: 30,
  },
});

export default LoginScreenStack;
