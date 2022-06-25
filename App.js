import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Platform, View, SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './src/redux/store';
import AppNavigation from './src/Navigations';

export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <AppNavigation />
      </SafeAreaView>
      <StatusBar style="dark" />
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: Platform.OS === "android" && 20
  },
});
