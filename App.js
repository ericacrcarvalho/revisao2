import React from 'react';
import { View, StyleSheet } from 'react-native';
import Focus from './features/focus/Focus';

const App = () => {
  return (
    <Focus
      size={30}
      yellow={"#ffe700"}
      pink={"#ff57d9"}
    />
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
  }, 
});