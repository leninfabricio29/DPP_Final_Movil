import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.tinyLogo}
        width='50'
        height='50'
        source={require('./assets/asd.png')}
      />
      <Text>Listo para adoptar ?</Text>
      <Text>Cargando...</Text>
      <Text>
        {"\n"}
      </Text>
      <Image
        style={styles.tinyLogo}
        width='50'
        height='50'
        source={require('./assets/progreso.png')}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
