import styled from "styled-components";

const IconIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4.8rem;
  min-height: 4.8rem;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 0.8rem;
  border: var(--grey-border);
  background-color: var(--light-black);
  color: var(--medium-grey);

  .injected-svg {
    display: block;
    width: 1.6rem;
    height: 1.6rem;
  }
`;

export default IconIndicator;