import { setIsLoginTab } from '@/store/authSlice';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const RegTab = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const dispatch = useDispatch();

    const regHandler = () =>{
        if(username.trim()==="" || password.trim()=== ""|| email.trim==="" ){
alert("Fields can't be empty");
        }
        else{
const reg_enpoint='https://rahat-question-answer.vercel.app/api/v1/auth/';
fetch(reg_enpoint ,
    {
        method: "POST",
        headers:{
            "Content-Type":"application/json"
            },
            body: JSON.stringify({
                username,
                password,
                email
                })
                }).then((res) => res.json())
                .catch((err)=> console.log(err))
                .then((data) => {
                    console.log(data);
                    dispatch(setIsLoginTab(true))
                    alert('User registered successfully');
                    // window.location.reload();
                   
                    });
                    
        }
    }
    return (
        <div className="login-form">
          <h4 className="text-center text-balance text-2xl font-mono my-4">
            Register
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
          <div className="email-wrapper my-2 flex flex-col items-center justify-center">
            <label className="my-2 text-left">Email</label>
            <input
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="text"
              name="email"
              value={email}
              className="px-2 py-2 border border-gray-400 rounded-xl"
              placeholder="rahat.cse5.bu@gmail.com"
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
              onClick={regHandler}
              className="text-center px-4 py-2 border bg-slate-700 font-semibold text-white cursor-pointer border-gray-200 rounded-2xl"
            >
              Register
            </div>
          </div>
        </div>
    );
};

export default RegTab;