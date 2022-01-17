import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-top: -1rem;

    h2{
       font-size: 2rem;
    }

`;

export const ExperiencesWrapper = styled.div`
    width: 80%;
    margin: 4rem auto;
`;

export const Experience = styled.div`
    padding: 1rem;
    margin: 3rem auto;
    border-radius: 1.5rem;
    display: flex;
    box-shadow: inset  -0.625rem -0.625rem 0.825rem  #1b1b1b, inset 0.625rem 0.625rem 0.825rem #0c090a;
    box-shadow: -0.625rem -0.625rem 0.825rem #1b1b1b, 0.625rem 0.625rem 0.825rem #1b1b1b;

    .experience{
        width: 70%;
        margin: 0 auto;
    }
`;

export const UserInfo = styled.div`
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    .username{
        margin: .5rem 0;
    }

    .languages{
        font-size: .825rem;
        opacity: .6;
    }
`;

export const UserImg = styled.div`
    width: 120px;
    height :  160px;

    img{
        width: 100%;
        height: 100%;
        border-radius: 1.5rem;
        position: relative;
        top: -25%;
    }
`;
