import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 

function Timeline_home() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.moji_ber}>〇〇弁</Text>
      </View>
      <View style={styles.topbar}>
        <Text style={styles.moji_home}>🍜home🍜</Text>
      </View>
      <View style={styles.button}>
        <AntDesign name="pluscircleo" size={50} color="black" />
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

export default Timeline_home;