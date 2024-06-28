import { setUserInfo } from '@/store/authSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const LoginTab = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const loginHandler = () => {
        const login_api_endpoint='https://rahat-question-answer.vercel.app/api/v1/auth/login'
        fetch(login_api_endpoint,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    username:username,
                    password:password
                    })
                    }).then((res)=>{
                        if(!res.ok) throw new Error('HTTP error! status: ${res.status}');
                            return res.json();})
                            .then((data)=>{
                                //wrap if login is success 

                                // set username to local 
                                window.localStorage.setItem('userEmail', data.email);
                                window.localStorage.setItem('username', data.username);
                                window.localStorage.setItem('userId', data.id);
                                window.localStorage.setItem('token', data.token);
                    
                                dispatch(setUserInfo(data))
                                window.location= '/';
                                // alert(`Welcome back, ${data.username}`);
                                console.log(data)})
                            
                        
        
      };
    return (
        <div className="login-form">
          <h4 className="text-center text-balance text-2xl font-mono my-4">
            Login
          </h4>
          <div className="username-wrapper my-2 flex flex-col items-center justify-center">
            <label className="my-2 text-left">Username</label>
            <input
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              type="text"
              name="username"
              value={username}
              className="px-2 py-2 border border-gray-400 rounded-xl"
              placeholder="rahatcse5bu"
            ></input>
          </div>
          <div className="password-wrapper my-2 flex flex-col items-center justify-center">
            <label className="my-2 text-left">Password</label>
            <input
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              type="password"
              name="password"
              value={password}
              className="px-2 py-2 border border-gray-400 rounded-xl"
              placeholder=""
            ></input>
          </div>
          <div className="login-btn-wrapper my-2">
            <div
              onClick={loginHandler}
              className="text-center px-4 py-2 border bg-slate-700 cursor-pointer font-semibold text-white border-gray-200 rounded-2xl"
            >
              Login
            </div>
          </div>
        </div>
    );
};

export default LoginTab;