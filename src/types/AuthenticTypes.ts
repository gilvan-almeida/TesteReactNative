export interface UseBiometricType {
    verifySucess: () => void;
    verifyHardware: () => void;
}

export interface BackgroundLockType{
    verifyAuthentic: boolean;
    onLock: () => void;
}

export interface UseAuthPinType{
    onSuccess: () => void;
}

export interface PinInputType {
    pin: string;
    onChangePin: (value: string) => void;
}