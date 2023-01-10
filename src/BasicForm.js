import * as React from 'react';
import { Formik, useFormik, validateYupSchema } from 'formik';
import * as yup from 'yup'; 

const movieValidationsSchema=yup.object({
  email:yup.string().min(8,"at list 8 chareters")
  .required("a cool email is in need"),
  password:yup.string().min(4,"at list 4 chareters")
  .required("a cool email is in need")
})

export function BasicForm() {
const {formik,values,handleBlur,handleChange,touched,errors,handleSubmit}=useFormik({
    initialValues:{
email:"", 
password:""

    },
    validationSchema:movieValidationsSchema,
    onSubmit:(values)=>{
      console.log("form values",values)
    }
  })
  return (
    <form onSubmit={handleSubmit}>
      <h1>BasicForm</h1>
      <input
       value={formik.values.email}
       type="email"
        placeholder='Email'
        name='email'
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
    {formik.touched.email && formik.errors.email? formik.errors.email:null}
      <input  
       value={formik.values.password} 
       type="*"
       name='password'
       placeholder='Password'
       onChange={formik.handleChange}
       onBlur={formik.handleBlur}
       />
      {formik.touched.password && formik.errors.password? formik.errors.password:null}
      <pre>{JSON.stringify(formik.errors)}</pre>

      <pre>{JSON.stringify(formik.touched)}</pre>
       
      <button type='submit' >Sumbit</button>
    </form>
  );
}
