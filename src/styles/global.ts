import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.textLight};
`;

export const PrimaryButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.primary};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    align-items: center;
    width: 100%;
`;

export const PrimaryButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.white};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
`;

export const SecondaryButton = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.border};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    align-items: center;
    width: 100%;
`;

export const SecondaryButtonText = styled.Text`
    color: ${({ theme }) => theme.colors.text};
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 600;
`;