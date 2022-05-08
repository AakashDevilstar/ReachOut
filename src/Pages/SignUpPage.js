import RegistrationForm from "../Form/RegistrationForm"
import styles from "./SignUpPage.module.css"
import SignUpPageCover from "../Assets/SignUpPageCover.png"

function SingUpPage() {
  return (
    <div className={styles.main}>
      <div className={styles.body}>

        <div className={styles.cover}>
          <h1>ReachOut</h1>
          <p>
            Sign Up today at the world's greatest platform that offers a stage to various NGOs out there. Join ReachOut 
            today and help make the earth a better place.
          </p>
          <img src={SignUpPageCover} alt="cover"></img>
        </div>

        <RegistrationForm />
        
      </div>
    </div>
  );
}

export default SingUpPage;
