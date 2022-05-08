import React from 'react'
import styles from './LoginFormControl.module.css'
import LoginForm from '../Form/LoginForm'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

function LoginFormControl() {

  return (
    <div className = {styles.box}>
        <LoginForm />
        <hr />

        <div className={styles.signUp}>
        <Link to = {'/signup'} style={{ textDecoration: 'none' }}><Button variant="outlined">Signup</Button></Link>
        </div>
    </div>
  )
}

export default LoginFormControl