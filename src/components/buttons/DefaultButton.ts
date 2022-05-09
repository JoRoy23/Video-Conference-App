import styled from "styled-components";

interface IDefaultButton {
  borderHidden?: boolean;
};

const DefaultButton = styled.button.attrs(props => ({
  type: "button",
}))<IDefaultButton>`
  min-width: 4.8rem;
  min-height: 4.8rem;
  padding: 1rem;
  font-size: 1.4rem;
  font-weight: 400;
  border-radius: 1.2rem;
  border: ${props => props.borderHidden ? "none" : "var(--grey-border)"};
  background-color: var(--light-black);
  color: var(--button-medium-color);
  cursor: pointer;
`; 


export default DefaultButton;

