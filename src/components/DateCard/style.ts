import styled from "styled-components/native";
import { theme } from "../../styles/theme";

export const CalendarWrapper = styled.View`
    border-radius: ${({ theme }) => theme.borderRadius.lg};
    overflow: hidden;
    border-width: 1px;
    border-color: ${({ theme }) => theme.colors.border};
`;