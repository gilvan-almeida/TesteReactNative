import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AuthListProps } from "../types/NavigationType";
import { LockPage } from "../pages/LockPage";
import { PasswordPage } from "../pages/PasswordPage";

interface AuthRouterProps {
  onLogin: () => void;
}
const Stack = createNativeStackNavigator<AuthListProps>();

export function AuthRouter({ onLogin }: AuthRouterProps) {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="LockPage">
        {(props) => <LockPage {...props} onLogin={onLogin} />}
      </Stack.Screen>

      <Stack.Screen name="PasswordPage">
        {(props) => <PasswordPage {...props} onLogin={onLogin} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
}