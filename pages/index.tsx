import type { GetStaticProps, NextPage } from 'next';
import Hero from '../components/Hero';
import HomeSection from '../components/HomeSection';
import Navbar from '../components/Navbar';
import BlogData from '../Experiences.json';

interface Props{
  data : []
}

const Home: React.FC<Props> = ({data}) => {

  return (
    <>
		      <Hero />
          <HomeSection blogs={data}/>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () =>{
  return {
    props : {
      data : BlogData
    }
  }
}

export default Home;
