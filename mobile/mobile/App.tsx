import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View className='bg-gray-900 flex-1 items-center justify-center'>
      <Text className='text-gray-50 text-2xl font-bold'>Hello World!</Text>
      <StatusBar style="light" translucent />
    </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
