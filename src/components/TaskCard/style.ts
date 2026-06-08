import styled from "styled-components/native";

interface TaskTextProps {
  isCompleted: boolean;
}

interface BadgeProps {
  color?: string;
}

interface ModalItemProps {
  isSelected: boolean;
}

export const CardContainer = styled.TouchableOpacity`
    background-color: ${({ theme }) => theme.colors.white};
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
    margin-bottom: ${({ theme }) => theme.spacing.sm};
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const LeftContent = styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
    gap: 12px;
`;

export const CheckButton = styled.TouchableOpacity`
    justify-content: center;
    align-items: center;
`;

export const TextContainer = styled.View`
    flex: 1;
    gap: 4px;
`;

export const TaskTitle = styled.Text<TaskTextProps>`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: 500;
    color: ${({ theme, isCompleted }) =>
        isCompleted ? theme.colors.textLight : theme.colors.text};
    text-decoration-line: ${({ isCompleted }) => isCompleted ? "line-through" : "none"};
`;

export const TaskDescription = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme }) => theme.colors.textLight};
    margin-bottom: 2px;
`;

export const FooterRow = styled.View`
    flex-direction: row;
    align-items: center;
    gap: 8px;
    margin-top: 2px;
`;

export const TaskDate = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.sm};
    color: ${({ theme }) => theme.colors.textLight};
`;

export const LabelBadge = styled.View<BadgeProps>`
    background-color: ${({ color }) => color ? `${color}1A` : "#F2F2F7"};
    padding: 4px 8px;
    border-radius: ${({ theme }) => theme.borderRadius.sm};
`;

export const LabelText = styled.Text<BadgeProps>`
    font-size: ${({ theme }) => theme.fontSize.sm};
    font-weight: 600;
    color: ${({ color }) => color || "#000000"};
`;

export const FavoriteButton = styled.TouchableOpacity`
    padding: ${({ theme }) => theme.spacing.xs};
    justify-content: center;
    align-items: center;
`;

export const ModalOverlay = styled.TouchableOpacity`
    flex: 1;
    background-color: rgba(0, 0, 0, 0.5);
    justify-content: flex-end;
`;

export const ModalBox = styled.View`
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: ${({ theme }) => theme.borderRadius.lg} ${({ theme }) => theme.borderRadius.lg} 0px 0px;
    padding: ${({ theme }) => theme.spacing.lg};
    max-height: 400px;
`;

export const ModalTitle = styled.Text`
    font-size: ${({ theme }) => theme.fontSize.lg};
    font-weight: bold;
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: ${({ theme }) => theme.spacing.md};
`;

export const ModalItem = styled.TouchableOpacity<ModalItemProps>`
    flex-direction: row;
    align-items: center;
    padding: ${({ theme }) => theme.spacing.md};
    border-radius: ${({ theme }) => theme.borderRadius.md};
    background-color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primaryLight : "transparent"};
    gap: ${({ theme }) => theme.spacing.sm};
    margin-bottom: ${({ theme }) => theme.spacing.xs};
`;

export const ModalItemText = styled.Text<ModalItemProps>`
    font-size: ${({ theme }) => theme.fontSize.md};
    color: ${({ theme, isSelected }) =>
        isSelected ? theme.colors.primary : theme.colors.text};
    font-weight: ${({ isSelected }) => isSelected ? "600" : "400"};
`;

export const ModalClose = styled.TouchableOpacity`
    align-items: center;
    padding: ${({ theme }) => theme.spacing.md};
    margin-top: ${({ theme }) => theme.spacing.sm};
    border-top-width: 1px;
    border-top-color: ${({ theme }) => theme.colors.border};
`;
