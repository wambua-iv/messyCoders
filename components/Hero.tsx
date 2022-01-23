import Link from "next/link"
import { Btn, ContentWrap, 
    HeroWrapper, 
    ImageArea, 
    ImageWrapper, 
    MobileImageArea, 
    MobileImageWrapper, 
    SwapImage,
    TabletImageArea,
    TabletImageWrapper} from "../styles/Hero.module"

const Hero = () => {
    return (
        <HeroWrapper>

            <MobileImageArea>
                <div className='mobile-img-col-1'>
                    <MobileImageWrapper >
                        <SwapImage src='/dev06.jpg' alt="person with colored background" width={145} height={230} quality={100}/>
                    </MobileImageWrapper>
                </div>
                <div className='mobile-img-col-2'>
                    <MobileImageWrapper >
                        <SwapImage src='/dev02.jpg' alt="person with colored background" width={130} height={220} quality={100}/>
                    </MobileImageWrapper>
                    <MobileImageWrapper >
                        <SwapImage src='/dev01.jpg' alt="person with colored background" width={130} height={220} quality={100}/>
                    </MobileImageWrapper>
                </div>
                <div className='mobile-img-col-3'>
                    <MobileImageWrapper >
                        <SwapImage src='/dev07.jpg'  alt="person with colored background" width={145} height={230} quality={100}/>
                    </MobileImageWrapper>
                </div>
            </MobileImageArea>

            <TabletImageArea>
                <div className='mobile-img-col-1'>
                    <TabletImageWrapper >
                        <SwapImage src='/dev06.jpg' alt="person with colored background" width={230} height={310} quality={100}/>
                    </TabletImageWrapper>
                </div>
                <div className='mobile-img-col-2'>
                    <TabletImageWrapper >
                        <SwapImage src='/dev02.jpg' alt="person with colored background" width={230} height={310} quality={100}/>
                    </TabletImageWrapper>
                    <TabletImageWrapper >
                        <SwapImage src='/dev01.jpg' alt="person with colored background" width={230} height={310} quality={100}/>
                    </TabletImageWrapper>
                </div>
                <div className='mobile-img-col-3'>
                    <TabletImageWrapper >
                        <SwapImage src='/dev07.jpg'  alt="person with colored background" width={230} height={300} quality={100}/>
                    </TabletImageWrapper>
                </div>
            </TabletImageArea>

            <ContentWrap className="flex">
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
                        <SwapImage src='/dev06.jpg'  alt="person with colored background" width={180} height={280}/>
                    </ImageWrapper>
                    <ImageWrapper >
                        <SwapImage src='/dev01.jpg' alt="person with colored background" width={180} height={280}/>
                    </ImageWrapper>
                </div>
                <div className='img-col-2'>
                    <ImageWrapper >
                        <SwapImage src='/dev03.jpg' alt="person with colored background" width={180} height={280}/>
                    </ImageWrapper>
                    <ImageWrapper >
                        <SwapImage src='/dev04.jpg' alt="person with colored background" width={180} height={280} />
                    </ImageWrapper>
                    <ImageWrapper >
                        <SwapImage src='/dev05.jpg' alt="person with colored background" width={180} height={280} />
                    </ImageWrapper>
                </div>
                <div className='img-col-3'>
                    <ImageWrapper>
                        <SwapImage src='/dev02.jpg' alt="person with colored background" width={180} height={280} />
                    </ImageWrapper>
                    <ImageWrapper>
                        <SwapImage src='/dev07.jpg' alt="person with colored background" width={180} height={280} />
                    </ImageWrapper>
                </div>
            </ImageArea>

        </HeroWrapper>
    )
}

export default Hero
