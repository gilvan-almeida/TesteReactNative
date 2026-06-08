import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Box = styled(SafeAreaView)`
    flex: 1;
    align-items: center;
    justify-content: center;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const IconBox = styled.View`
    width: 80px;
    height: 80px;
    border-radius: 40px;
    background-color: ${({ theme }) => theme.colors.primaryLight};
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;    
`;


export const TextBox = styled.View`
    align-items: center;
    margin-bottom: 48px;
`;

export const ButtonBox = styled.View`
    width: 100%;
    gap: 12px;
`;

export const BlockedText = styled.Text`
    font-size: 16px;
    color: ${({ theme }) => theme.colors.error};
    text-align: center;
    margin-top: 16px;
`;

export const TentesText = styled.Text`
    font-size: 14px;
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 24px;
`;