import { StyleSheet, Text, View, StatusBar } from "react-native";
import { Home } from "./src/screens/Home";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <PaperProvider>
        <Home />
        <StatusBar style="auto" />
    </PaperProvider>
  );
}


