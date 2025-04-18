import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        // Hides the header for screens
        headerShown: false, 
      }}
    />
  );
}