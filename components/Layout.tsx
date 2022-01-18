import Head from 'next/head'
import Footer from "./Footer"
import { LayoutWrapper } from "../styles/Layout.module"
import Navbar from './Navbar'


interface Props {
    children: any,
    user: any
}

const Layout: React.FC<Props> = ({children, user}) => {
    return (
        <>
        <Head>
        <title>Messy Coders</title>
        <meta name="keywords" content="software development, 
			programming,
			junior developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <LayoutWrapper>
            <Navbar user={user} />
            <main>
                {children}
            </main>
        </LayoutWrapper>
        <Footer />
        </>
    )
}

export default Layout
