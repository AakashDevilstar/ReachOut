import React from 'react'
import TextError from './TextError'
import { Field, ErrorMessage } from 'formik'

function TextArea(props) {
    const { name, label, ...rest} = props;

    return (
    <div className='error-control'>
        <label htmlFor={name}>{label}</label>
        <Field id={name} name={name} {...rest}/>
        <ErrorMessage name={name} component={TextError}/>
    </div>
    )
}

export default TextArea