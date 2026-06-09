import styled from "styled-components/native";

interface ChipProps {
    isSelected: boolean;
    color?: string;
}

export const Wrapper = styled.View`
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ChipScroll = styled.ScrollView``;

export const FilterChip = styled.TouchableOpacity<ChipProps>`
    background-color: ${({ theme, isSelected, color }) => {
        if (isSelected) return color || theme.colors.primary;
        return theme.colors.white;
    }};
    padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.full};
    margin-right: ${({ theme }) => theme.spacing.sm};
    border-width: 1px;
    border-color: ${({ theme, isSelected, color }) => {
        if (isSelected) return color || theme.colors.primary;
        return theme.colors.border;
    }};
`;

export const FilterChipText = styled.Text<ChipProps>`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.white : theme.colors.textLight};
`;

export const OrderContainer = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: ${({ theme }) => theme.spacing.sm};
`;