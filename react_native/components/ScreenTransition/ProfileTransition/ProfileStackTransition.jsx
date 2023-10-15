import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen_Home from "../../Screen/ProfileScreen/ProfileScreen_Home";
import { ProfileStackScreen_Setting } from "./ProfileStackScreen";
import { ProfileStackScreen_Follow } from "./ProfileStackScreen";
import { ProfileStackScreen_Follower } from "./ProfileStackScreen";
import { ProfileStackScreen_FavoriteDialect } from "./ProfileStackScreen";

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
      <Stack.Screen name="ProfileScreen_Home" component={ProfileScreen_Home} />
      <Stack.Screen
        name="ProfileStackScreen_Setting"
        component={ProfileStackScreen_Setting}
      />
      <Stack.Screen
        name="ProfileStackScreen_Follow"
        component={ProfileStackScreen_Follow}
      />
      <Stack.Screen
        name="ProfileStackScreen_Follower"
        component={ProfileStackScreen_Follower}
      />
      <Stack.Screen
        name="ProfileStackScreen_FavoriteDialect"
        component={ProfileStackScreen_FavoriteDialect}
      />
      {/* <Stack.Screen name="DemoStackScreen1" component={DemoStackScreen1} />
      <Stack.Screen name="DemoStackScreen2" component={DemoStackScreen2} /> */}
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
    </Stack.Navigator>
  );
}
