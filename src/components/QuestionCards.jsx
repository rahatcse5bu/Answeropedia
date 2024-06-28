'use client'
import React, { useEffect } from "react";
import QuestionCard from "./QuestionCard";
import { useDispatch, useSelector } from "react-redux";
import { setAllQuestions } from "@/store/slices/questions/QuestionSlices";
import { Bars } from 'react-loader-spinner'
const QuestionCards = () => {
  const dispatch = useDispatch();
  const all_questions = useSelector((state) => state.question.questions);

   
  const questions = [
    {
      questionTitle:
        "আমি একজন পুরুষ আমার বয়স 21 বছর আমি একজন ছাত্র আমি ছোটবেলা থেকেই রোগা পাতলা এখন আমি মোটাতাজের হতে চাচ্ছি এখন আমার কি করনীয় আমি খাবার ঠিকমতো খাই ঘুমও হয় কিন্তু শরীরের কোন পরিবর্তন দেখছি না এর জন্য কি কোন ওষুধ খাওয়া লাগবে?",
      answers: [
        {
          answerContent:
            "শুধু খেলেই হবে না। খাবারটা যেনো হজম হয় সে ব্যবস্থাও নিতে হবে। আর সব খেলেও হবে না। পুষ্টিকর মানেই কিন্তু আপনার জন্য পুষ্টিকর না। আপনার জন্য কী উপযোগী সেগুলো খুজে...",
          replies: [],
        },
      ],
      questionAuthor: "greatjob21",
      answerCount: 123,
      views: 2,
      questionUpVotes: 161,
      questionDownVotes: 21,
      categories: [
        { name: "React" },
        { name: "JavaScript" },
        { name: "Internet" },
        { name: "Education" },
      ],
    },
    {
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
          date: "2023-01-21",
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
          answerUpVotes: 21,
          answerDownVotes: 4,
          date: "2023-01-21",
          answerAuthor: "anis_bond10",
        },
      ],
      questionAuthor: "test20",
      answerCount: 23,
      views: 503,
      questionUpVotes: 161,
      questionDownVotes: 21,
      categories: [
        { name: "Internet" },
        { name: "Education" },
        { name: "Religious" },
      ],
    },
  ];
  return (
    <div className="w-full">

      {all_questions?.length>0 && all_questions.map((question, index) => {
        return(<QuestionCard key={index} data={question} />);
      })}

      {all_questions?.length<=0 && (
<div className="flex flex-row items-center justify-center">
<Bars
            visible={true}
            height="120"
            width="120"
            color="#000"
            radius="9"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClass="inline"
            />
  </div>
      )}
    </div>
  );
};
// {questions.map((question, index) => {
//   return <QuestionCard key={index} data={question} />;
// })}
export default QuestionCards;
