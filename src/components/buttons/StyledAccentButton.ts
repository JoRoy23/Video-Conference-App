import styled from "styled-components";
import StyledDefaultButton from "./StyledDefaultButton";

const StyledAccentButton = styled(StyledDefaultButton)<{ background?: string | undefined}>`
    background: ${props => props.background || "var(--blue-accent)"};
    color: var(--button-light-color);
    cursor: pointer;
`;

export default StyledAccentButton;