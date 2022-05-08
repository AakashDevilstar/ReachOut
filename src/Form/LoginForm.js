import React from 'react'
import FormikControl from './FormikControl'
import { Formik, Form } from 'formik'
import { useContext, useState } from 'react'
import AppContext from "../App/App-Context"
import Button from '@mui/material/Button'
import style from './LoginForm.module.css'

const initialValues = {
    email: '',
    password: ''
}

const validate = values => {

    const errors = {}

    if(!values.email) {
        errors.email = "Email required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid Email Format";
    }  

    if(!values.password) {
        errors.password = "Password required";
    }

    return errors;
}


function LoginForm(props) {
    
    const value = useContext(AppContext);

    const [emailPasswordValid, setEmailPasswordValid] = useState(false);
    
    const onSubmit = values => {
    
        const url = `https://reachout-9b1e7-default-rtdb.firebaseio.com/ReachOut.json?orderBy="email"&equalTo="${values.email}"`;
    
        fetch(url)
        .then(response => response.json())
        .then((data) => {

            let password = null, profile = null;
            for(let obj in data) {
                password = data[obj].password;
                profile = data[obj];
            }
            if(password !== values.password || profile === null) {
                setEmailPasswordValid(true);
            } else {
                localStorage.setItem('isLoggedIn', '1');
                localStorage.setItem('profile',JSON.stringify(profile));
                value.logIn(profile);
            }
        })
    }

    return (
    <div>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form>
                            <FormikControl control='input' type='email' placeholder='Email' label='Email' name='email'/>
                            <FormikControl control='input' type='password' placeholder='Password' label='Password' name='password'/>
                            
                            <Button className = {style.button} fullWidth={true} variant="contained" type='submit' disabled={!formik.isValid}>Log In</Button>

                            {emailPasswordValid && <p style={{marginTop: '1rem', textAlign: 'center', color: 'Red'}}>Email or Password is wrong</p>}

                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default LoginForm

