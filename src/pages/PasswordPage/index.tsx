import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthListProps } from "../../types/NavigationType";
import { useAuthPin } from "../../hooks/AuthPinHook";
import { PinInput } from "../../components/PinInput";

type PasswordProps = NativeStackScreenProps<AuthListProps, "PasswordPage"> & {
  onLogin: () => void;
};

export function PasswordPage({onLogin, navigation}: PasswordProps){
    const { passwordPin, error, verifyHandleDigit} = useAuthPin({
        onSuccess: onLogin,
    });

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Text>Digite seu PIN</Text>

            <PinInput pin={passwordPin} onChangePin={verifyHandleDigit} />

            {error && <Text style={{ color: "red" }}>PIN incorreto!</Text>}

            <Button
                title="Usar Biometria"
                onPress={() => navigation.navigate("LockPage")}
            />
        </View>
    );
}