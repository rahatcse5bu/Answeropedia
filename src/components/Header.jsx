"use client";
import { setIsAddQuestion } from "@/store/slices/questions/QuestionSlices";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [username, setUsername] = useState("");

  useEffect(() => {
    // This code runs only on the client-side
    const storedUsername = window.localStorage.getItem("username");
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);
  const dispatch = useDispatch();
  const is_add_question = useSelector((state) => state.question.isAddQuestion);
  const handleLogout =() =>{
    setUsername('')
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('userEmail');
    window.localStorage.removeItem('username')
    window.location.reload();
  }
  return (
    <nav className="flex items-center justify-between px-4 py-8 max--w-5xl w-80% mx-auto bg-[#1E3A8A] text-white border-b border-b-gray-400 shadow-md">
      {/* Logo */}
      <div className="flex items-center">
        {/* <Image src="/path-to-your-logo.png" alt="Logo" width={50} height={50} /> */}
        <Link href={'/'}><span className="ml-3 font-bold text-xl">AnswersOpedia</span></Link>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex space-x-4">
        <Link href="/" className="text--gray-700 hover:text-gray-900">
          Home
        </Link>
        <Link href="/questions" className="text--gray-700 hover:text-gray-900">
          Questions
        </Link>
        <Link href="/categories" className="text--gray-700 hover:text-gray-900">
          Categories
        </Link>
        <Link href="/about-us" className="text--gray-700 hover:text-gray-900">
          About Us
        </Link>
        <Link href="/contact-us" className="text--gray-700 hover:text-gray-900">
          Contact Us
        </Link>
      </div>

      {/* Right Section */}
      {username && (
        <div className="flex flex-row items-center justify-center">
          <div
            onClick={() => dispatch(setIsAddQuestion(!is_add_question))}
            className="mr-2 bg-orange-300 px-4 py-2 rounded-md cursor-pointer text-white hover:bg-yellow-600 hover:text-gray-900"
          >
            Add Question
          </div>
          <Link
            href={"#"}
            className="flex items-center space-x-4 cursor-pointer"
          >
            Welcome {username}
          </Link>
          <div onClick={handleLogout} className="ml-4 cursor-pointer">Logout</div>
        </div>
      )}
      {!username && (
        <div className="flex items-center space-x-4">

          <Link href="/login-reg" className="text--gray-700 hover:text-gray-900">
            Login
          </Link>
          <Link href="/login-reg" className="text--gray-700 hover:text-gray-900">
            Register
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Header;
