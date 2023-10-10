import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// 一つ目のコンポーネント関数を定義する．
function DemoNest1() {

   // 画面間を移動する場合はuseNavigation()フックを使ってnavigationオブジェクトを取りだす．
  const navigation = useNavigation();

  return (
    <View
     style={
        styles.container_1
      }
    >
      <Text style={styles.text_1}>Demo Screen Nest1</Text>
      <Button title="Nest2" onPress={() => navigation.navigate("DemoNest2")} />
      {/* navigation.navigate()関数を実行することで画面遷移が発生する． */}
      {/* 遷移先のStack.Screenコンポーネントで設定したnameと同じ名前を格納． */}
    </View>
  );
}

// 二つ目のコンポーネント関数を定義する．
function DemoNest2() {
  return (
    <View
     style={
        styles.container_2
      }
    >
      <Text style={styles.text_2}>Demo Screen Nest2</Text>
    </View>
  );
}

// スタイル用の関数を定義する．
// 呼び出しは上の通り
const styles = StyleSheet.create({
  container_1: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_1: {
    color:"rgb(255 0 255)"
  },
   container_2: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text_2: {
    color:"rgb(0 0 255)"
  },
});

// 関数をどこでも使えるようにエクスポート．
// 一つのコンポーネントファイルに複数のコンポーネントも設定できるよ．
// その場合はexportを別で書いてね．
export { DemoNest1, DemoNest2 };
