import styled from "styled-components/native";

export const SearchWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  padding-horizontal: ${({ theme }) => theme.spacing.md};
  height: 52px;
  width: 100%;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: ${({ theme }) => theme.fontSize.lg};
  color: ${({ theme }) => theme.colors.text};
  margin-left: ${({ theme }) => theme.spacing.sm};
`;