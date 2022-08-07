import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./src/screens/Home";

const NavigationStack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
      <NavigationStack.Navigator>
        <NavigationStack.Screen name="Home" component={Home} />
      </NavigationStack.Navigator>
      </TailwindProvider>
    </NavigationContainer>
  );
}