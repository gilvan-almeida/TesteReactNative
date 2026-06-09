import { Routes } from "./src/routers";
import { ThemeProvider } from "styled-components/native";
import { theme } from "./src/styles/theme";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return(
    <GestureHandlerRootView style={{ flex: 1 }}>
      <SafeAreaProvider>
        <StatusBar style="dark" backgroundColor={theme.colors.background} />
        <ThemeProvider theme={theme}>
          <Routes/>
        </ThemeProvider>
      </SafeAreaProvider>
    </GestureHandlerRootView>
  )
}