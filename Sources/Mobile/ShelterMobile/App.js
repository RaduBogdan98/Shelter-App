import { useState } from "react";
import AppLoading from "expo-app-loading";
import { Provider } from "react-redux";

import AppNavigator from "./src/navigation/AppNavigator";
import useFonts from "./src/resources/utils/useFonts";
import Toast from "react-native-toast-message";
import toastConfig from "./src/resources/toastConfig";
import store from "./src/store/configureStore";

export default function App() {
  const [fontReady, setFontReady] = useState(false);

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
    <Provider store={store}>
      <AppNavigator />
      <Toast config={toastConfig} />
    </Provider>
  );
}
