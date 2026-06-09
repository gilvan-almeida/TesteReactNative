import { useState, useCallback, useEffect, useRef } from "react";
import { AuthBiometricService } from "../service/AuthBiometricService";
import { UseBiometricType } from "../types/AuthenticTypes";
import { MAX_TENT, TIME_BLOCK } from "../config/AuthConfig";

export function useBiometricHook({ verifySucess, verifyHardware }: UseBiometricType) {
    const [isTente, setIsTente] = useState(0);
    const [isBlocked, setIsBlocked] = useState(false);
    const [isTime, setIsTime] = useState(TIME_BLOCK);

    const isTenteRef = useRef(0);
    const isBlockedRef = useRef(false);
    const hasBiometricRef = useRef<boolean | null>(null);

    const BlockedUser = useCallback(() => {
        isBlockedRef.current = true;
        setIsBlocked(true);
        setIsTime(TIME_BLOCK);

        const timeInterval = setInterval(() => {
            setIsTime((date) => {
                if (date <= 1) {
                    clearInterval(timeInterval);
                    isBlockedRef.current = false;
                    isTenteRef.current = 0;
                    setIsBlocked(false);
                    setIsTente(0);
                    return TIME_BLOCK;
                }
                return date - 1;
            });
        }, 1000);
    }, []);

    const authenticateUser = useCallback(async () => {
        if (isBlockedRef.current) return;
        if (!hasBiometricRef.current) return;

        const success = await AuthBiometricService.authenticatePopup();

        if (success) {
            isTenteRef.current = 0;
            setIsTente(0);
            verifySucess();
            return;
        }

        isTenteRef.current += 1;
        setIsTente(isTenteRef.current);

        if (isTenteRef.current >= MAX_TENT) {
            BlockedUser();
        }
    }, [verifySucess, BlockedUser]);

    useEffect(() => {
        const checkHardware = async () => {
            const hasHardware = await AuthBiometricService.verifyBiometricHardware();
            const isEnrolled = await AuthBiometricService.verifyBiometriCreate();

            if (!hasHardware || !isEnrolled) {
                hasBiometricRef.current = false;
                verifyHardware();
                return;
            }

            hasBiometricRef.current = true;
            await authenticateUser();
        };

        checkHardware();
    }, []);

    return { isTente, isBlocked, isTime, authenticateUser, remaninTents: MAX_TENT - isTente };
}