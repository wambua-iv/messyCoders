import styled from 'styled-components'

export const NavWrapper = styled.nav`
    width: 100%;
    height: 4rem;
    margin: 0;
    color: #fff;
    position: fixed;
    z-index: 100;

    .content{
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;

        .content-main{
            width: 70%;
            display: flex;
        }
    }
`;

export const  Logo = styled.div`
    width: 35%;
    margin: .5rem;
    font-size: 2rem;

    p{
        margin: 0;
    }
`;

export const Links = styled.div`
    width: 30%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
        text-decoration: none;
        font-size: 1.25rem;
        position: relative;

        &:hover{
                transition: color 300ms ease-in-out;
                
                &::before{
                    opacity: 1;
                }
            }

            &::before{
                content : "";
                position: absolute;
                width: 100%;
                display: block;
                height: 5px;
                left: 0;
                right: 0;
                bottom: -20px;
                background-color: #9995 ;
                opacity: 0;
                transition: opacity 300ms ease-in-out;
            }
    }
`;

export const Blog = styled.div`
    height: 2.6rem;
    border: 1px solid #fff;
    margin-top: .5rem;
    padding: .5rem 2rem;
    border-radius:  3rem  3rem 0 3rem;
    font-size: 1.25rem;
    position: relative;
    background-color: #e67906 ;

    &:hover{
        cursor: pointer;
    }
`;