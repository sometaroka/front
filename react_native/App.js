import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "./components/Screen/LoginScreen/LoginScreen";
import { createStackNavigator } from "@react-navigation/stack";

// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createStackNavigatorでStackオブジェクトを生成．
const Stack = createStackNavigator();

// コンポーネント関数を定義する．
// exportをまとめて書く方法．
export default function App() {
  //ログイン前の画面
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
