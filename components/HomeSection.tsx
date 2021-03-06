import { ExperiencesWrapper, HomeSectionWrapper } from "../styles/HomeSection.modules";
import Experiences from "./Experiences";

interface Props {
    blogs : []
}

const HomeSection: React.FC<Props> = ({blogs}) => {
    return (
        <HomeSectionWrapper>
            <h2>Ramblings & Experiences</h2>
            <ExperiencesWrapper>
                {blogs.map((blog, i) => <Experiences blog={blog } key={i}/>)}
            </ExperiencesWrapper>
        </HomeSectionWrapper>
    )
}

export default HomeSection;
 
