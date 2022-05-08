import React from 'react'
import {Field, ErrorMessage} from 'formik'
import TextError from './TextError'
import styles from './Styles.module.css'

function Input(props) {
    const {label, name, ...rest} = props;

    return (
        <div className={styles.box}>
            {/* <label htmlFor={name}>{label}</label> */}
            <Field id={name} name={name} {...rest}/>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Input