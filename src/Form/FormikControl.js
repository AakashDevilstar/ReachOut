import React from 'react'
import Input from './Fields/Input'
import TextArea from './Fields/TextArea'
import Select from './Fields/Select'

function FormikControl(props) {
  const { control, ...rest } = props;
  switch(control) {
      case 'input':
          return <Input {...rest}/>
      case 'textarea':
          return <TextArea as='textarea' {...rest}/>
      case 'select':
          return <Select {...rest}/>
      case 'radio':
      case 'checkbox':
      case 'date':
      default: return null      
  }
}

export default FormikControl