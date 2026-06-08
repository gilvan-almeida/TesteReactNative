import styled from "styled-components/native";
import { Platform, StatusBar } from "react-native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.colors.white};
    padding-top: ${Platform.OS === "android" ? (StatusBar.currentHeight ?? 0) + 20 : 20}px;
`;

export const HeaderContainer = styled.View`
  padding-horizontal: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.lg};
`;

export const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubtitleText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const ListContainer = styled.View`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.spacing.lg};
`;

export const LabelCard = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};
  border-width: 1px;
  border-color: ${({ theme }) => theme.colors.border};
  padding: ${({ theme }) => theme.spacing.md};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  margin-bottom: ${({ theme }) => theme.spacing.sm};
`;

export const ColorCircle = styled.View<{ color: string }>`
  width: 14px;
  height: 14px;
  border-radius: 7px;
  background-color: ${({ color }) => color || "#FF0000"};
  margin-right: ${({ theme }) => theme.spacing.md};
`;

export const LabelInfo = styled.View`
  flex: 1;
`;

export const LabelName = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

export const TaskCount = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.sm};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 2px;
`;

export const EditButton = styled.TouchableOpacity`
  padding: 6px 12px;
`;

export const EditButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fontSize.md};
  font-weight: 500;
`;

export const FloatingActionButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 100px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  elevation: 4;
  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset-width: 0px;
  shadow-offset-height: 4px;
  shadow-opacity: 0.3;
  shadow-radius: 6px;
`;

export const EmptyText = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.xl};
  font-size: ${({ theme }) => theme.fontSize.md};
`;