import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";

function Timeline_home() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.moji_ber}>〇〇弁</Text>
      </View>
      <View style={styles.topbar}>
        <Text style={styles.moji_home}>🍜home🍜</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity 
          onPress={() => navigation.navigate("DemoStackTimeline2")}
        >
          <AntDesign name="pluscircleo" size={50} color="black" />
        </TouchableOpacity>
      </View>
      <StatusBar style="light" />
    </View>

  );
}

function Timeline_post() {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.moji_home}>🍜post🍜</Text>
      </View>
      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topbar: {
    borderTopWidth: 1,
    borderColor: '#000',
  },
  moji_ber: {
    paddingVertical: 30,
    paddingHorizontal: 160,
    color: 'black',
    fontSize: 20,
  },
  moji_home: {
    paddingVertical: 180,
    paddingHorizontal: 70,
    color: 'black',
    fontSize: 50,
  },
  button: {
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
});

export default {Timeline_home, Timeline_post };