export interface UseBiometricType {
    verifySucess: () => void;
    verifyHardware: () => void;
}

export interface BackgroundLockType{
    verifyAuthentic: boolean;
    onLock: () => void;
}