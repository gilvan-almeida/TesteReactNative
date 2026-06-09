import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #FFFFFF;
  padding: 40px 24px 24px 24px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 32px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #1A202C;
`;

export const CloseButton = styled.TouchableOpacity`
  background-color: #F7FAFC;
  width: 36px;
  height: 36px;
  border-radius: 18px;
  justify-content: center;
  align-items: center;
`;

export const FieldLabel = styled.Text`
  font-size: 14px;
  font-weight: 600;
  color: #4A5568;
  margin-bottom: 8px;
  margin-top: 12px;
`;

export const InputContainer = styled.View`
  background-color: #F7FAFC;
  border: 1px solid #E2E8F0;
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 20px;
`;

export const ColorRow = styled.View`
  flex-direction: row;
  gap: 12px;
  margin-bottom: 32px;
  margin-top: 4px;
`;

export const ColorOption = styled.View<{ color: string; isSelected: boolean }>`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  background-color: ${({ color }) => color};
  border: ${({ isSelected }) => isSelected ? "3px solid #1A202C" : "none"};
`;

export const SubmitButton = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.colors.primary || "#6C63FF"};
  padding: 16px;
  border-radius: 14px;
  align-items: center;
  margin-top: auto;
`;

export const SubmitButtonText = styled.Text`
  color: #FFFFFF;
  font-size: 16px;
  font-weight: bold;
`;

export const DeleteButton = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  padding: 12px;
`;

export const DeleteButtonText = styled.Text`
  color: #E53E3E;
  font-size: 14px;
  font-weight: 600;
`;