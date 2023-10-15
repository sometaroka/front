import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen_Setting from "../../Screen/ProfileScreen/ProfileScreen_Setting";
import ProfileScreen_Follow from "../../Screen/ProfileScreen/ProfileScreen_Follow";
import ProfileScreen_Follower from "../../Screen/ProfileScreen/ProfileScreen_Follower";
import ProfileScreen_FavoriteDialect from "../../Screen/ProfileScreen/ProfileScreen_FavoriteDialect";

// import DemoStackScreenNest from "./DemoStackScreenNest";

// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// createStackNavigatorでStackオブジェクトを生成．
const Stack = createStackNavigator();

// 一つ目のコンポーネント関数を定義する．
function ProfileStackScreen_Setting() {
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
      <Stack.Screen
        name="ProfileScreen_Setting"
        component={ProfileScreen_Setting}
      />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面コンポーネントを設定する．*/}
    </Stack.Navigator>
  );
}

// 二つ目のコンポーネント関数を定義する．
function ProfileStackScreen_Follow() {
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
      <Stack.Screen
        name="ProfileStackScreen_Follow"
        component={ProfileScreen_Follow}
      />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面を設定する．*/}
    </Stack.Navigator>
  );
}

function ProfileStackScreen_Follower() {
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
      <Stack.Screen
        name="ProfileScreen_follower"
        component={ProfileScreen_Follower}
      />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面を設定する．*/}
    </Stack.Navigator>
  );
}

function ProfileStackScreen_FavoriteDialect() {
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
      <Stack.Screen
        name="ProfileScreen_FavoriteDialect"
        component={ProfileScreen_FavoriteDialect}
      />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面を設定する．*/}
    </Stack.Navigator>
  );
}

function ProfileStackScreen_5() {
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

function ProfileStackScreen_6() {
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

function ProfileStackScreen_7() {
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
export {
  ProfileStackScreen_Setting,
  ProfileStackScreen_Follow,
  ProfileStackScreen_Follower,
  ProfileStackScreen_FavoriteDialect,
  ProfileStackScreen_5,
  ProfileStackScreen_6,
  ProfileStackScreen_7,
};
