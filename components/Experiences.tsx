import React from 'react'
import { Experience, SwapImage, UserImg, UserInfo } from '../styles/HomeSection.modules';

interface Props {
    blog: {
        username: string
        employmentStatus: string
        languages: string[],
        experience: string
    }
}

const Experiences: React.FC<Props> = ({ blog }) => {
    return (
        <Experience key={blog.username}>
            <div className='person-info'>
                <UserImg>
                    <SwapImage src="/user.jpg" alt='user image' width={120} height={160} quality={100}/>
                </UserImg>
                <UserInfo>
                    <div>
                        <p className='username'>{blog.username}</p>
                        <div className='languages'>{blog.languages}</div>
                    </div>
                    <hr />
                </UserInfo>
            </div>
            <div className="experience">
                {blog.experience}
            </div>
        </Experience>
    )
}

export default Experiences;