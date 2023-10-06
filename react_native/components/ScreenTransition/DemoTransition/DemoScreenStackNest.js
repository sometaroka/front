import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { DemoNest1, DemoNest2 } from "../../Screen/DemoScreen/DemoScreenNest";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createStackNavigatorでStackオブジェクトを生成．
const Stack = createStackNavigator();

// コンポーネント関数を定義する．
// exportを別で書く方法．
function DemoStackScreenNest() {
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
    >
      <Stack.Screen name="DemoNest1" component={DemoNest1} />
      <Stack.Screen name="DemoNest2" component={DemoNest2} />
        {/* name="名前"で遷移先の名前を設定．<重要> */}
        {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
    </Stack.Navigator>
  );
}

// 関数をどこでも使えるようにエクスポート．
export default DemoStackScreenNest;
