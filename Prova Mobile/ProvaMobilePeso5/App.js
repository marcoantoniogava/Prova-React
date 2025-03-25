import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Home from './Screens/Home';
import Login from './Screens/Login';


export default function App() {
  return (
    <View style={styles.containerApp}>
      <Home/>
      </View>
  );
}

const styles = StyleSheet.create({
  containerApp: {
    flex: 1,
  },
});
