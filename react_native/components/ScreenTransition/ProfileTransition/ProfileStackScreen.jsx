import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProfileScreen_Setting from "../../Screen/ProfileScreen/ProfileScreen_Setting";
import ProfileScreen_Follow from "../../Screen/ProfileScreen/ProfileScreen_Follow";
import ProfileScreen_Follower from "../../Screen/ProfileScreen/ProfileScreen_Follower";
import ProfileScreen_FavoriteDialect from "../../Screen/ProfileScreen/ProfileScreen_FavoriteDialect";
import { ProfileScreenStackNest_Setting_User } from "./ProfileScreenStackNest";
import { ProfileScreenStackNest_Setting_Avatar } from "./ProfileScreenStackNest";
import ProfileScreen_Setting_User from "../../Screen/ProfileScreen/ProfileScreen_Setting_User";
import ProfileScreen_Setting_Avatar from "../../Screen/ProfileScreen/ProfileScreen_Setting_Avatar";
import LoginScreen from "../../Screen/LoginScreen/LoginScreen";

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
      <Stack.Screen
        name="ProfileScreen_Setting_User"
        component={ProfileScreen_Setting_User}
      />
      <Stack.Screen
        name="ProfileScreen_Setting_Avatar"
        component={ProfileScreen_Setting_Avatar}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />

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

function ProfileStackScreen_Setting_User() {
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
        name="ProfileScreenStackNest_Setting_User"
        component={ProfileScreenStackNest_Setting_User}
      />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面を設定する．*/}
    </Stack.Navigator>
  );
}

function ProfileStackScreen_Setting_Avatar() {
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
        name="ProfileScreenStackNest_Setting_Avatar"
        component={ProfileScreenStackNest_Setting_Avatar}
      />
      {/* name="名前"で遷移先の名前を設定．<重要> */}
      {/* component={}の中には遷移先の画面を設定する．*/}
    </Stack.Navigator>
  );
}

// function ProfileStackScreen_7() {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTintColor: "#ffffff",
//         headerStyle: {
//           backgroundColor: "#333399",
//         },
//       }}
//       headerMode="float"
//     >
//       <Stack.Screen name="Nest" component={DemoStackScreenNest} />
//       {/* name="名前"で遷移先の名前を設定．<重要> */}
//       {/* component={}の中には遷移先の画面を設定する．*/}
//     </Stack.Navigator>
//   );
// }

// 関数をどこでも使えるようにエクスポート．
// 一つのコンポーネントファイルに複数のコンポーネントも設定できるよ．
// その場合はexportを別で書いてね．
export {
  ProfileStackScreen_Setting,
  ProfileStackScreen_Follow,
  ProfileStackScreen_Follower,
  ProfileStackScreen_FavoriteDialect,
  ProfileStackScreen_Setting_User,
  ProfileStackScreen_Setting_Avatar,
};
