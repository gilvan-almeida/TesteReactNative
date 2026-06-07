import { authenticateAsync, hasHardwareAsync, isEnrolledAsync } from "expo-local-authentication";

export const AuthBiometricService = {

    async verifyBiometricHardware(): Promise<boolean> {
        return  hasHardwareAsync();
    },

    async verifyBiometriCreate(): Promise<boolean> {
        return isEnrolledAsync();
    },

    async authenticatePopup(): Promise<boolean>{
        const result = await authenticateAsync({
            promptMessage: "Authenticação Necessaria",
            fallbackLabel: "Usar Pin",
            cancelLabel: "Cancelar",
            disableDeviceFallback: true,
        })
        return result.success;
    }
}