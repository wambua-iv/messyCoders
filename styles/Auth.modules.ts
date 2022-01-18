import styled from "styled-components";

// @mixin shadow {
//     box-shadow : -.625rem -.625rem .825rem #fff,  .625rem .625rem .825rem #0004
// }
// @mixin shadow-inset {
//     box-shadow : inset -.425rem -.425rem .525rem #fff, inset .425rem .425rem .525rem #0004
// }

export const AuthWrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
    position: absolute;
    color: #fff;

    .form-wrapper{
        width: 35vw;
        height: 65vh;
        margin: 6rem auto;
        border: 1px solid #9993;
        border-radius: 1rem;
        box-shadow: inset  -0.625rem -0.625rem 0.825rem  #1b1b1b, inset 0.625rem 0.625rem 0.825rem #0c090a;
        box-shadow: -0.625rem -0.625rem 0.825rem #1b1b1b, 0.625rem 0.625rem 0.825rem #1b1b1b;

            @media screen and (max-width: 769px){
                width: 80vw;
                height: 65vh;
            }
    }

    input{
        padding-top: 1rem;
        padding-bottom: .5rem;
        border-top: none;
        border-left: none;
        border-right: none;
        position: relative;
        background-color: transparent;
        color: #fff;
        
        &:focus {
            outline: none;
            background-color: #1b1b1b ;
        }
    }

    form{
        margin: 1rem;
    }

    .sign-title {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
    }

    #full-length{
        width: 100%;
        margin: 0 auto;
        display: block;
    }

    .small{
        font-size: .825rem;
        margin-top: 1rem;
    }
`;

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    line-height: 1.5;
    margin: 4rem auto;
    width: 80%;
    height: 80%;
`;

export const SignUpWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    line-height: 1.5;
    width: 80%;
    height: 80%;
    margin: 2rem auto;

    .user-names,
    .passwords{
        width: 100%;
        display: flex;
        justify-content: space-between;

        input{
            width: 48%;
        }

        @media screen and (max-width: 976px){
            display: block;

            input{
                width: 100%;
            }
        }
    }
`;