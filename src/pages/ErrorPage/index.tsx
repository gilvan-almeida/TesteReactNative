import React from "react";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AlertTriangle } from "lucide-react-native";
import { useTheme } from "styled-components/native";
import { Title, Subtitle, PrimaryButton, PrimaryButtonText, SecondaryButton, SecondaryButtonText } from "../../styles/global";
import { Box, IconBox, TextBox, ButtonBox } from "./style";

interface StorageErrorPageProps {
    onReset: () => void;
}
export function ErrorPage({ onReset }: StorageErrorPageProps) {
    const theme = useTheme();

    const handleReset = () => {
        Alert.alert(
            "Resetar dados",
            "Isso vai apagar todas as suas tarefas e categorias. Tem certeza?",
            [
                { text: "Cancelar", style: "cancel" },
                {
                    text: "Resetar",
                    style: "destructive",
                    onPress: async () => {
                        await AsyncStorage.clear();
                        onReset();
                    }
                }
            ]
        );
    };

    return (
        <Box>
            <IconBox>
                <AlertTriangle size={64} color={theme.colors.error} />
            </IconBox>
            <TextBox>
                <Title style={{ textAlign: "center" }}>Erro de armazenamento</Title>
                <Subtitle style={{ textAlign: "center", marginTop: 8 }}>
                    Não foi possível carregar os dados do app. Isso pode ser causado por um arquivo corrompido.
                </Subtitle>
            </TextBox>
            <ButtonBox>
                <PrimaryButton onPress={handleReset}>
                    <PrimaryButtonText>Resetar dados</PrimaryButtonText>
                </PrimaryButton>
                <SecondaryButton onPress={onReset}>
                    <SecondaryButtonText>Tentar novamente</SecondaryButtonText>
                </SecondaryButton>
            </ButtonBox>
        </Box>
    );
}