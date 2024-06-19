import {React, useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import {getAuth, createUserWithEmailAndPassword} from 'firebase/auth'

const CreateAccountPage = () => {
  const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confPassword,setConfPassword] = useState('');
    const [error,setError] = useState('');

    const navigate = useNavigate();

    const create= async () => {
        try{
          if(password !== confPassword)
            {
                throw setError("Pass are not the sames")
            }
        await createUserWithEmailAndPassword(getAuth(), email,password);
        navigate('/articles');
        }catch (e){
            setError(e.message)
        }
    }
  return (
    <div id="add-comment-form">
        <h1>Create Account</h1>
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
        <label>
            Confirmation Password:
            <input
            type='password'
            value={confPassword}
            onChange={e=>setConfPassword(e.target.value)} />
        </label>
        <button onClick={create}>Create</button>
        <Link to="/login">Do you have an accouny? Log in</Link>
    </div>
  )
}

export default CreateAccountPage
