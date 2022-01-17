import styled from "styled-components";

export const HeroWrapper = styled.div`
    width: 90%;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

export const ContentWrap = styled.div`
    width: 45%;
    display: flex;
    flex-direction: column;
    color: #fff;  
    margin-top: 15rem;
    margin-left: 3rem;
    align-items: center;

    h2{
       font-size: 2.5rem;
    }

    p{
        font-size: 1.25rem;
    }
`;

export const ImageArea = styled.div`
    width: 45%;
    height: 90vh;
    display: flex;
    margin-left: 5rem;

    .img-col-1{
        width: 75%;
        position: relative;
        top: 10%
    }

    .img-col-2{
        width: 60%;
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
    height: 2.6rem;
    padding: .5rem 2rem;
    font-size: 1.25rem;
    position: relative;

    .join{
        margin: 1rem;
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
