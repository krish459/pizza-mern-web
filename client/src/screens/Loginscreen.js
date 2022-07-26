import React from 'react'
import { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { loginUser } from '../actions/userAction';
import Error from '../components/Error';
import Loading from '../components/Loading';


export default function Loginscreen() {
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');
    const loginstate = useSelector(state=>state.loginUserReducer)
    const {loading , error}=loginstate
    // const dispatch = useDispatch()


    useEffect(()=>{

      if(localStorage.getItem('currentUser')){
        window.location.href='/'
      }

    }, [])

    const dispatch = useDispatch()

    function login(){
            const user={
                email,
                password
            }
            console.log(user);
            dispatch(loginUser(user))
        
    }

    return (
        <div>
            <div className="row justify-content-center mt-5">
                <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-white rounded">
                    <h2 className='text-center mt-2' style={{ fontSize: '35px' }}>Login</h2>

                    {loading && (<Loading/>)}
                    {error && (<Error error='Invalid Credentials'/>)}

                    <div><input required type="text" placeholder='Email' className='form-control' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
                        <input required type="text" placeholder='Password' className='form-control' value={password} onChange={(e)=>{setpassword(e.target.value)}} />
                         <button onClick={login} className="btn mt-3">LOGIN</button>
                    </div>
                    <a style={{color:'black'}} href="/register">New User Register Here</a>
                </div>
            </div>
        </div>
    )
}

