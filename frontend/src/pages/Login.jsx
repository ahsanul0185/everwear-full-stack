import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import axios from 'axios';
import { toast } from 'react-toastify';

const Login = () => {

  const [currentState, setCurrentState] = useState('Login');
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const {token, setToken, navigate, backendUrl} = useContext(ShopContext);

  const onSubmitHandler = async (e) => {
      e.preventDefault();
      try {
        
        if (currentState === 'Sign Up') {
          const response = await axios.post(backendUrl + "/api/user/register", {name, email, password})
          if (response.data.success) {
            setError('');
            setCurrentState('Login')
            // setToken(response.data.token);
            // localStorage.setItem('token', response.data.token)
          }else {
            setError(response.data.message);
          }
        }else{
            const response = await axios.post(backendUrl + '/api/user/login', {email, password});
            if (response.data.success) {
              setError('')
              setToken(response.data.token);
              localStorage.setItem("token", response.data.token);
              navigate("/")
            }else {
              setError(response.data.message);  
            }
        }

      } catch (error) {
        console.log(error);
        toast.error(error.message);
      }
  }

  useEffect(() => {
    if (token) {
      navigate("/")
    }
  }, [])

  useEffect(() => {
    setError('');
    setName('');
    setEmail('');
    setPassword('');
  }, [currentState])

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='philosopher-regular text-3xl'>{currentState}</p>
      </div>

      {
        currentState === "Login" ? "" : (
          <input type="text" onChange={(e) => setName(e.target.value)} value={name} className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required/>
        )
      }
      <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required/>
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required/>

      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p>Forgot your password?</p>
        {
          currentState === "Login"
          ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create Account</p>
          : <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        }
      </div>
      {error && <p className='text-red-500'>{error}</p>}
      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === "Login" ? "Login"  : "Sign Up"}</button>
    </form>
  )
}

export default Login
