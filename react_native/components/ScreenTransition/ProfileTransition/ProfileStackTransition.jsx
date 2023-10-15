import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen_1 from "../../Screen/ProfileScreen/ProfileScreen_1";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createStackNavigatorでStackオブジェクトを生成．
const Stack = createStackNavigator();

// コンポーネント関数を定義する．
// exportをまとめて書く方法．
export function ProfileStackTransition() {
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
      <Stack.Screen name="ProfileScreen_1" component={ProfileScreen_1} />
      {/* <Stack.Screen name="DemoStackScreen1" component={DemoStackScreen1} />
      <Stack.Screen name="DemoStackScreen2" component={DemoStackScreen2} /> */}
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
    </Stack.Navigator>
  );
}
