import React from 'react'
import TextError from './TextError'
import { Field, ErrorMessage } from 'formik'
import styles from './Styles.module.css'

function Select(props) {

    const { name, label, options, ...rest } = props; 

    return (
        <div className={styles.box}>
            <Field as='select' id={name} name={name} {...rest}>
                {
                    options.map(option => {
                        return <option key={option.value} value={option.value}>{option.key}</option>
                    })
                }
            </Field>
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Select