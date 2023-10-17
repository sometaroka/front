import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  LoginScreen,
  RegisterScreen,
} from "../../Screen/LoginScreen/LoginScreen";

const Stack = createStackNavigator();

function LoginStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
    >
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
    </Stack.Navigator>
  );
}

export default LoginStack;
