"use client";
import { fetchSingleQuestion } from "@/app/functions/questions/fetchQuestion";
import {
  setGlobalSingleQuestion,
  setIsReply,
} from "@/store/slices/questions/QuestionSlices";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaRegThumbsUp, FaRegThumbsDown } from "react-icons/fa";
// import { FaRegThumbsDown } from "react-icons/fa";

const UpDown = ({
  upvoteUsers = [],
  downvoteUsers = [],
  q_id = "",
  ans_id = "",
  upVotes,
  downVotes,
  views = 0,
  isEdit = false,
  isAnswer = true,
}) => {
  const isReplyFormOpen = useSelector((state) => state.question.isReply);
  // const [q_id,setId]=useState(null)
  const [userAnswer, setUserAnswer] = useState("");
  const [isAnswerAdded, setIsAnswerAdded] = useState(false);
  const dispatch = useDispatch();
  const single_question = useSelector((state) => state.question.singleQuestion);
  const [author, setAuthor] = useState("");
  const [user_email, setUserEmail] = useState("");
  const handleAddAnswer = (q_id) => {
    const upvote_api =
      "https://rahat-question-answer.vercel.app/api/v1/questions/answers/" +
      q_id;
    setIsAnswerAdded(false);
    if (userAnswer) {
      // alert(add_answer_to_question_api_endpoint)
      fetch(upvote_api, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          answerContent: userAnswer,
          answerAuthor: author,
        }),
      }).then(async (data) => {
        // alert(data.status);
        if (data.status === 200 || data.status === 201) {
          const single_data = await fetchSingleQuestion(q_id);

          dispatch(setGlobalSingleQuestion(single_data));
          setUserAnswer("");
          setIsAnswerAdded(true);
          // isReplyFormOpen(false)
        } else {
          alert("Error" + data.status);
        }

        //  fetchQuestion();
      });
    } else {
      setIsAnswerAdded(false);
      alert("Please fill out all fields");
    }
  };
  const handleAddUpVote = () => {
    let upvote_api =
      "https://rahat-question-answer.vercel.app/api/v1/questions/answers/:qid/aid";
    // https://rahat-question-answer.vercel.app/api/v1/questions/answers/:qid/aid
    if (isAnswer) {
      //means it's from answer section, we need to upvote for ans
      upvote_api =
        "https://rahat-question-answer.vercel.app/api/v1/questions/answers/" +
        q_id +
        "/" +
        ans_id;
    } else {
      upvote_api =
        "https://rahat-question-answer.vercel.app/api/v1/questions/votes/" +
        q_id;
    }
    // const add_upvote_to_question_api_endpoint ="https://rahat-question-answer.vercel.app/api/v1/questions/votes/"+id;
    setIsAnswerAdded(false);
    // alert(upvote_api)
    fetch(upvote_api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "upvote",
        email: user_email,
      }),
    }).then(async (data) => {
      // alert(data.status);
      if (data.status === 200 || data.status === 201) {
        const single_data = await fetchSingleQuestion(q_id);
        // alert(JSON.stringify(data));
        // alert(JSON.stringify(single_data))
        dispatch(setGlobalSingleQuestion(single_data));
      } else {
        alert("Error" + data.status);
      }
    });
  };
  const handleDownUpVote = () => {
    let downvote_api =
      "https://rahat-question-answer.vercel.app/api/v1/questions/answers/:qid/aid";
    // https://rahat-question-answer.vercel.app/api/v1/questions/answers/:qid/aid
    if (isAnswer) {
      //means it's from answer section, we need to upvote for ans section
      downvote_api =
        "https://rahat-question-answer.vercel.app/api/v1/questions/answers/" +
        q_id +
        "/" +
        ans_id;
    } else {
      downvote_api =
        "https://rahat-question-answer.vercel.app/api/v1/questions/votes/" +
        q_id;
    }
    // const add_upvote_to_question_api_endpoint ="https://rahat-question-answer.vercel.app/api/v1/questions/votes/"+id;
    setIsAnswerAdded(false);
    // alert(upvote_api)
    fetch(downvote_api, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        type: "downvote",
        email: user_email,
      }),
    }).then(async (data) => {
      // alert(data.status);
      if (data.status === 200 || data.status === 201) {
        const single_data = await fetchSingleQuestion(q_id);
        // alert(JSON.stringify(data));
        // alert(JSON.stringify(single_data))
        dispatch(setGlobalSingleQuestion(single_data));
      } else {
        alert("Error" + data.status);
      }
    });
  };
  //   useEffect(()=>{
  // setId(q_id);
  // // console.log("single ",JSON.stringify(single_question))
  //   },[q_id,single_question])
  useEffect(() => {
    setAuthor(window.localStorage.getItem("username"));
    setUserEmail(window.localStorage.getItem("userEmail"));
  }, [author, user_email]);
  return (
    <div>
      <div className="up-down-views-section grid grid-cols-6 gap-4 align-middle items-center">
        <div className="left flex flex-row col-span-3 py-2 pr-4 items-center ">
          <div className="up-down grid grid-cols-2 gap-3 mr-4 border border-gray-400 rounded-lg px-4 py-2">
            <div
              onClick={() => handleAddUpVote()}
              className="up flex flex-row items-center justify-center cursor-pointer"
            >
              <span className="mr-[2px]">{upvoteUsers.length}</span>
              {!upvoteUsers.includes(user_email) && <FaRegThumbsUp size={20} />}
              {upvoteUsers.includes(user_email) && (
                <FaRegThumbsUp color="#0000FF" stroke="#0000FF" fill="#0000FF" size={20} />
              )}
            </div>
            <div
              onClick={() => {
                handleDownUpVote();
              }}
              className="down flex flex-row items-center justify-center cursor-pointer"
            >
              {!downvoteUsers.includes(user_email) && (
                <FaRegThumbsDown size={20} />
              )}
              {downvoteUsers.includes(user_email) && (
                <FaRegThumbsDown color="#0000FF" stroke="#0000FF" fill="#0000FF" size={20} />
              )}
              <span className="ml-[2px]"> {downvoteUsers.length}</span>
            </div>
          </div>
          <div className="views">
            {!isAnswer && <h4 className="">{views} Views</h4>}
          </div>
        </div>
        <div className="right col-span-3">
          <div className="grid grid-cols-4 gap-4 py-2 text-white">
            {isAnswer && (
              <div
                onClick={() => dispatch(setIsReply(!isReplyFormOpen))}
                className="bg-[#1E3A8A]  px-4 py-2 cursor-pointer rounded-lg"
              >
                Reply
              </div>
            )}
            {/* if isAnswer is not true, then reply will be shown  */}
            {!isAnswer && (
              <div
                onClick={() => dispatch(setIsReply(!isReplyFormOpen))}
                className="bg-[#1E3A8A]  px-4 py-2 cursor-pointer rounded-lg"
              >
                Answer
              </div>
            )}
            {isEdit && (
              <div className="bg-[#1E3A8A] px-4 py-2 cursor-pointer rounded-lg">
                Edit
              </div>
            )}
          </div>
        </div>
      </div>
      {isReplyFormOpen && q_id && (
        <div className="px-4 py-2 rounded-xl">
          <textarea
            onChange={(e) => setUserAnswer(e.target.value)}
            rows={8}
            cols={100}
            className="opacity-100 transition-opacity duration-900 ease-in-out border border-gray-300 rounded-lg my-2 mx-4"
          ></textarea>
          <div className="flex flex-row items-end justify-end">
            {isAnswerAdded && (
              <button
                disabled
                className="bg-slate-900 text-white px-4 py-2 rounded-lg"
              >
                {isAnswer && "Reply Added"} {!isAnswer && "Answer Added"}
              </button>
            )}
            {!isAnswerAdded && q_id && (
              <button
                onClick={(e) => handleAddAnswer(q_id)}
                className="bg-slate-900 text-white px-4 py-2 rounded-lg cursor-pointer"
              >
                {isAnswer && "Add Reply"} {!isAnswer && "Add Answer"}
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default UpDown;
