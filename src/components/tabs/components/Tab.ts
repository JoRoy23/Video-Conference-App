import styled from "styled-components";

interface ITab {
    active?: boolean;
};

const Tab = styled.button<ITab>`
    padding: 1.1rem 3.7rem;
    text-decoration: none;
    border-radius: 0.8rem;
    border: ${props => props.active ? "var(--grey-border)" : "0.05rem solid transparent"};
    background-color: ${props => props.active ? "var(--light-black)" : "transparent"};
    color: ${props => props.active ? "var(--light-grey)" : "var(--dark-grey)"};
    cursor: pointer;
`;

export default Tab;