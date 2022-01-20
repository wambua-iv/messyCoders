import styled from "styled-components";
import { BreakPointsDown, BreakPointsUp } from "./Mixins";

export const AuthWrapper = styled.div`
    width: 100vw;
    margin: 0 auto;
    position: absolute;
    color: #fff;

    .form-wrapper{
        width: 46vw;
        margin: 6rem auto;
        border: 1px solid #9993;
        border-radius: 1rem;
        box-shadow: inset  -0.625rem -0.625rem 0.825rem  #1b1b1b, inset 0.625rem 0.625rem 0.825rem #0c090a;
        box-shadow: -0.625rem -0.625rem 0.825rem #1b1b1b, 0.625rem 0.625rem 0.825rem #1b1b1b;

        ${BreakPointsDown('medium', 
                            `{  width: 80%;}`
                            )}

    input{
        padding-top: 1rem;
        padding-bottom: .5rem;
        border-top: none;
        border-left: none;
        border-right: none;
        position: relative;
        background-color: transparent;
        color: #fff;
        margin: 1rem auto;
        
        &:focus {
            outline: none;
            background-color: #1b1b1b ;
        }
    }

    form{
        margin: 1rem;
    }
}

    .sign-title {
        text-align: center;
        font-size: 1.25rem;
        font-weight: 500;
    }

    #full-length{
        width: 100%;
        display: block;

        ${BreakPointsDown('medium', `{
                        margin : 0 auto;}
            `)}
    }

    .small{
        font-size: .825rem;
        margin-top: 1rem;
    }
`;

export const LoginWrapper = styled.div`
    flex-direction: column;
    line-height: 1.5;
    margin: 4rem auto;
    width: 80%;
    height: 80%;
`;

export const SignUpWrapper = styled.div`
    flex-direction: column;
    line-height: 1.5;
    width: 80%;
    height: 80%;
    margin: 2rem auto;

    .user-names,
    .passwords{
        width: 100%;

        input{
            width: 48%;
        }

        ${BreakPointsDown('medium', `
                { display: block;
                    input{
                        width: 100%;
                        margin : 0 auto;
                    }
                }
            `)}
    }
`;