'use client'
import React, { useEffect } from 'react';
import QuestionCards from './QuestionCards';
import { useDispatch, useSelector } from 'react-redux';
import AddQuestion from './AddQuestion';
import { setAllQuestions } from '@/store/slices/questions/QuestionSlices';

const HomePage = () => {
    const dispatch = useDispatch();
    const is_add_question = useSelector((state)=>state.question.isAddQuestion);
    const questions = useSelector((state)=>state.question.questions);
const fetchQuestion =()=>{
    const all_questions_endpoint ='https://rahat-question-answer.vercel.app/api/v1/questions';
    // TODO: add endpoint for getting questions here
    fetch(all_questions_endpoint)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error))
    .then((data) => {
      console.log('questions =>',JSON.stringify(data));
      dispatch(setAllQuestions(data));
    }
      );
}
useEffect(()=>{
    fetchQuestion();
},[])
    return (
        <div className='w-full'>
{is_add_question &&(
<AddQuestion/>

)}

 <QuestionCards/>
 {/* {JSON.stringify(questions)} */}
        </div>
    );
};

export default HomePage;


