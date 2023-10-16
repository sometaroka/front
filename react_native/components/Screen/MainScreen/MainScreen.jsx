import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import DemoScreen3 from "../DemoScreen/DemoScreen3";
import { DemoStackTransition } from "../../ScreenTransition/DemoTransition/DemoStackTransition";
import TalkScreenStack from "../TalkScreen/TalkTableScreen";

// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createBottomTabNavigatorでTabオブジェクトを生成．
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

//ログイン状態
// let isLogin = false;

// コンポーネント関数を定義する．
// exportをまとめて書く方法．
export default function HomeScreen() {
  return (
    // 画面の定義はTab.Screenコンポーネントで行い，Tab.Navigatorで囲む．
    // Tab.Navigatorにオプションをつけると色とか諸々いじれる．
    // 詳細なオプションは調べるなりしてね．

    //ログイン後の画面
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: "#333399",
        activeBackgroundColor: "#333399",
        inactiveBackgroundColor: "#9999dd",
      }}
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#aa4c8f",
        },
      }}
    >
      <Tab.Screen name="画面１" component={DemoStackTransition} />
      <Tab.Screen name="画面２" component={DemoScreen3} />
      <Tab.Screen name="トーク一覧" component={TalkScreenStack} />
    </Tab.Navigator>
  );
}
