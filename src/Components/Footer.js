import style from './Footer.module.css'
import { FiPhoneCall } from 'react-icons/fi'
import { AiOutlineMail} from 'react-icons/ai'
import {NavLink} from 'react-router-dom'

function Footer() {
  return (
      <footer className={style.footer_distributed}>

        <div style={{color: '#606060', textAlign: 'center'}} className={style.footer_left}>

          <h5>ReachOut</h5>

          <div className={style.footer_links}>
            <NavLink style = {{color: "Gray"}} to = {'/aboutUs'}>About Us</NavLink> 
            <NavLink style = {{color: "Gray"}} to = {'/aboutProject'}>About Project</NavLink> 
          </div>

          <p className={style.footer_company_name}>ReachOut © CopyRight Reserved 2022</p>

        </div>

        <div className={style.footer_center}>
          <span><FiPhoneCall /></span>
          <p>+91-9625992804</p>
        </div>

        <div className={style.footer_center}>
          <span><AiOutlineMail /></span>
          <p>ama3149n@gmail.com</p>
        </div>
    </footer>
  )
}

export default Footer