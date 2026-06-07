import { View, Text, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthListProps } from "../../types/NavigationType";

type LockPageProps = NativeStackScreenProps<AuthListProps, "LockPage"> & {
  onLogin: () => void;
};


export function LockPage({onLogin, navigation}: LockPageProps){
    return(
        <View>
            <Text>LockPage</Text>
            <Button title="Simular Sucesso" onPress={onLogin} />
            <Button
                title="Usar PIN"
                onPress={() => navigation.navigate("PasswordPage")}
            />
        </View>
    )
}