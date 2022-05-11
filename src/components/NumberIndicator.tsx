import React from "react";
import styled from "styled-components";

interface INumberIndicator {
  number: number | undefined;
};

const NumberIndicator = ({ number }: INumberIndicator) => {
  return (
    <StyledNumberIndicator>{number}</StyledNumberIndicator>
  );
};

export default NumberIndicator;

const StyledNumberIndicator = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 4rem;
  min-height: 4rem;
  padding: 1.4rem;
  font-size: 1.2rem;
  font-weight: 400;
  border-radius: 0.8rem;
  border: var(--grey-border);
  background-color: var(--light-black);
  color: var(--medium-grey);
`;