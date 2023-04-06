import React, { useCallback, useEffect, useState } from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native'
import * as SplashScreen from 'expo-splash-screen';
import * as Font from 'expo-font';
import Coins from './Coins';

const fonts = ()=> Font.loadAsync({
  "rb-bold" : require('../assets/font/RobotoMono-Bold.ttf'),
  "rb-reg" : require('../assets/font/RobotoMono-Regular.ttf'),
  "nu-bold" : require('../assets/font/NunitoSans-Bold.ttf'),
  "nu-reg" : require('../assets/font/NunitoSans-Regular.ttf'),
  "os-bold" : require('../assets/font/Oswald-Regular.ttf'),
  "os-reg" : require('../assets/font/Oswald-Regular.ttf'),
  "jo-bold" : require('../assets/font/JosefinSans-Bold.ttf'),
  "jo-reg" : require('../assets/font/JosefinSans-Regular.ttf'),
})

SplashScreen.preventAutoHideAsync();

export default function Main({navigation}) {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await fonts();
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
        <Text style={{fontSize:20,padding:10,textAlign:"center",color:"#fff",fontFamily:"rb-bold"}}>Make a request and get data about cryptocurrency!</Text>
        <Coins nav={navigation}/>
        <StatusBar style="auto" />
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#121212",
      color:"#fff"
    },
});