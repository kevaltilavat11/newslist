import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import News from "../screens/News/News";
import ArchivedNews from "../screens/ArchivedNews/ArchivedNews";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarActiveTintColor: "#007aff",  
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="News" component={News} />
        <Tab.Screen name="Archived" component={ArchivedNews} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
