import style from './AboutUs.module.css'
import Header from '../Components/Header'

function AboutUs() {
    return (
        <>
            <Header />
            <div className={style.about}>
                <div className={style.about_heading}> About us</div>
                <div className={style.about_content}>
                    <ul>
                        <h6>Hello guys, Our team's name is Eloquent Pride and this is our first ever hackathon participation, Our team has 5 Member:-</h6>
                        <li>Amandeep Singh - CSE 2nd year, BPIT.</li>
                        <li>Aakash Raturi- CSE 2nd year, BPIT.</li>
                        <li>Pratham Sharma- IT 2nd year, BPIT.</li>
                        <li>Ramanpreet Singh- IT 2nd year, GTBIT.</li>
                        <li>Harshil Bhatia- CSE 2nd year, BPIT.</li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default AboutUs