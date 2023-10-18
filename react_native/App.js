import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DemoStackTransition } from "./components/ScreenTransition/DemoTransition/DemoStackTransition";
import DemoScreen3 from "./components/Screen/DemoScreen/DemoScreen3";
import Timeline_home from "./components/Timeline/Timeline_home";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createBottomTabNavigatorでTabオブジェクトを生成．
const Tab = createBottomTabNavigator();

// コンポーネント関数を定義する．
// exportをまとめて書く方法．
export default function App() {
  return (
    // <NavigationContainer>
    //   <Tab.Navigator
    //     tabBarOptions={{
    //       activeTintColor: "white",
    //       inactiveTintColor: "#333399",
    //       activeBackgroundColor: "#333399",
    //       inactiveBackgroundColor: "#9999dd",
    //     }}
    //     screenOptions={{
    //       headerTintColor: "#ffffff",
    //       headerStyle: {
    //         backgroundColor: "violet",
    //       },
    //     }}
    //   >
    //     <Tab.Screen name="ホーム" component={TestStackScreen} />
    //     <Tab.Screen name="メッセージ" component={Message} />
    //   </Tab.Navigator>
    // </NavigationContainer>

    // 画面の定義はTab.Screenコンポーネントで行い，Tab.Navigatorで囲む．
    // Tab.Navigatorにオプションをつけると色とか諸々いじれる．
    // 詳細なオプションは調べるなりしてね．
    <NavigationContainer>
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
            backgroundColor: "violet",
          },
        }}
      >
        <Tab.Screen name="画面１" component={DemoStackTransition} />
        <Tab.Screen name="画面２" component={DemoScreen3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
