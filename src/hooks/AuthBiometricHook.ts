import { useState, useCallback, useEffect } from "react";
import { AuthBiometricService } from "../service/AuthBiometricService";
import { UseBiometricType } from "../types/AuthenticTypes";
import { MAX_TENT, TIME_BLOCK } from "../config/AuthConfig";



export function useBiometricHook({verifySucess, verifyHardware} : UseBiometricType){
    const [isTente, setIsTente] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [isTime, setIsTime] = useState(TIME_BLOCK);

    const BlockedUser = useCallback(() => {
        setIsBlocked(true);
        setIsTime(TIME_BLOCK);

        const timeInterval = setInterval(() =>{
            setIsTime((date) => {
                if(date <= 1){
                    clearInterval(timeInterval);
                    setIsBlocked(false);
                    setIsTente(0);
                    return TIME_BLOCK;
                }
                return date -1;
            });}, 1000);},[])
        

    const authenticateUser = useCallback(async ()=>{

        if(isBlocked) return;
        const verifyHardwareService = await AuthBiometricService.verifyBiometricHardware();
        const verifyBiometricService = await AuthBiometricService.verifyBiometriCreate();

        if (!verifyBiometricService || !verifyHardwareService){
            verifyHardware();
            return;
        }

        const success = await AuthBiometricService.authenticatePopup();

        if(success){
            setIsTente(0);
            verifySucess();
            return;
        }

        const newTents =  isTente + 1;
        setIsTente(newTents);

        if(newTents >= MAX_TENT){
            BlockedUser()
        }

    },[isBlocked, isTente, verifySucess, verifyHardware, BlockedUser]);

    useEffect(()=>{
        authenticateUser();
    },[]);

    return {isTente, isBlocked, isTime, authenticateUser, remaninTents: MAX_TENT - isTente}


}

