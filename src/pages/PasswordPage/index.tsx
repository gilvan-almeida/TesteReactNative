import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AuthListProps } from "../../types/NavigationType";
import { useAuthPin } from "../../hooks/AuthPinHook";
import { PinInput } from "../../components/PinInput";

import { Title, Subtitle, SecondaryButton, SecondaryButtonText } from "../../styles/global";

import { Box, TopContainer, MiddleContainer, ErrorText,BottomContainer } from "./style";

type PasswordProps = NativeStackScreenProps<AuthListProps, "PasswordPage"> & {
  onLogin: () => void;
};

export function PasswordPage({ onLogin, navigation }: PasswordProps) {
  const theme = useTheme();
  const { passwordPin, error, verifyHandleDigit } = useAuthPin({
    onSuccess: onLogin,
  });

  return (
    <Box>
      <TopContainer>
        <Title>Atividades</Title>
        <Subtitle>Digite seu PIN para continuar</Subtitle>
      </TopContainer>
      <MiddleContainer>
        <PinInput pin={passwordPin} onChangePin={verifyHandleDigit} />
    
        {error && <ErrorText>PIN incorreto!</ErrorText>}
      </MiddleContainer>

      <BottomContainer>
        <SecondaryButton onPress={() => navigation.navigate("LockPage")}>
          <SecondaryButtonText>Usar Biometria</SecondaryButtonText>
        </SecondaryButton>
      </BottomContainer>
    </Box>
  );
}