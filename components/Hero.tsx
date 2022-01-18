import Link from "next/link"
import { Btn, ContentWrap, 
    HeroWrapper, 
    ImageArea, 
    ImageWrapper, 
    MobileImageArea, 
    MobileImageWrapper } from "../styles/Hero.module"

const Hero = () => {
    return (
        <HeroWrapper>

            <MobileImageArea>
                <div className='mobile-img-col-1'>
                    <MobileImageWrapper >
                        <img src='/dev06.jpg' />
                    </MobileImageWrapper>
                </div>
                <div className='mobile-img-col-2'>
                    <MobileImageWrapper >
                        <img src='/dev02.jpg' />
                    </MobileImageWrapper>
                    <MobileImageWrapper >
                        <img src='/dev01.jpg' />
                    </MobileImageWrapper>
                </div>
                <div className='mobile-img-col-3'>
                    <MobileImageWrapper >
                        <img src='/dev07.jpg' />
                    </MobileImageWrapper>
                </div>
            </MobileImageArea>

            <ContentWrap>
                <h2>Every Developer has an origin story.</h2>
                <p>At the start of our software development journey we all write messy code. Here are the ramblings, thoughts and experiences of developers.</p>
                <Btn>
                    <Link href='/auth'><span className='join'>Join Community</span></Link>
                    <span className='share'>Share Experience</span>
                </Btn>
            </ContentWrap>

            <ImageArea>
                <div className='img-col-1'>
                    <ImageWrapper >
                        <img src='/dev06.jpg' />
                    </ImageWrapper>
                    <ImageWrapper >
                        <img src='/dev01.jpg' />
                    </ImageWrapper>
                </div>
                <div className='img-col-2'>
                    <ImageWrapper >
                        <img src='/dev03.jpg' />
                    </ImageWrapper>
                    <ImageWrapper >
                        <img src='/dev04.jpg' />
                    </ImageWrapper>
                    <ImageWrapper >
                        <img src='/dev05.jpg' />
                    </ImageWrapper>
                </div>
                <div className='img-col-3'>
                    <ImageWrapper>
                        <img src='/dev02.jpg' />
                    </ImageWrapper>
                    <ImageWrapper>
                        <img src='/dev07.jpg' />
                    </ImageWrapper>
                </div>
            </ImageArea>

        </HeroWrapper>
    )
}

export default Hero
