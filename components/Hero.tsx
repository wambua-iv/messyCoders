import { Btn, ContentWrap, HeroWrapper, ImageArea, ImageWrapper } from "../styles/Hero.module"

const Hero = () => {
    return (
        <HeroWrapper>
            <ContentWrap>
                <h2>Every Developer has an origin story.</h2>
                <p>At the start of our software development journey we all write messy code. Here are the ramblings, thoughts and experiences of developers.</p>
                <Btn>
                    <span className='join'>Join Community</span>
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
