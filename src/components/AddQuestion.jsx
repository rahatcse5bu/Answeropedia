import {
    setAllQuestions,
  setIsAddQuestion,
  setQuestionTitle,
} from "@/store/slices/questions/QuestionSlices";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ThreeDots } from 'react-loader-spinner'

const AddQuestion = () => {
    const [isQuestionAdded,setIsQuestionAdded]= useState(null);
  const dispatch = useDispatch();
  const title = useSelector((state) => state.question.questionTitle);
  const handleAddQuestion = async() =>  {
    setIsQuestionAdded(false);
    if (title) {
      const add_question_endpoint =
        "https://rahat-question-answer.vercel.app/api/v1/questions";
      fetch(add_question_endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          questionTitle: title,
          questionAuthor: "rahatcse555555bu",
        }),
      }).then(() => {
        setIsQuestionAdded(true)
         fetchQuestion();
      });
    } else {
        setIsQuestionAdded(false)
      alert("Please fill out all fields");
    }
  };
  const fetchQuestion =async()=>{
    const all_questions_endpoint ='https://rahat-question-answer.vercel.app/api/v1/questions';
    // TODO: add endpoint for getting questions here
    fetch(all_questions_endpoint)
    .then((response) => response.json())
    .catch((error) => console.log("Error: ", error))
    .then((data) => {
      console.log('questions ==>',JSON.stringify(data));
      dispatch(setAllQuestions(data));
    }
      );
}
  return (
    // <div className="add-question px-4 py-4 my-2">
    //   <div className="my-2 flex flex-col items-center justify-end">
    //     <label className="text-lg">Question Title</label>
    //     <input
    //       className=""
    //       onChange={(e) => dispatch(setQuestionTitle(e.target.value))}
    //       type="text" value={title}
    //       placeholder="What is the capital of Bangladesh?"
    //     />
    //   </div>
    //   <div className="my-2 flex flex-col items-center justify-end">
    //     <label className="text-lg">Question Description</label>
    //     <textarea
    //       className="" value={description}
    //       onChange={(e) => dispatch(setQuestionDescription(e.target.value))}
    //       rows={8} cols={100}
    //       placeholder="What is the capital of Bangladesh?"
    //     ></textarea>
    //   </div>
    //   <div className="flex flex-row items-center justify-end">
    //     <button className="bg-slate-700 text-white rounded-xl px-4 py-2" onClick={()=>alert("Coming Soon!")}>Add Question</button>
    //   </div>
    // </div>

    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-40">
      <div className="add-question bg-white px-4 py-4 my-2 rounded-lg shadow-lg w-[60%] mx-auto">
        <div className="my-2 flex flex-col items-start justify-end">
          <label className="py-2 text-center text-2xl">Ask Question:</label>
          <textarea
            className="w-full border borer-gray-300 rounded-2xl px-4 py-2"
            rows={10}
            cols={100}
            onChange={(e) => dispatch(setQuestionTitle(e.target.value))}
            type="text"
            value={title}
            placeholder="What is the capital of Bangladesh?"
          ></textarea>
        </div>
        <div className="flex flex-row items-center justify-end">
          <button
            className="bg-slate-700 flex flex-row items-center  text-white rounded-xl px-4 py-2 mr-2"
            onClick={() => handleAddQuestion()}
          >
           <span className="mr-2">Add Question</span>
           {isQuestionAdded==false && isQuestionAdded!=null &&(
             <ThreeDots
            visible={true}
            height="20"
            width="20"
            color="#fff"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="inline"
            />
           )}
          </button>
          <button
            className="bg-red-700 text-white rounded-xl px-4 py-2"
            onClick={() => dispatch(setIsAddQuestion(false))}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddQuestion;
