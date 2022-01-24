
import Image from "next/image";
import styled from "styled-components";
import { BreakPointsDown, BreakPointsUp } from "./Mixins";

export const HeroWrapper = styled.div`
    width: 98%;
    height: 80vh;
    margin: 0 auto;

        ${BreakPointsUp('large', `{
            display: flex;
            height: 88vh;
            justify-content: space-between;            
        }`)}

        ${BreakPointsUp('medium',`{
            height: 85vh;
        }`)}
`;

export const ContentWrap = styled.div`
    width: 45%;
    flex-direction: column;
    color: #fff;  
    margin-top: 11rem;
    margin-left: 3rem;
    align-items: center;
    position: relative;

        ${BreakPointsDown('large', `{
             width: 90%;
             margin: 3rem auto;
        }`)}

        ${BreakPointsDown('medium', `{
             width: 90%;
             margin: 1rem auto;
        }`)}


        h2{
        font-size: 2.5rem;

        @media screen and (max-width: 1023px){
                font-size: 2rem;
                margin: 0;
            }
        }

        p{
            font-size: 1.25rem;

            @media screen and (max-width: 1023px){
                font-size: 1.25rem;
            }
            ${BreakPointsDown('small', `{
                font-size: 1rem;
            }`)}
        }
`;

export const ImageArea = styled.div`
    width: 45%;
    height: 80vh;
    display: flex;
    margin-left: 5rem;
    
    @media screen and (max-width: 1024px){
            display: none;
            }

    ${BreakPointsDown('medium', `{
        display: none;
    }`)}

    .img-col-1{
        width: 55%;
        position: relative;
        top: 10%;
       
    }

    .img-col-2{
        width: 60%;
        height: 70vh;
        position: relative;
        top: -8%;

    }

    .img-col-3{
        width: 55%;
        position: relative;
        top: 15%;
    }
`;

export const ImageWrapper = styled.div`
    width: 96%;
    position: relative;
    margin: .5rem auto;
`;

export const Btn = styled.div`
    width: 115%;
    height: 2.6rem;
    padding: .5rem;
    margin-top: 1rem;
    font-size: 1.25rem;
    position: relative;
    text-align: center;

        @media screen and (max-width: 1023px){
                width: 115%;
                font-size: 1rem;
                text-align: center;
            }

    .join{
        border-radius: 0 3rem  3rem 3rem;
        padding: .5rem 1rem;
        background-color: blue;
    }

    .share{
        border-radius:  3rem  0 3rem  3rem;
        padding: .5rem 1rem;
        background-color: white;
        color: #000;
    }

    &:hover{
        cursor: pointer;
    }
`;

export const MobileImageArea = styled.div`
    width: 100%;
    height: 60%;
    display: flex;

    ${BreakPointsUp('small', `{
        display: none;
    }`)}

        .mobile-img-col-1{
            width: 60%;
            position: relative;
            top: 24%;
        }

        .mobile-img-col-2{
            width: 60%;
            position: relative;
            top: -8%;
        }

    .mobile-img-col-3{
        width: 60%;
        position: relative;
        top: 18%;
    }
`;

export const MobileImageWrapper = styled.div`
    width: 96%;
    position: relative;
    margin: .5rem auto;
`;

export const SwapImage = styled(Image)`
        width: 20% !important;
        border-radius: 2rem;
        object-fit: cover;
`;

export const TabletImageArea = styled.div`
    width: 90%;
    height: 68%;
    margin: auto;
    display: flex;

    /* @media screen and (min-width: 720px){
                height: 80vh;
            } */

    ${BreakPointsDown('small', `{
        display: none;
    }`)}

    ${BreakPointsUp('large', `{
        display: none;
    }`)}

        .mobile-img-col-1{
            width: 60%;
            position: relative;
            bottom: -20%;
        }

        .mobile-img-col-2{
            width: 60%;
            position: relative;
            top: -15%;

            ${BreakPointsDown('medium', `{
                top: -4%;
            }`)}
        }

    .mobile-img-col-3{
        width: 60%;
        position: relative;
        top: 15%;
    }
    
`

export const TabletImageWrapper = styled.div`
    width: 96%;
    position: relative;
    margin: .5rem auto;
`