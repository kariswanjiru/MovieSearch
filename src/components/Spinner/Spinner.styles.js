import styled from "styled-components";

export const Spinner = styled.div`
border:5px solid var(--lighGrey);
border-top:5px solid var(--medGrey);
border-radius:50%;
width:50px;
height:50px;
animatio:spin 0.8s liner infinite;
margin:20mpx auto;

@keyframes spin{
    0%{
        transform:rotate(0deg);
    }100%{
        transfrom:rotate(360deg);  
    }
}

`