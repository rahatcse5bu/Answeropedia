'use client'
import React, { useState } from "react";

const QuestionCard = ({data}) => {
const [isMenu,setMenu]=useState(false);
  return (
    <div className="question-card w-full">
      {/* <div className="a">Delete</div> */}
      <div className=" flex flex-row items-center justify-between mx-2 my-4 p-4 rounded-xl border border-gray-300">
<div className="col-left">
<h3 className="text-black px-2 py-2">
        {data.questionTitle}
        </h3>
        <p className="px-2 my-2 text-gray-600">
     {data?.answers?.[0]?.answerContent}
        </p>
        <div className="ans-view flex flex-row items-center justify-start px-2">
          <div className="">{data.answerCount} Answers {data.views} views</div>
        </div>
</div>
<div className="col-right relative">
  <div className="rotate-90 text-2xl cursor-pointer" onClick={()=>setMenu(!isMenu)}>...</div>
  {/* Dialog Box  */}
  {isMenu &&(
    <div id="editMenu" class="absolute right-0 mt-2 px-4 py-2 w-[120px] bg--gray-300 border border-gray-300 rounded-md shadow-2xl z-20">
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Edit</a>
        <a href="#" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Delete</a>
    </div>
    )}
</div>
      </div>
    </div>
  );
};

export default QuestionCard;
