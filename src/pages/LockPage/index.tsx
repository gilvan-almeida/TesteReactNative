import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthListProps } from "../../types/NavigationType";
import { useBiometricHook } from "../../hooks/AuthBiometricHook";

type LockPageProps = NativeStackScreenProps<AuthListProps, "LockPage"> & {
  onLogin: () => void;
};

export function LockPage({onLogin, navigation}: LockPageProps){

    const {isTente, isBlocked, isTime, authenticateUser, remaninTents } = useBiometricHook({
        verifySucess: onLogin,
        verifyHardware: () => navigation.navigate("PasswordPage"),
    })

    if(isBlocked){
        //apenas para teste das funções de login
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Muitas tentativas!</Text>
            <Text>Tente novamente em {isTime} segundos</Text>
        </View>
    }

    return(
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>LockPage</Text>
                {isTente > 0 &&(
                    <Text>Tentativas que faltam: {remaninTents}</Text>
                )}
            <Button title="Simular Sucesso" onPress={onLogin} />
            <Button
                title="Usar PIN"
                onPress={() => navigation.navigate("PasswordPage")}
            />
        </View>
    )
}