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
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      validationErrors.email = "email is not valid";
    }
    if (!data.password.trim()) {
      validationErrors.password = "password is required";
    } else if (data.password.length < 6) {
      validationErrors.password = "password should be atleast 6 characters";
    }
    if (data.confirmpassword !== data.password) {
      validationErrors.confirmpassword = "password and confirm password are not same";
    }
    setError(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert('form submitted successfully!')
      setData({
        name: '',
        email: '',
        password: '',
        confirmpassword: ''
      })
    }
  }
  return (
    <div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className='mb-3'>
          <label>User Name</label>
          <input type='text' name='name' onChange={handleChange} value={data.name} />
          {error && <p className='err-txt'>{error.name}</p>}
        </div>
        <div className='mb-3'>
          <label>Email</label>
          <input type='email' name='email' onChange={handleChange} value={data.email} />
          {error && <p className='err-txt'>{error.email}</p>}

        </div>
        <div className='mb-3'>
          <label>Password</label>
          <input type='password' name='password' onChange={handleChange} value={data.password} />
          {error && <p className='err-txt'>{error.password}</p>}
        </div>
        <div className='mb-3'>
          <label>Confirm Password</label>
          <input type='password' name='confirmpassword' onChange={handleChange} value={data.confirmpassword} />
          {error && <p className='err-txt'>{error.confirmpassword}</p>}
        </div>
        <button className="btn">Submit</button>
      </form>
    </div>
  )
}
export default Login