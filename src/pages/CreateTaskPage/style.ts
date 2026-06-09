import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
  padding: 5px 5px;
`;

export const ScrollContainer = styled.ScrollView`
  flex: 1;
  padding: 24px 20px;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  flex: 1;
  margin-right: 12px;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primaryLight};
  padding: ${({ theme }) => theme.spacing.sm};
  border-radius: ${({ theme }) => theme.borderRadius.full};
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: ${({ theme }) => theme.colors.error};
  font-size: ${({ theme }) => theme.fontSize.md};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  font-weight: 500;
`;

export const FormGroup = styled.View`
  margin-bottom: 20px;
`;

export const InputLabel = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const RequiredMark = styled.Text`
  color: ${({ theme }) => theme.colors.error};
`;

export const StyledInput = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
`;

export const TextArea = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  min-height: 120px;
`;

export const InputWithIcon = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: 0 ${({ theme }) => theme.spacing.md};
`;

export const IconWrapper = styled.View`
  margin-right: ${({ theme }) => theme.spacing.sm};
`;

export const InputField = styled.TextInput`
  flex: 1;
  padding: ${({ theme }) => theme.spacing.md} 0;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
`;

export const LabelScroll = styled.ScrollView`
  flex-direction: row;
  margin-top: 4px;
`;

interface LabelChipProps {
  isSelected: boolean;
}

export const LabelChip = styled.TouchableOpacity<LabelChipProps>`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.white};
  padding: ${({ theme }) => theme.spacing.sm} ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  margin-right: ${({ theme }) => theme.spacing.sm};
  border-width: 1px;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.primary : theme.colors.border};
`;

export const LabelChipText = styled.Text<LabelChipProps>`
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
  color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.white : theme.colors.textLight};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary};
  padding: 18px;
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  align-items: center;
  margin-top: auto;
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const SubmitButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: bold;
`;