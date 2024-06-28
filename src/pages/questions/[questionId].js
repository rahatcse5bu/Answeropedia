"use client";
import React, { useEffect, useState } from "react";
import AnswerItem from "@/components/AnswerItem";
import CategoryTabs from "@/components/CategoryTabs";
import UpDown from "@/components/UpDown";
import { useRouter } from "next/router";
import { ReadableDateTime } from "@/app/functions/DateTime";
import { ThreeDots } from "react-loader-spinner";
import QuestionCards from "@/components/QuestionCards";
import { fetchSingleQuestion } from "@/app/functions/questions/fetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { setGlobalSingleQuestion } from "@/store/slices/questions/QuestionSlices";

// import { useDispatch, useSelector } from "react-redux";
const SingleQuestion = () => {
  // const [single_question, setSingleQuestion] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const single_question= useSelector((state)=>state.question.singleQuestion)
  const router = useRouter();
  const { questionId } = router.query;
  const question = {
    questionTitle:
      "আমি ২০২২ সালের এসএসসি পরীক্ষাথি আমার বাংলা প্রথম পেপারে থেকে 11 mcq হইছে আর বাংলা সেকেন্ড পেপারের দুইটা mcq হইছে আমি কি তাহলে পাস করতে পারবো?",
    answers: [
      {
        answerContent:
          "বাংলা ১ম পত্রের MCQ এ পাস করবেন কিন্তু বাংলা ২ য় পত্রে পাশ করতে হলে MCQ এ ৫ পেতে হবে।",
        replies: [
          {
            text: "That is incorrect. The correct answer is Paris.",
            upVotes: 0,
            downVotes: 5,
            author: "rahatcse5bu",
            date: "2020-02-23",
          },
        ],
        answerUpVotes: 21,
        answerDownVotes: 4,
        answerDate: "2023-01-21",
        answerAuthor: "anis_bond10",
      },
      {
        answerContent: "this is answer 2",
        replies: [
          {
            text: "That is incorrect. The correct answer is Paris.",
            upVotes: 10,
            downVotes: 5,
            author: "rahatcse55bu",
            date: "2020-02-23",
          },
          {
            text: "That is incorrect. The correct answer is Paris.",
            upVotes: 10,
            downVotes: 5,
            author: "rahatcse55bu",
            date: "2020-02-23",
          },
        ],
        answerUpVotes: 201,
        answerDownVotes: 4,
        answerDate: "2023-01-21",
        answerAuthor: "anis_bond10",
      },
    ],
    questionAuthor: "pnc-bikah",
    questionDate: "2021-09-12",
    answerCount: 23,
    views: 503,
    questionUpVotes: 161,
    questionDownVotes: 21,
    categories: [
      { name: "React" },
      { name: "JavaScript" },
      { name: "Internet" },
      { name: "Education" },
    ],
  };
  //   http://localhost:3000/questions/659920e74d7077f501ebcb8c
  // const fetchSingleQuestion = (id) => {
  //   setIsLoading(true);
  //   const single_question_api_endpoint =
  //     "https://rahat-question-answer.vercel.app/api/v1/questions/";
  //   // Mock the api endpoint with a mock implementation
  //   fetch(single_question_api_endpoint + `${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       if (data) {
  //         setSingleQuestion(data);
  //         setIsLoading(false);
  //         // console.log('single data=>',data)
  //         // alert(id);
  //       } else {
  //         alert("Error getting username");
  //       }
  //     });
  // };
//  fetchSingleQuestion(questionId)
useEffect(() => {
  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchSingleQuestion(questionId);
      if (data) {
        dispatch(setGlobalSingleQuestion(data));
      } else {
        dispatch(setGlobalSingleQuestion([])); // or set an appropriate empty state
      }
    } catch (error) {
      console.error('Error fetching question:', error);
      // Handle error state here (e.g., dispatch an error action)
    } finally {
      setIsLoading(false);
    }
  };

  if (questionId) {
    fetchData();
  }
}, [dispatch, questionId]);



  return (
    <div>
      <div className="flex flex-row align-middle items-center justify-center w-[80%] mx-auto">
        {!isLoading && single_question && (
          <div className="main-content w--full col-span-3 p-4 mr-4">
            <h3 className="text-xl mt-4 mb-1">{single_question.questionTitle}</h3>
            <h5 className="text-lg">
              Asked By:{" "}
              <span className="text-red-700">
                {single_question.questionAuthor}
              </span>
              <span className="text-[#1E3A8A]">
                <ReadableDateTime isoString={single_question?.questionDate} />
              </span>
            </h5>
       
            {single_question?.categories?.length>0 &&(
                <CategoryTabs categories={single_question?.categories} />
            )}
            
            {/* end category tabs  */}
            <UpDown  upvoteUsers={single_question?.upvoteUsers}
            downvoteUsers={single_question.downvoteUsers}
            q_id={questionId}
              upVotes={single_question?.questionUpVotes}
              downVotes={single_question?.questionDownVotes}
              views={single_question?.views}
              isEdit={false}
              isAnswer={false}
            />
            {/* end up-down vote & views count  */}

            {single_question?.answers?.length>0 && (
            <div className="answers-count text-xl font-semibold my-4">
              <h4 className="">{single_question?.answers?.length} Answers</h4>
            </div>
            )}
            {/* end of answer count  */}
            
          
            {single_question?.answers?.length>0 && single_question?.answers?.map((answer, index) => (
              <AnswerItem key={index} q_id={questionId} answer={answer} />
            ))}

            
          </div>
        )}

        {isLoading && ( <div className="flex flex-col items-center justify-center">
                         <ThreeDots
                         visible={true}
                         height="60"
                         width="60"
                         color="#000"
                         radius="9"
                         ariaLabel="three-dots-loading"
                         wrapperStyle={{}}
                         wrapperClass="inline"
                         /></div>
        )
        }
        <div className="right-sidebar col-span-2 p-5 bg-red-600">
            <QuestionCards/>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
