import React from 'react'
import FormikControl from './FormikControl'
import { Formik, Form } from 'formik'
import styles from './RegistrationForm.module.css'
import Button from '@mui/material/Button'
import { useNavigate } from 'react-router-dom'

const initialValues = {
    nameOfNGO: '',
    country: '',
    state: '',
    city: '',
    address: '',
    email: '',
    password: '',
    confirmPassword: '',
    number: ''
}

const validate = values => {

    const errors = {}

    if(!values.nameOfNGO) {
        errors.nameOfNGO = "Name required";
    }

    if(!values.country) {
        errors.country = "Select a country";
    }

    if(!values.state) {
        errors.state = "Select a state";
    }

    if(!values.city) {
        errors.city = "City required";
    }

    if(!values.address) {
        errors.address = "Address required";
    }

    if(!values.email) {
        errors.email = "Email required";
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = "Invalid Email Format";
    }  

    if(!values.password) {
        errors.password = "Password required";
    }

    if(!values.confirmPassword) {
        errors.confirmPassword = "Password required";
    } else if(values.password !== values.confirmPassword) {
        errors.confirmPassword = "Password didn't match"
    }

    if(!values.number) {
        errors.confirmPassword = "Phone number required";
    } else if(values.number.trim().length !== 10) {
        errors.confirmPassword = "Enter valid phone number"
    }

    return errors;
}

const countries = [
    { key: 'Select a Country', value: '' },
    { key: 'India', value: 'India' }
]

const states = [
    { key: 'Select a State', value: ''},
    { key: 'Delhi', value: 'Delhi'},
    { key: 'Punjab', value: 'Punjab'},
    { key: 'Uttar Pradesh', value: 'Uttar Pradesh'},
    { key: 'Haryana', value: 'Haryana'},
    { key: 'Andhra Pradesh', value: 'Andhra Pradesh'},
    { key: 'Arunachal Pradesh', value: 'Arunachal Pradesh'},
    { key: 'Assam', value: 'Assam'},
    { key: 'Bihar', value: 'Bihar'},
    { key: 'Chhattisgarh', value: 'Chhattisgarh'},
    { key: 'Goa', value: 'Goa'},
    { key: 'Gujarat', value: 'Gujarat'},
    { key: 'Himachal Pradesh', value: 'Himachal Pradesh'},
    { key: 'Jammu and Kashmir', value: 'Jammu and Kashmir'},
    { key: 'Jharkhand', value: 'Jharkhand'},
    { key: 'Karnataka', value: 'Karnataka'},
    { key: 'Kerala', value: 'Kerala'},
    { key: 'Madhya Pradesh', value: 'Madhya Pradesh'},
    { key: 'Maharashtra', value: 'Maharashtra'},
    { key: 'Manipur', value: 'Manipur'},
    { key: 'Meghalaya', value: 'Meghalaya'},
    { key: 'Mizoram', value: 'Mizoram'},
    { key: 'Nagaland', value:'Nagaland'},
    { key: 'Rajasthan', value: 'Rajasthan'},
    { key: 'Odisha', value: 'Odisha'},
    { key: 'Sikkim', value: 'Sikkim'},
    { key: 'Tamil Nadu', value: 'Tamil Nadu'},
    { key: 'Telangana', value: 'Telangana'},
    { key: 'Tripura', value: 'Tripura'},
    { key: 'Uttarakhand', value: 'Uttarakhand'}, 
    { key: 'West Bengal', value: 'West Bengal'}, 
  ]

function RegistrationForm() {

    const navigate = useNavigate();

    const onSubmit = (values, {resetForm}) => {
        
        const obj = {...values};

        obj.userId = Math.floor(Math.random() * 82929822);
    
        fetch('https://reachout-9b1e7-default-rtdb.firebaseio.com/ReachOut.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(obj),
        })
        .then(response => {
            if(!response.ok) {
                throw new Error(response.statusText);
            }
            else {
                navigate('/');
            }
        })
    }
  return (
    <div className={styles.form}>
        <Formik initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
            {
                formik => {
                    return (
                        <Form method='POST'>
                            <FormikControl placeholder="Name of NGO" control='input' label='Name of NGO' name='nameOfNGO'/>
                            <FormikControl control='select' label='Country' name='country' options={countries}/>
                            <FormikControl control='select' label='State' name='state' options={states}/>
                            <FormikControl placeholder="City" control='input' label='City' name='city'/>
                            <FormikControl placeholder="Address" control='input' label='Address' name='address'/>
                            <FormikControl placeholder="Email" control='input' type='email' label='Email' name='email'/>
                            <FormikControl placeholder="Password" control='input' type='password' label='Password' name='password'/>
                            <FormikControl placeholder="Confirm Password" control='input' type='password' label='Confirm Password' name='confirmPassword'/>
                            <FormikControl placeholder="Contact" control='input' label='Contact Number' name='number'/>

                            <div className={styles.button}>
                            <Button variant="contained" type='submit' disabled={!formik.isValid}>Sign Up</Button>
                            </div>
                        </Form>
                    )
                }
            }
        </Formik>
    </div>
  )
}

export default RegistrationForm