import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";
import Counter from "./src/demo/Counter";


export default function App() {
  return(
    <NavigationContainer>
      <Counter />
      <Tabs />
    </NavigationContainer>
  )
}
