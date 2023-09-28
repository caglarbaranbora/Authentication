import React from 'react';
import {SafeAreaView,StyleSheet} from 'react-native';
import {Router} from './src/navigation/Router'
import { Provider } from 'react-redux';
import {store} from './src/Store';

const App = () => {

  return (
  <Provider store={store}>
    <SafeAreaView style={styles.root}>
      <Router />
    </SafeAreaView>
  </Provider>
  );
};

const styles = StyleSheet.create({
  root: {
    flex:1,
    backgroundColor: '#F9FBFC',
  },
  
});


export default App;
