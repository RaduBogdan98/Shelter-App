import { useState } from 'react';
import BottomTabNavigator from "./src/navigation/BottomTabNavigator"
import AppLoading from 'expo-app-loading';
import useFonts from './src/resources/utils/useFonts';

export default function App() {
  const [fontReady, setFontReady] = useState(false)

  const LoadFonts = async () => {
    await useFonts();
  };

  if (!fontReady) {
    return (
      <AppLoading
        startAsync={LoadFonts}
        onFinish={() => setFontReady(true)}
        onError={() => { }}
      />
    );
  }


  return (
    <BottomTabNavigator />
  )
};
