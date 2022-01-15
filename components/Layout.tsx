import Head from 'next/head'
import Footer from "./Footer"
import Navbar from "./Navbar"
import { LayoutWrapper } from "../styles/Layout.module"


interface Props {
    children: any
}

const Layout: React.FC<Props> = ({children}) => {
    return (
        <>
        <Head>
        <title>Messy Coders</title>
        <meta name="keywords" content="software development, 
			programming,
			junior developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <Navbar />
        <LayoutWrapper>
            <main>
                {children}
            </main>
        </LayoutWrapper>
        <Footer />
        </>
    )
}

export default Layout
