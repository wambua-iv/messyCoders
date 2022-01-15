import Link from "next/link"
import { Blog, Links, Logo, NavWrapper } from "../styles/Navbar.module"


const Navbar = () => {
    return (
        <NavWrapper>
            <div className='content'>
                <div className="content-main">
                <Logo>
                    <p>Messy Coders </p>
                </Logo>
                <Links>
                    <Link href='/' >Home</Link>
                    <Link href='/' >About</Link>
                </Links>
                </div>
                <Link href='/blogs' ><Blog>Blog</Blog></Link>
            </div>
        </NavWrapper>
    )
}

export default Navbar
