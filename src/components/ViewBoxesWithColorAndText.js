import React from 'react';
import {View, Text} from 'react-native';
// import {SafeAreaView, SafeAreaProvider} from 'react-native-safe-area-context';

const ViewBoxesWithColorAndText = () => {
  return (
    // <SafeAreaProvider>
    //   <SafeAreaView style={{height: 100, flexDirection: 'row'}}>
    <View>
        <View style={{backgroundColor: 'blue', flex: 0.2}} />
        <View style={{backgroundColor: 'red', flex: 0.4}} />
        <Text>Hello World!</Text>
    </View>
    //   </SafeAreaView>
    // </SafeAreaProvider>
  );
};

export default ViewBoxesWithColorAndText;