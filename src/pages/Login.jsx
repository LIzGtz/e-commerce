import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../store/slices/login.slice';
import './Login.css'

export const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const dispatch = useDispatch();

  const defaultValues = {email: "", password: ""}

  const submitLogin = (data) => {
    dispatch(loginThunk(data.email, data.password))
      .then(() => {
        setIsLoggedIn(true);
      })
      .catch(() => setIsLoggedIn(false));
  }

  useEffect(() => {
    const loginData = sessionStorage.getItem('login.token');
    if (loginData) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn])

  if (isLoggedIn) {
    return (
      <>
      <h3>Welcome!</h3>
      </>
    )
  }

  return (
    <div className='content'>
      <div className='login-container'>
        <div className='main-container'>
          <form className='login' onSubmit={handleSubmit(submitLogin)}>
            <strong>Welcome! Enter your email and password to continue</strong>
            <p className='login-message'></p>
            <div className='input-container'>
              <label htmlFor='email'>E-mail</label>
              <input id='email' type='text' name='email' {...register("email")}></input>
            </div>
            <div className='input-container'>
              <label htmlFor='password'>Password</label>
              <input id='password' type='password' name='password' {...register("password")}></input>
            </div>
            <div className='error-message hidden'></div>
            <button type='submit' className='submit-button'>Login</button>
            <div className='switch-forms'>
              Don't have an account?&nbsp;
              <button type='button'>Sign-up</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
