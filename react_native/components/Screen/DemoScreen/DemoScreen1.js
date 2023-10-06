import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button, StyleSheet } from "react-native";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// コンポーネント関数を定義する．
function DemoScreen1() {

    // 画面間を移動する場合はuseNavigation()フックを使ってnavigationオブジェクトを取りだす．
  const navigation = useNavigation();

  return (
    <View
      style={
        styles.container
      }
    >
      <Text style={styles.text}>Demo Screen1</Text>
      <Button
        title="Demo Screen2へ"
        onPress={() => navigation.navigate("DemoStackScreen1")}
      />
      {/* navigation.navigate()関数を実行することで画面遷移が発生する． */}
      {/* 遷移先のStack.Screenコンポーネントで設定したnameと同じ名前を格納． */}
      <Button
        title="Demo Screen3へ"
        onPress={() => navigation.navigate("DemoStackScreen2")}
      />
    </View>
  );
};

// スタイル用の関数を定義する．
// 呼び出しは上の通り
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color:"rgb(128 0 128)"
  },
});

// 関数をどこでも使えるようにエクスポート．
export default DemoScreen1;
