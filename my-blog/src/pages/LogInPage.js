import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, signInWithEmailAndPassword} from 'firebase/auth'

const LogInPage = () => {
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const logIn= async () => {
        try{          
        await signInWithEmailAndPassword(getAuth(), email,password);
        navigate('/articles');
        }catch (e){
            setError(e.message)
        }
    }
   
  return (
    <div id="add-comment-form">
        <h1>Log In</h1>
        {error && <p className='error'>{error}</p>}
        <label>
            Email:
            <input
            placeholder='Your Email Address'
            value={email}
            onChange={e=>setEmail(e.target.value)}
             type='text' />
        </label>
        <label>
            Password:
            <input
            type='password'
            value={password}
            onChange={e=>setPassword(e.target.value)} />
        </label>
        
        <button onClick={logIn}>Create Account</button>
        <Link to="/createAccount">Don't have account. Create one here</Link>
    </div>
  )
}

export default LogInPage