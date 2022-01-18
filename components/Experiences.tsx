import React from 'react'
import { Experience, UserImg, UserInfo } from '../styles/HomeSection.modules';

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
                    <img src="/user.jpg" alt='user image'/>
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