import { Text, View, Button } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthListProps } from "../../types/NavigationType";

type PasswordProps = NativeStackScreenProps<AuthListProps, "PasswordPage"> & {
  onLogin: () => void;
};

export function PasswordPage({onLogin, navigation}: PasswordProps){
    return(
        <View>
            <Text>PasswordPage</Text>
            <Button title="Entrar com PIN" onPress={onLogin} />
        </View>
    )
}