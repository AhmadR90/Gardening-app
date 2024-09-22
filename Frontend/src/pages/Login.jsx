// import React from 'react'
// import {Formik,Form,Field,ErrorMessage} from "formik"
// import * as yup from "yup"
// import { useNavigate } from 'react-router'
// const FormValidation = () => {

//   const navigate=useNavigate()
//   const defaultValue={
//     name:"",
//     email:"",
//     password:""
//   }
//  const updatedValue=yup.object({
//     name:yup.string().required("please enter name"),
//     email:yup.string().required("please enter email"),
//     password:yup.string().required("please enter password")
//  })

//  const handleSubmit=(values)=>{
//     console.log("values" ,values)
//  }

//   return (
//     <div className='flex  justify-center align-middle '>
//       <h1 className=' mt-5 text-center font-extrabold'>Form Validation</h1>
//       <Formik initialValues={defaultValue} validationSchema={updatedValue} onSubmit={handleSubmit}>
//         <Form >
      
//       <Field type="text" name="name" placeholder="Enter your name" className="flex ml-7  border-2 border-black"/>
//       <label className='text-red-800'>
//         <ErrorMessage name='name'/>
//       </label>
      
//       <Field type="text" name="email" placeholder="Enter your email" className="flex ml-7 mt-4 border-2 border-black"/>
//       <label className='text-red-800'>
//         <ErrorMessage name='email'/>
//       </label>
      
//       <Field type="text" name="password" placeholder="Enter your password" className="flex ml-7  mt-4 border-2 border-black"/>

//       <label className='text-red-800'>
//         <ErrorMessage name='password'/>
//       </label>
//       <button className='ml-20 mt-4 rounded-lg w-16 bg-blue-600 text-white' type='submit' onClick={()=>{navigate("home")}} >submit</button>
//         </Form>
//       </Formik>
//     </div>
//   )
// }

// export default FormValidation



import React from 'react';
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from 'react-router';
import { NavLink } from 'react-router-dom';
// import {SignUp} from './Signup';

const FormValidation = () => {
  const navigate = useNavigate();

  const defaultValue = {
    name: "",
    email: "",
    password: ""
  };

  const updatedValue = yup.object({
    name: yup.string().required("Please enter your name"),
    email: yup.string().email("Invalid email format").required("Please enter your email"),
    password: yup.string().required("Please enter your password")
  });

  const handleSubmit = (values) => {
    console.log("Values:", values);
    navigate("home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br">
      <h1 className="mb-8 text-3xl font-extrabold  text-center">Login here!</h1>
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <Formik initialValues={defaultValue} validationSchema={updatedValue} onSubmit={handleSubmit}>
          {() => (
            <Form>
              <h1>Welcome Back</h1>
              <div className="mb-4">
                <Field
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                />
                <label className="text-red-600">
                  <ErrorMessage name='name' />
                </label>
              </div>

              <div className="mb-4">
                <Field
                  type="text"
                  name="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                />
                <label className="text-red-600">
                  <ErrorMessage name='email' />
                </label>
              </div>

              <div className="mb-6">
                <Field
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                />
                <label className="text-red-600">
                  <ErrorMessage name='password' />
                </label>
              </div>

              <button
                className="w-full px-4 py-3 mt-4 text-lg font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 transition duration-200"
                type='submit'
              >
                Submit
              </button>
              <p>Already have account Sign up</p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormValidation;
