import React, { useState }  from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppProvider } from "../context/TaskContext";
import { CreateTaskPage } from "../pages/CreateTaskPage";
import { AppStackParamList } from "../types/NavigationType";
import { CreateLabelPage } from "../pages/CreateLabel";

import { TabNavigation } from "./TabNavigation";

const Stack = createNativeStackNavigator<AppStackParamList>();

export function AppRouter() {
    const [resetKey, setResetKey] = useState(0);
    return (
        <AppProvider key={resetKey} onReset={() => setResetKey(k => k + 1)}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Tab" component={TabNavigation} />
            <Stack.Screen name="CreateTask" component={CreateTaskPage} />
            <Stack.Screen name="EditTask" component={CreateTaskPage} />
            <Stack.Screen name="CreateLabel" component={CreateLabelPage} />
        </Stack.Navigator>
        </AppProvider>
    );
}