import React, { useState } from 'react'

const Login = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    confirmpassword: ''
  })
  const [error, setError] = useState();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {}
    if (!data.name.trim()) {
      validationErrors.name = "user name is required";
    }
    if (!data.email.trim()) {
      validationErrors.email = "email is required";
    }
    if (!data.password.trim()) {
      validationErrors.password = "password is required";
    }
    if (!data.confirmpassword.trim()) {
      validationErrors.confirmpassword = "confirm password is required";
    }
    console.log(validationErrors)
  }
  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>User Name</label>
          <input type='text' name='name' onChange={handleChange} value={data.name} />
        </div>
        <div className='mb-3'>
          <label>Email</label>
          <input type='email' name='email' onChange={handleChange} value={data.email} />
        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input type='password' name='password' onChange={handleChange} value={data.password} />
        </div>
        <div className='mb-3'>
          <label>Confirm Password</label>
          <input type='password' name='confirmpassword' onChange={handleChange} value={data.confirmpassword} />
        </div>
        <button className="btn">Submit</button>
      </form>


    </div>
  )
}

export default Login