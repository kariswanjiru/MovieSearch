import styled from "styled-components";

export const  Image = styled.img`
    width: 200px;
    max-width:720px;
    transition:all 0.3s;
    object-fit:cover;
    border-radius:35px;
    animation:animateaThumb 0.5s;

    :hover{
        opacity:0.7;
        /*Added some interactivity with the thumbs*/
        width:220px;
    }

    @keyframes animateThumb {
        from{
            opacity:0;
        }to{
            opacity:1;
        }
    }

`;
