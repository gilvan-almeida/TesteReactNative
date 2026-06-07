import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRouter } from "./AppRouter";
import { AuthRouter } from "./AuthRouter";

export function Routes(){

    const [isAuthentic, setIsAuthentic] = useState(false);

    return(
        <NavigationContainer>
            {isAuthentic ? <AppRouter/> : <AuthRouter onLogin={() => setIsAuthentic(true)}/>}
        </NavigationContainer>
    )

}   