import LoginTab from "@/components/LoginReg/LoginTab";
import RegTab from "@/components/LoginReg/RegTab";
import { setIsLoginTab, setIsRegTab } from "@/store/authSlice";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  const dispatch = useDispatch();
  const is_reg_tab = useSelector((state) => state.auth.isRegTab);
  const is_login_tab = useSelector((state) => state.auth.isLoginTab);

  return (
    <div className="log-reg-wrapper mx-w-[500px] px-4 py-4 rounded-lg border-gray-500">
      <div className="login-wrapper flex flex-col items-center justify-center w-10% mx-auto py-8 px-2 rounded-xl border border-gray-200">
        {/* <h4 className='text-center text-balance text-3xl font-mono my-4'>Login</h4> */}
        {/* login/reg tabs  */}
        <div className="flex flex-row items-center justify-between w-[100px] mx-auto">
          {is_reg_tab && (
            <>
              <div onClick={()=>dispatch(setIsLoginTab(true))} className="login-tab px-4 py-2 mr-2 cursor-pointer rounded-xl border-slate-900">
                Login
              </div>
              <div onClick={()=>dispatch(setIsRegTab(true))} className="reg-tab px-4 py-2 mr-2 cursor-pointer rounded-xl bg-slate-400 border-slate-500">
                Register
              </div>
            </>
          )}
          {!is_reg_tab && (
            <>
              <div onClick={()=>dispatch(setIsLoginTab(true))} className="login-tab px-4 py-2 mr-2 cursor-pointer rounded-xl bg-slate-400 border-slate-500">
                Login
              </div>
              <div onClick={()=>dispatch(setIsRegTab(true))} className="reg-tab px-4 py-2 mr-2 cursor-pointer rounded-xl border-slate-900">
                Register
              </div>
            </>
          )}
        </div>
        <div className="h-2"></div>
{is_login_tab && (
    <LoginTab/>
)}
{is_reg_tab && (
    <RegTab/>
)}
      </div>
    </div>
  );
};

export default Index;
