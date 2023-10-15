import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import DemoScreen2 from "../../Screen/DemoScreen/DemoScreen2";
import DemoStackScreenNest from "./DemoScreenStackNest";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createStackNavigatorでStackオブジェクトを生成．
const Stack = createStackNavigator();

// 一つ目のコンポーネント関数を定義する．
function DemoStackScreen1() {
  return (
    // 画面の定義はStack.Screenコンポーネントで行い，Stack.Navigatorで囲む．
    // Stack.Navigatorにオプションをつけると色とか諸々いじれる．
    // 詳細なオプションは調べるなりしてね．
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
      headerMode="float"
    >
      <Stack.Screen name="DemoScreen2" component={DemoScreen2} />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
    </Stack.Navigator>
  );
}

// 二つ目のコンポーネント関数を定義する．
function DemoStackScreen2() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: "#ffffff",
        headerStyle: {
          backgroundColor: "#333399",
        },
      }}
      headerMode="float"
    >
      <Stack.Screen name="Nest" component={DemoStackScreenNest} />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面を設定する．*/}
    </Stack.Navigator>
  );
}

// 関数をどこでも使えるようにエクスポート．
// 一つのコンポーネントファイルに複数のコンポーネントも設定できるよ．
// その場合はexportを別で書いてね．
export { DemoStackScreen1, DemoStackScreen2 };
