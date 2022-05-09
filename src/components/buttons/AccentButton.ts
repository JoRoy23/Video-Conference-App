import styled from "styled-components";
import DefaultButton from "./DefaultButton";

const AccentButton = styled(DefaultButton)<{ background?: string | undefined}>`
  background: ${props => props.background || "var(--blue-accent)"};
  color: var(--button-light-color);
  cursor: pointer;
`;

export default AccentButton;