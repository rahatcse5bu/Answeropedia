"use client";
import { setAllQuestions } from "@/store/slices/questions/QuestionSlices";
import Link from "next/link";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";

const QuestionCard = ({ data }) => {
  const notify = (msg) => toast(msg);
  const dispatch = useDispatch();
  const [isMenu, setMenu] = useState(false);
  const handleDelete = (id) => {
    const delete_question_api_endpoint =
      "https://rahat-question-answer.vercel.app/api/v1/questions";
    fetch(delete_question_api_endpoint + `/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }).then(() => {
      notify("The Question has been deleted!");
      fetchQuestion();
    });
  };
  const fetchQuestion = async () => {
    const all_questions_endpoint =
      "https://rahat-question-answer.vercel.app/api/v1/questions";
    // TODO: add endpoint for getting questions here
    fetch(all_questions_endpoint)
      .then((response) => response.json())
      .catch((error) => console.log("Error: ", error))
      .then((data) => {
        // console.log('questions ==>',JSON.stringify(data));
        dispatch(setAllQuestions(data));
      });
  };
  return (
    <div className="question-card w-full relative">
      <Toaster
        toastOptions={{
          success: {
            style: {
              background: "green",
            },
          },
          error: {
            style: {
              background: "red",
            },
          },
        }}
      />
      {/* <div className="text-xs text-green-700 absolute top-[35%] right-2 rotate-45">Not Answered</div> */}
      <Link href={'/questions/'+data._id}>      <div className=" flex flex-row items-center justify-between mx-2 my-4 p-4 rounded-xl border border-gray-300">
        <div className="col-left">
          <h3 className="text-black px-2 py-2">{data.questionTitle}</h3>
          <p className="px-2 my-2 text-gray-600">
            {data?.answers?.[0]?.answerContent}
          </p>
          <div className="ans-view flex flex-row items-center justify-start px-2">
            <div className="">
              {data?.answers.length} Answers {data.views} views
            </div>
          </div>
        </div>
        <div className="col-right relative">
          <div
            className="rotate-90 text-2xl cursor-pointer"
            onClick={() => setMenu(!isMenu)}
          >
            ...
          </div>
          {/* Dialog Box  */}
          {isMenu && (
            <div
              id="editMenu"
              class="absolute right-0 mt-2 px-4 py-2 w-[120px] bg--gray-300 border border-gray-300 rounded-md shadow-2xl z-20"
            >
              <a
                href="#"
                class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Edit
              </a>
              <div
                onClick={() => handleDelete(data?._id)}
                class="block cursor-pointer px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Delete
              </div>
            </div>
          )}
        </div>
      </div></Link>

    </div>
  );
};

export default QuestionCard;
