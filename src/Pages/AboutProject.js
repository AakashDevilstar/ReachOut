import style from './AboutProject.module.css'
import Header from '../Components/Header'

function AboutProject() {
    return (
        <>
            <Header />
            <div className={style.main}>
                <div className={style.main_heading}> About Project</div>
                <div className={style.abproject_content}>
                    <ul>
                        <li><h6>RachOut</h6></li>

                        <li>Most NGOs do not have a streamlined platform to interact with those in need and those who are willing to help.</li>

                        <li>Our creation, ReachOut allows NGOs to create and deploy their own portals for effective management and help them reach more people.</li>

                        <li>Any NGO can sign up at ReachOut with few simple steps and start taking the benefits from the services.</li>

                        <li>One can post about the upcoming events, ask for volunteers, ask for help and they say imagination has no limits.</li>

                        <li>ReachOut is like facebook of the social world and linkedIn of the corporate world.</li>

                        <li><h6>Our Inspiration</h6></li>
                        
                        <li>Most of our college life till now, we have spent at our home. When our college started 3 of our team members joinded Drishti, our college's rotaract club. People at drishti do all sort of social work but there is always need of more resources and volunteers.</li>

                        <li>We went through the problem statements of the hackathon and realised what better opportunity we will get to create something to address the problem.</li>

                        <li>Though our work is a rough idea of what we can make yet we tried to do the best out of our skills.</li>

                        <li><h6>Challenges while making the project</h6></li>

                        <li>The biggest challenge was to believe we can do this.</li>

                        <li>We all started learning react and working with it not more than 2 months ago.</li>

                        <li>Structuring the website and creating what we created, getting stuck with small problems and errors involoving props and hooks and then solving them gave us alot of confidence and an overall enriching experience.</li>

                        <li><h6>Future of the Project</h6></li>

                        <li>We wanted to create this for individuals as well, along with NGOs or other type of groups which we realised later and a bit late. The idea was to create a web app like fiver where we have 2 different login modes (like fiver, one for the Freelancers and second for people who hire) one for NGO and the other for the volunteers.</li>

                        <li>Currently the website is not fully dynamic in terms of, if someone likes other NGO's post or comment at it, those changes won't reflect in overall database.</li>

                        <li>We have a donate option and that doesn't works.</li>

                        <li>Being able to chat with different NGOs is something which would be a very good feature.</li>

                        <li>These are somethings we would have wanted to add to our work and hope to learn these things in future.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutProject