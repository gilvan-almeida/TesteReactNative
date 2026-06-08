import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Box = styled(SafeAreaView)`
  flex: 1;
  align-items: center;
  justify-content: space-between; /* Garante que o topo fique em cima e o botão embaixo */
  padding: 32px;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const TopContainer = styled.View`
  align-items: center;
  margin-top: 20px;
`;

export const MiddleContainer = styled.View`
  width: 100%;
  align-items: center;
  justify-content: center;
  flex: 1; /* Ocupa o espaço central para o seu teclado/input */
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error || "red"};
  font-size: 14px;
  margin-top: 12px;
  text-align: center;
`;

export const BottomContainer = styled.View`
  width: 100%;
  margin-top: 24px;
`;