import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";
import { Title, Subtitle, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from "../../styles/global";
import { useBiometricHook } from "../../hooks/AuthBiometricHook";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthListProps } from "../../types/NavigationType";
import { Box, IconBox, BlockedText, TextBox, TentesText, ButtonBox } from "./style";
import { theme } from "../../styles/theme";
import { Lock } from 'lucide-react-native';

type LockPageProps = NativeStackScreenProps<AuthListProps, "LockPage"> & {
    onLogin: () => void;
};

export function LockPage({ onLogin, navigation }: LockPageProps) {
    const scale = useRef(new Animated.Value(1)).current;
    const opacity = useRef(new Animated.Value(1)).current;

    const playSuccessAnimation = (callback: () => void) => {
        Animated.parallel([
            Animated.spring(scale, {
                toValue: 1.08,
                useNativeDriver: true,
            }),
            Animated.timing(opacity, {
                toValue: 0,
                duration: 400,
                useNativeDriver: true,
            }),
        ]).start(() => callback());
    };

    const { isTente, isBlocked, isTime, authenticateUser, remaninTents } = useBiometricHook({
        verifySucess: () => playSuccessAnimation(onLogin),
        verifyHardware: () => navigation.navigate("PasswordPage"),
    });

    if (isBlocked) {
        return (
            <Box>
                <IconBox>
                    <Lock size={52} color={theme.colors.primary} />
                </IconBox>
                <Title>TaskFlow</Title>
                <BlockedText>Muitas tentativas!{"\n"}Tente novamente em {isTime} segundos</BlockedText>
            </Box>
        );
    }

    return (
        <Animated.View style={{ flex: 1, transform: [{ scale }], opacity }}>
            <Box>
                <IconBox>
                    <Lock size={52} color={theme.colors.primary} />
                </IconBox>
                <TextBox>
                    <Title>Atividades</Title>
                    <Subtitle>Desbloqueie para Continuar</Subtitle>
                </TextBox>

                {isTente > 0 && (
                    <TentesText>Tentativas restantes: {remaninTents}</TentesText>
                )}

                <ButtonBox>
                    <PrimaryButton onPress={authenticateUser}>
                        <PrimaryButtonText>Use Biometria</PrimaryButtonText>
                    </PrimaryButton>
                    <SecondaryButton onPress={() => navigation.navigate("PasswordPage")}>
                        <SecondaryButtonText>Use PIN</SecondaryButtonText>
                    </SecondaryButton>
                </ButtonBox>
            </Box>
        </Animated.View>
    );
}