import Link from "next/link"
import { useRouter } from "next/router"
import { Blog, Links, Logo, NavWrapper } from "../styles/Navbar.module"


const Navbar = () => {
    const {route} = useRouter()
    const user = false
    console.log(route)
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
                <Link href='/blogs'>{route == '/blogs' ? <div>{user ? 'messy' : <span></span>}</div> : <Blog>Blog</Blog> }</Link>
            </div>
        </NavWrapper>
    )
}

export default Navbar
