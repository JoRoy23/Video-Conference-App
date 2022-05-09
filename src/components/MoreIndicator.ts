import styled from "styled-components";

interface IMoreIndicator  {
  background?: string;
  color?: string;
}

const MoreIndicator = styled.div<IMoreIndicator>`
  min-width: 4.8rem;
  min-height: 4.8rem;
  padding: 1.4rem;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 1.2rem;
  border: var(--grey-border);
  background-color: ${props => props.background || "var(--blue-accent)"};
  color: ${props => props.color || "var(--button-light-color)"};
`;

export default MoreIndicator;