import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 90%;
    height: 90vh;
    margin: 0 auto;
   

        @media screen and (min-width: 1024px){
            display: flex;
            justify-content: space-between;
        }
`;

export const ContentWrap = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    color: #fff;  
    margin-top: 15rem;
    margin-left: 3rem;
    align-items: center;

        @media screen and (max-width: 1023px){
                width: 90%;
                margin: 0 auto;
                margin-top: 9rem ;
            }

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
            font-size: 1rem;
            }
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

    .img-col-1{
        width: 75%;
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
        position: relative;
        top: 15%;
    }
`;

export const ImageWrapper = styled.div`
    width: 90%;
    height: 280px;
    position: relative;
    margin: .5rem auto;
   

    img{
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        margin: .5rem auto;
        object-fit: cover;
    }
`;

export const Btn = styled.div`
    width: 115%;
    height: 2.6rem;
    padding: .5rem;
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
    margin: auto;
    width: 100%;
    height: 40vh;
    display: flex;

    @media screen and (min-width: 1023px){
            display: none;
            }

        .mobile-img-col-1{
            width: 60%;
            position: relative;
            bottom: -20%;
        }

        .mobile-img-col-2{
            width: 70%;
            height: 70vh;
            position: relative;
            top: -22%;
        }

    .mobile-img-col-3{
        width: 60%;
        position: relative;
        top: 15%;
    }
`;

export const MobileImageWrapper = styled.div`
    width: 90%;
    height: 30vh;
    margin: .5rem auto;
   

    img{
        width: 100%;
        height: 100%;
        border-radius: 2rem;
        margin: .5rem auto;
        object-fit: cover;
    }
`;
