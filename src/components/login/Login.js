import React from 'react'
import { useState } from 'react';
import { loginFetch } from '../../utils/fetch';

const Login = ({setLoggedIn}) => {

    const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [login, setLogin] = useState(false);

//     const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const changeHandler = (e, setter, state) => {
//       setter(e.target.value);
//       console.log(state);
//   }
const handleSubmit = async (e) => {
    // prevent the form from refreshing the whole page
    e.preventDefault();
   const data = await loginFetch(email, password);
   console.log("hello", data);
   await setLoggedIn(data.user);
  }
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("hello world");
//     loginFetch(username, password);
//   }

  return (
    <div className='login-wrapper'>
      <div className='login-inner-container'>
        <h3 className='login-title'>Log In</h3>
        <form onSubmit={(e) => handleSubmit(e)}>
        {/* <input className='login-input' placeholder='Username'
        onChange={(event) => changeHandler(event, setUsername, username)} /> */}
        <input className='signup-input' placeholder='Email'
        value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className='login-input' placeholder='Password'
        value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type='submit' onClick={(e)=>handleSubmit(e)}>Log In</button>
        </form>
      </div>
    </div>
  )
}

export default Login