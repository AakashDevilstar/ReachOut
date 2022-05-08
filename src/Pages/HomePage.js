import LoginFormControl from "../Components/LoginFormControl"
import Feed from "./Feed"
import { useContext, useEffect } from 'react'
import AppContext from "../App/App-Context"
import styles from './HomePage.module.css'
import SignUpPageCover from "../Assets/LogInPageCover.jpg"

function HomePage() {

  const values = useContext(AppContext);

  useEffect(() => {
    const alreadyLoggedIn = localStorage.getItem('isLoggedIn');
    if(alreadyLoggedIn === '1') {
      const profile = localStorage.getItem('profile');
      values.logIn(JSON.parse(profile));
    }
  }, [])

  if(!values.isLoggedIn)
  return (
    <div className={styles.main}>
      <div className={styles.body}>

        <div className={styles.cover}>
          <h1>ReachOut</h1>
          <p>
            ReachOut is the greatest platform that offers NGOs to create and deploy their own portals for effective
            management and help them reach more people.
          </p>
          <img src={SignUpPageCover} alt="cover"></img>
        </div>

        <LoginFormControl />
        
      </div>
    </div>
  )
  else 
  return (
    <div>
        <Feed />
    </div>
  )
}

export default HomePage