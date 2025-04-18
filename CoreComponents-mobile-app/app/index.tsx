import {View } from "react-native";
import App from "./App";

export default function Index() {
  return (
    // The View component acts like a container with flex 1 for full screen 
    <View style={{ flex: 1 }}>
      {/* Rendering the main App component inside the View container */}
      <App />
    </View>
  );
}
