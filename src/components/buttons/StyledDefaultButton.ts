import styled from "styled-components";

const StyledDefaultButton = styled.button.attrs(props => ({
    type: "button",
}))`
    min-width: 4.8rem;
    min-height: 4.8rem;
    padding: 1.5rem;
    font-size: 1.4rem;
    font-weight: 400;
    border-radius: 1.2rem;
    border: var(--grey-border);
    background-color: var(--light-black);
    color: var(--button-medium-color);
    cursor: pointer;

    .injected-svg {
        display: block;
    }
`; 


export default StyledDefaultButton;

