import React from "react";
import { View, Text, Button } from "react-native";

const ProfileScreen_OtherProfile = () => {
  const navigation = useNavigation();
  // console.log(route);
  return (
    <View style={styles.container}>
      <View style={styles.headerArea}>
        <Image
          style={styles.headerImage}
          source={require("../../../assets/icon.png")}
        />
        <Image
          style={styles.iconImage}
          source={require("../../../assets/icon.png")}
        />
        <Text>UserName</Text>
        <Text>紹介文</Text>
        <Button
          title="フォロー"
          onPress={() => navigation.navigate("ProfileStackScreen_Follow")}
        />
        <Button
          title="フォローワー"
          onPress={() => navigation.navigate("ProfileStackScreen_Follower")}
        />
        <Button
          title="お気に入り方言"
          onPress={() =>
            navigation.navigate("ProfileStackScreen_FavoriteDialect")
          }
        />
      </View>
      <ScrollView Style={styles.postArea}>
        <Text>
          あいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえおあいうえお
        </Text>
      </ScrollView>
    </View>
  );
};

// スタイル用の関数を定義する．
// 呼び出しは上の通り
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "center",
  },

  headerImage: {
    width: "100%",
    height: 70,
  },

  iconImage: {
    height: 60,
    width: 60,
  },

  headerArea: {
    borderWidth: 2,
    borderColor: "red",
  },

  postArea: {
    borderWidth: 2,
    borderColor: "blue",
  },
});

export default ProfileScreen_OtherProfile;
