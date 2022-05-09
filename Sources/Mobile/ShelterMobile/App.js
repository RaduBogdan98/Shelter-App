import { useState } from 'react';
import AppNavigator from "./src/navigation/AppNavigator"
import AppLoading from 'expo-app-loading';
import useFonts from './src/resources/utils/useFonts';
import Toast from 'react-native-toast-message';
import toastConfig from './src/resources/toastConfig';

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
    <>
      <AppNavigator />
      <Toast config={toastConfig} />
    </>
  )
};
