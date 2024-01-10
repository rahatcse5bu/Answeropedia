'use client'
import { setIsAddQuestion } from '@/store/slices/questions/QuestionSlices';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const dispatch = useDispatch();
  const is_add_question = useSelector((state)=>state.question.isAddQuestion);
    return  (
        <nav className="flex items-center justify-between px-4 py-8 max-w-5xl w-80% mx-auto bg-gray--200 border-b border-b-gray-400 shadow-md">
          {/* Logo */}
          <div className="flex items-center">
            {/* <Image src="/path-to-your-logo.png" alt="Logo" width={50} height={50} /> */}
            <span className="ml-3 font-bold text-xl">AnswersOpedia</span>
          </div>
    
          {/* Navigation Links */}
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 hover:text-gray-900">Home</Link>
            <Link href="/questions" className="text-gray-700 hover:text-gray-900">Questions</Link>
            <Link href="/categories" className="text-gray-700 hover:text-gray-900">Categories</Link>
            <Link href="/about-us" className="text-gray-700 hover:text-gray-900">About Us</Link>
            <Link href="/contact-us" className="text-gray-700 hover:text-gray-900">Contact Us</Link>
          </div>
    
          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div onClick={()=>dispatch(setIsAddQuestion(!is_add_question))} className=" bg-slate-700 px-4 py-2 rounded-xl cursor-pointer text-white hover:text-gray-900">Add Question</div>
            <Link href="/login" className="text-gray-700 hover:text-gray-900">Login</Link>
            <Link href="/register" className="text-gray-700 hover:text-gray-900">Register</Link>
           
          </div>
        </nav>
      );
};

export default Header;