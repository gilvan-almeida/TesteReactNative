import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./AppRouter";
import { AuthRouter } from "./AuthRouter";
import { useBackgroundHookLock } from "../hooks/BackgroundHookLock";

export function Routes() {
  const [verifyAuthentic, setIsVerifyAuthentic] = useState(false);

  useBackgroundHookLock({
    verifyAuthentic,
    onLock: () => setIsVerifyAuthentic(false)
  });

  return (
    <NavigationContainer>
      {verifyAuthentic
        ? <AppRouter />
        : <AuthRouter onLogin={() => setIsVerifyAuthentic(true)} />
      }
    </NavigationContainer>
  );
}