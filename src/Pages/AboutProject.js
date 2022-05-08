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
                        <li>
                        This is our Project Reach out and Basically, this will resolve the problem for Ngo like There is no other website which give any platform to ngo for there work.
                        </li>
                        <li>
                        And our project related to this problem in our website ngo can post there work and Many Ngo they can Collaborate with each other.
                        </li>
                        <li>
                        They will also post Something about there Upcoming event.Ex:- There is an Event and they required Volunteer, So they post in our Website Regarding this Problem, They easily get the many Volunteer for there Event.
                        </li>
                        <li>
                        Through this many People/Ngo They can interact With each other. Now you Will have one Question That Linked in do the same thing, so what we do different from there.
                        </li>
                        <li>
                        So, basically you need to know that Linked in Environment is around Professional work(towards it Industry),Many people use for there job referal and Our website Environment Only for Ngo work.Through this reach of ngo were also increase.
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutProject