import { useState, useCallback } from "react";
import { PIN_DEFAULT } from "../config/AuthConfig";
import { UseAuthPinType } from "../types/AuthenticTypes";

export function useAuthPin({onSuccess}: UseAuthPinType){
    const [passwordPin, setPassordPin] = useState("");
    const [error, setError] =useState(false);

    const verifyHandleDigit = useCallback((digit: string) => {
            setPassordPin(digit);
            setError(false);

            if (digit.length === 4) {
                if (digit === PIN_DEFAULT) {
                    onSuccess();
                } else {
                    setError(true);
                    setPassordPin("");
                }
            }
        }, [onSuccess]);

    return { passwordPin, error, verifyHandleDigit };
}   