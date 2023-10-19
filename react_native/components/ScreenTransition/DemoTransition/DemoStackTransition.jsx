import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DemoScreen1 from "../../Screen/DemoScreen/DemoScreen1";
import { DemoStackScreen1, DemoStackScreen2, DemoStackScreen3 } from "./DemoStackScreen";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createStackNavigatorでStackオブジェクトを生成．
const Stack = createStackNavigator();

// コンポーネント関数を定義する．
// exportをまとめて書く方法．
export function DemoStackTransition() {
  return (
    // 画面の定義はStack.Screenコンポーネントで行い，Stack.Navigatorで囲む．
    // Stack.Navigatorにオプションをつけると色とか諸々いじれる．
    // 詳細なオプションは調べるなりしてね．
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerShown: false,
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
      headerMode="float"
      initialRouteName="Home"
    >
      <Stack.Screen name="DemoScreen1" component={DemoScreen1} />
      <Stack.Screen name="DemoStackScreen1" component={DemoStackScreen1} />
      <Stack.Screen name="DemoStackScreen2" component={DemoStackScreen2} />
      <Stack.Screen name="DemoStackScreen3" component={DemoStackScreen3} />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
    </Stack.Navigator>
  );
}
