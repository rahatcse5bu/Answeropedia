'use client'
import React from "react";
import UpDown from "../../components/UpDown";
import AnswerItem from "../../components/AnswerItem";
import CategoryTabs from '../../components/CategoryTabs'
// import { useDispatch, useSelector } from "react-redux";
const SingleQuestion = () => {
  // const isReplyFormOpen = useSelector(state=>state.isReply);
  // const dispatch = useDispatch();
const question=   {
        questionTitle: "আমি ২০২২ সালের এসএসসি পরীক্ষাথি আমার বাংলা প্রথম পেপারে থেকে 11 mcq হইছে আর বাংলা সেকেন্ড পেপারের দুইটা mcq হইছে আমি কি তাহলে পাস করতে পারবো?",
        answers: [
          {
            answerContent: "বাংলা ১ম পত্রের MCQ এ পাস করবেন কিন্তু বাংলা ২ য় পত্রে পাশ করতে হলে MCQ এ ৫ পেতে হবে।",
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
        questionAuthor: 'pnc-bikah',
        questionDate:'2021-09-12',
        answerCount: 23,
        views: 503,
        questionUpVotes: 161,
        questionDownVotes: 21,
        categories: [
            { name: "React" },
            { name: "JavaScript" },
            {name:'Internet'},
            {name:'Education'},
          ],
      };
    
    
  return (
    <div>
      <div className="flex flex-row align-middle items-center justify-center w-[80%] mx-auto">
        <div className="main-content w--full col-span-3 p-4 mr-4">
          <h3 className="text-2xl my-4">
            {question.questionTitle}
          </h3>
          <h5 className="text-lg">
            Asked By: <span className="text-red-700">{question.questionAuthor}</span>
            <span className="text-[#1E3A8A]"> {question.questionDate}</span>
          </h5>
          {/* {question.categories.map((category,index)=>{ */}
            {/* return (<CategoryTabs category={category} key={index}/>) */}
          {/* })} */}
   <CategoryTabs categories={question.categories} />
          {/* end category tabs  */}
          <UpDown upVotes={question.questionUpVotes} downVotes={question.questionDownVotes} views={question.views} />
          {/* end up-down vote & views count  */}
          <div className="answers-count text-xl font-semibold my-4">
            <h4 className="">{question.answerCount} Answers</h4>
          </div>
          {/* end of answer count  */}
          {question.answers.map(( answer,index)=>(
            <AnswerItem key={index} answer={answer} />
          )
          )}
       
       
        </div>
        <div className="right-sidebar col-span-2 p-5 bg-red-600">sdvmbfjv</div>
      </div>
    </div>
  );
};

export default SingleQuestion;
