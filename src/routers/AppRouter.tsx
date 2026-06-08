import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProvider } from "../context/TaskContext";
import { CreateTaskPage } from "../pages/CreateTaskPage";
import { AppStackParamList } from "../types/NavigationType";
import { CreateLabelPage } from "../pages/CreateLabel";

import { TabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRouter() {
  return (
    <AppProvider>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Tab" component={TabNavigation} />
        <Stack.Screen name="CreateTask" component={CreateTaskPage} />
        <Stack.Screen name="EditTask" component={CreateTaskPage} />
        <Stack.Screen name="CreateLabel" component={CreateLabelPage} />
      </Stack.Navigator>
    </AppProvider>
  );
}