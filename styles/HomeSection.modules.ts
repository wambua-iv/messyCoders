import Image from "next/image";
import styled from "styled-components";
import { BreakPointsDown, BreakPointsUp } from "./Mixins";

export const HomeSectionWrapper = styled.div`
    width: 84%;
    margin: 5rem auto;
            
    ${BreakPointsDown('medium', `{
             width: 90%;
    }`)}
            
    h2{
       font-size: 2rem;

       @media screen and (max-width: 1023px){
                font-size: 1.6rem;
                margin: .3rem;
            }       
    }

`;

export const ExperiencesWrapper = styled.div`
    width: 60%;
    margin: 5rem;

    ${BreakPointsDown('large', `{
            width: 92%;
             margin: 2rem auto;
    }`)}
`;

export const Experience = styled.div`
    padding: 1rem;
    margin: 3rem auto;
    border-radius: 1.5rem;
    box-shadow: inset  -0.625rem -0.625rem 0.825rem  #1b1b1b, inset 0.625rem 0.625rem 0.825rem #1b1b1b;
    box-shadow: -0.625rem -0.625rem 0.825rem #1b1b1b, 0.625rem 0.625rem 0.825rem #1b1b1b;

    
    
    .person-info{
        display: flex;
        height: 15vh;
    }

    .experience{
        width: 75%;
        margin: 0 auto;
        margin-left: 6.5rem;
        margin-top: -2rem ;

        @media screen and (max-width: 1024px){
                width: 90%;
                margin: 0 auto;
                margin-top: -2rem ;
            }

        ${BreakPointsDown('tablet', `{
            margin-top: -5rem;
        }`)}
        ${BreakPointsDown('medium', `{
            margin-top: -1rem;
        }`)}
    }
`;

export const UserInfo = styled.div`
    width: 75%;
    margin: 0 auto;

    @media screen and (max-width: 1023px){
                width: 80%;
                margin-left: 1rem;
            }    

    .username{
        margin: .5rem 0;
    }

    .languages{
        font-size: .825rem;
        opacity: .6;
    }
`;

export const UserImg = styled.div`
     width: 8vw;
    border-radius: 1rem;
    position: relative;
    top: -35%;

    ${BreakPointsDown('medium', `{
        width: 15vw;
        height :  20vh;
        border-radius: 1rem;
        position: relative;
        top: -20%;
    }`)
    }

    ${BreakPointsDown('tablet', `{
            width: 9vw;
            top: -20%;
    }`)}

    ${BreakPointsDown('small', `{
            width: 20vw;
            height :  25vh;
            border-radius: 1rem;
            position: relative;
            top: -10%;
    }`)}
`;


export const SwapImage = styled(Image)`
    width: 10vw;
    height :  15vh;
    border-radius: 1rem; 
`;