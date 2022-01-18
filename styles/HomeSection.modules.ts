import styled from "styled-components";

export const HomeSectionWrapper = styled.div`
    width: 80%;
    margin: 0 auto;

    @media screen and (max-width: 1023px){
               width: 90%;
                margin: .3rem auto;
            }     

    h2{
       font-size: 2rem;

       @media screen and (max-width: 1023px){
                font-size: 1.6rem;
                margin: .3rem;
            }       
    }

`;

export const ExperiencesWrapper = styled.div`
    width: 80%;
    margin: 5rem auto;
`;

export const Experience = styled.div`
    padding: 1rem;
    margin: 3rem auto;
    border-radius: 1.5rem;
    box-shadow: inset  -0.625rem -0.625rem 0.825rem  #1b1b1b, inset 0.625rem 0.625rem 0.825rem #0c090a;
    box-shadow: -0.625rem -0.625rem 0.825rem #1b1b1b, 0.625rem 0.625rem 0.825rem #1b1b1b;

    
    
    .person-info{
        display: flex;
    }

    .experience{
        width: 90%;
        margin: 0 auto;
    }
`;

export const UserInfo = styled.div`
    width: 75%;
    margin: 0 auto;

    @media screen and (max-width: 1023px){
                width: 38vw;
                margin-left: 2rem;
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
    width: 10vw;
    height :  15vh;

    @media screen and (max-width: 1024px){
                width: 15vw;
                height :  15vh;
            }   

    img{
        width: 100%;
        height: 100%;
        border-radius: 1rem;
        position: relative;
        top: -25%;
    }
`;
