import React, { useState } from 'react'

const Login = () => {
    const initialValues = { name: '', email: '', password: '' };
    const [formvalue, setFormvalue] = useState(initialValues);
    const handleChange = (e) => {
        const { name, value } = e.target;
        // setFormvalue({ ...formvalue, [name]: value })
        console.log(name, value)
    }
    return (
        <div>
            <form className='login-form'>
                <div className="container">
                    <div className='mb-3'>
                        <label>Username </label><br />
                        <input type="text" placeholder="Enter Username" name="username" required onChange={handleChange} value={initialValues.name} />
                    </div>
                    <div className='mb-3'>
                        <label>Email </label><br />
                        <input type="email" placeholder="Enter email" name="email" required onChange={handleChange} value={initialValues.email} />
                    </div>
                    <div className='mb-3'>
                        <label>Password </label><br />
                        <input type="password" placeholder="Enter Password" name="password" required onChange={handleChange} value={initialValues.password} />
                    </div>
                    <button type="submit" className='btn'>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login