import styled from "styled-components/native";
import { Container } from "../../styles/global";

export const Box = styled(Container)`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    padding: 32px;
`;

export const IconBox = styled.View`
    margin-bottom: 24px;
    align-items: center;
    justify-content: center;
`;

export const TextBox = styled.View`
    width: 100%;
    align-items: center;
    justify-content: center;
    margin-bottom: 32px;
    padding: 0 24px;
`;

export const ButtonBox = styled.View`
    width: 100%;
    padding: 0 32px;
    gap: 12px;
`;