import { useEffect, useRef } from "react";
import { AppState, AppStateStatus } from "react-native";
import { BACKGROUND_TIME_LOCK } from "../config/AuthConfig";
import { BackgroundLockType } from "../types/AuthenticTypes";

export function useBackgroundHookLock({verifyAuthentic, onLock}: BackgroundLockType){
    const backgroundTime = useRef<number | null>(null);
    const appState =  useRef<AppStateStatus>(AppState.currentState);

    useEffect(() =>{
        if(!verifyAuthentic) return;
        
        const verifyBackground = AppState.addEventListener(
            "change",(state: AppStateStatus) =>{
                if (appState.current === "active" && state === "background"){
                    backgroundTime.current = Date.now();
                }

                if(appState.current === "background" && state === "active"){
                    if(backgroundTime.current){
                        const timeAux = Date.now() - backgroundTime.current;
                        if(timeAux >= BACKGROUND_TIME_LOCK){
                            onLock()
                        }
                    }
                    backgroundTime.current = null;
                }

                appState.current = state;
            }
        );

        return () => verifyBackground.remove();
    },[verifyAuthentic, onLock]);
}
