import React, { useEffect } from "react";
import * as SplashScreen from "expo-splash-screen";
import {
  useFonts,
  Inter_900Black,
  Inter_400Regular,
} from "@expo-google-fonts/inter";
import App from "./index";

SplashScreen.preventAutoHideAsync();

const Layout: React.FC = () => {
  let [loaded] = useFonts({
    Inter_900Black,
    Inter_400Regular,
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <App />;
};

export default Layout;
