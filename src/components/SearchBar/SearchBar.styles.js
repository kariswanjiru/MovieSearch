import styled from "styled-components";

export const Wrapper =  styled.div`
    display:flex;
    align-items:center;
    height:100px;
    background:var(--darkGrey);
    padding:0 20px;
`;

export const Content = styled.div`
    position:relative;
    max-width:var(--maxwidth);
    width:100%;
    height:55px;
    background:var(--medGrey);
    margin:0 auto;
    border-radius:40px;
    color:var(--white);
`;