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

export const GreetingText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
`;

export const SubtitleText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: ${({ theme }) => theme.spacing.xs};
`;

export const ToolbarContainer = styled.View`
  padding-horizontal: ${({ theme }) => theme.spacing.lg};
  margin-bottom: ${({ theme }) => theme.spacing.md};
  gap: ${({ theme }) => theme.spacing.sm}; 
`;

export const FilterRow = styled.View`
  flex-direction: row;
  gap: ${({ theme }) => theme.spacing.sm};
  margin-top: ${({ theme }) => theme.spacing.sm};
`;

export const ListContainer = styled.View`
  flex: 1;
  padding-horizontal: ${({ theme }) => theme.spacing.lg};
`;

export const EmptyText = styled.Text`
  font-size: ${({ theme }) => theme.fontSize.md};
  color: ${({ theme }) => theme.colors.textLight};
  text-align: center;
  margin-top: ${({ theme }) => theme.spacing.xl};
`;

export const FloatingActionButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 32px;
  right: 24px;
  width: 56px;
  height: 56px;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  background-color: ${({ theme }) => theme.colors.primary};
  justify-content: center;
  align-items: center;
  elevation: 5;
  shadow-color: ${({ theme }) => theme.colors.primary};
  shadow-offset: 0px 4px;
  shadow-opacity: 0.3;
  shadow-radius: 4.65px;
`;