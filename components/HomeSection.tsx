import { ExperiencesWrapper, HomeSectionWrapper } from "../styles/HomeSection.modules";
import Experiences from "./Experiences";

interface Props {
    blogs : []
}

const HomeSection: React.FC<Props> = ({blogs}) => {
    return (
        <HomeSectionWrapper>
            <h2>Shared Experiences</h2>
            <ExperiencesWrapper>
                {blogs.map(blog => <Experiences blog={blog }/>)}
            </ExperiencesWrapper>
        </HomeSectionWrapper>
    )
}

export default HomeSection;

