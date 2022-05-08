import React from 'react'
import {Formik, Form} from 'formik'
import FormikControl from './FormikControl'

const initialValues = {
  email: '',
  description: '',
  select: ''
}

const validate = values => {
  const errors = {};

  if (!values.email) {
    errors.email = "Email Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid Email Format";
  }

  if(!values.description)
    errors.description = "Description Required";

  if(!values.select)
    errors.select = "Select value Required";

  return errors;
}

const onSubmit = values => {
  console.log('Values', values);
}

const dropdownOptions = [
  { key: 'Choose an Option', value: '' },
  { key: 'Option 1', value: 'Option 1' },
  { key: 'Option 2', value: 'Option 2' },
  { key: 'Option 3', value: 'Option 3' },
]

function FormikContainer() {

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={onSubmit}
    >
      {
        formik => {
          return (
            <Form>
              <FormikControl control='input' type='email' label='Email' name='email'/>
              <FormikControl control='textarea' type='text' label='Description' name='description'/>
              <FormikControl control='select' label='Select' name='select' options={dropdownOptions}/>

              <button type='submit' disabled={!formik.isValid}>Submit</button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default FormikContainer;

// import React from 'react'
// import {Formik, Form} from 'formik'
// import FormikControl from './FormikControl'

// function FormikContainer() {

//   const initialValues = {}

//   const validate = values => {

//   }

//   const onSubmit = values => {
//     console.log('Values', values);
//   }

//   return (
//     <Formik
//       initialValues={initialValues}
//       validate={validate}
//       onSubmit={onSubmit}
//     >
//       {
//         formik => {
//           return (
//             <Form>

//               <button type='submit'>Submit</button>
//             </Form>
//           )
//         }
//       }
//     </Formik>
//   )
// }

// export default FormikContainer;