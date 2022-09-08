import React from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux';
import './Login.css'

export const Login = () => {
  const [ register, handleSubmit ] = useForm();
  const dispatch = useDispatch();

  const submitLogin = () => {
    dispatch(loginThunk)
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
              <input id='email' type='text' name='email'></input>
            </div>
            <div className='input-container'>
              <label htmlFor='password'>Password</label>
              <input id='password' type='password' name='password'></input>
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
