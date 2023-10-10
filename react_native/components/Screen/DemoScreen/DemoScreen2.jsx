import React from "react";
import { View, Text, StyleSheet } from "react-native";
// 必要なライブラリやコンポーネントなどをインポートする．
// インポートし忘れのミスが結構ある．

// コンポーネント関数を定義する．
function DemoScreen2() {
  return (
    <View
       style={
        styles.container
      }
    >
      <Text style={styles.text}>Demo Screen2</Text>
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
    color:"rgb(0 255 0)"
  },
});

// 関数をどこでも使えるようにエクスポート．
export default DemoScreen2;
