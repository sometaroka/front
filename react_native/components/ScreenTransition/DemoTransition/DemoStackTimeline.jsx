import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Timeline_home, Timeline_post} from "../../Timeline/Timeline_home";

const Stack = createStackNavigator();

function DemoStackTimeline1() {
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
        <Stack.Screen name="Timeline_home" component={Timeline_home} />
        <Stack.Screen name="Timeline_post" component={Timeline_post} />
        {/* name="名前"で遷移先の名前を設定．<重要> */}
        {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
      </Stack.Navigator>
    );
}



export { DemoStackTimeline1 };