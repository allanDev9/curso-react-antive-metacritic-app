import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity as TouchableNativeFeedback} from 'react-native';

const  icon = require('./assets/icon.png');

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="light" />

      <TouchableNativeFeedback
      onPress={() => alert('Hola')}
      style={{ width: 200, height: 200, backgroundColor: 'red', borderRadius: 100,
      justifyContent: 'center', alignItems: 'center'
      }}
      >
      <Text style={{ color: 'white'}}>Pulsa aqui</Text>
     </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
