import React from "react";
import { Search } from "lucide-react-native";
import { useTheme } from "styled-components/native";
import { SearchWrapper, SearchInput } from "./style";

interface SearchBarProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function SearchBar({ value, onChangeText }: SearchBarProps) {
  const theme = useTheme();

  return (
    <SearchWrapper>
      <Search size={20} color={theme.colors.textLight} />
      <SearchInput
        value={value}
        onChangeText={onChangeText}
        placeholder="Pesquise sua atividade"
        placeholderTextColor={theme.colors.textLight}
      />
    </SearchWrapper>
  );
}