import React from "react";
import { Platform } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useTheme } from "styled-components/native";
import { Home, Star, ChartColumnStacked } from "lucide-react-native";

import { HomePage } from "../pages/HomePage";
import { FavoritasPage } from "../pages/FavoritePage";
import { LabelsPage } from "../pages/LabelPage";
import { AppTabParamList } from "../types/NavigationType";

const Tab = createBottomTabNavigator<AppTabParamList>();

export function TabNavigation() {
  const theme = useTheme();

  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: theme.colors.primary,
        tabBarInactiveTintColor: theme.colors.textLight,
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "500",
          marginBottom: Platform.OS === "android" ? 10 : 0,
        },
        tabBarStyle: {
          backgroundColor: theme.colors.white,
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 88 : 70,
          paddingTop: 12,
          bottom: 0,
          left: 0,
          right: 0,
          ...Platform.select({
            android: {
              elevation: 8,
            },
          }),
        },
        tabBarIcon: ({ color, size }) => {
          if (route.name === "Home") {
            return <Home size={size} color={color} />;
          }
          if (route.name === "Favoritos") {
            return <Star size={size} color={color} />;
          }
          if (route.name === "LabelPage") {
            return <ChartColumnStacked size={size} color={color} />;
          }
          return null;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Favoritos" component={FavoritasPage} />
      <Tab.Screen name="LabelPage" component={LabelsPage} options={{ tabBarLabel: "Categorias"}} />
    </Tab.Navigator>
  );
}