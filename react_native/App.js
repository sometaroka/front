import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DemoStackTransition } from "./components/ScreenTransition/DemoTransition/DemoStackTransition";
import DemoScreen3 from "./components/Screen/DemoScreen/DemoScreen3";
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
      <Stack.Navigator
        screenOptions={{
          headerTintColor: "#ffffff",
          headerShown: false, //ヘッダー隠す
          headerStyle: {
            backgroundColor: "#333399",
          },
        }}
      >
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
