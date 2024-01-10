import { useState, useEffect } from "react";
import UpDown from "./UpDown";
import { setAuthState,setAuthUsers } from "../store/authSlice";
import { setIsReply } from "@/store/slices/questions/QuestionSlices";
// import { useAppSelector, useAppDispatch } from '../store/hooks';
import { useDispatch, useSelector } from "react-redux";

const AnswerItem = ({ answer }) => {
  //  console.log(answer)
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth.authState);
  const is_reply = useSelector((state) => state.question.isReply);
  const my_users = useSelector((state) => state.auth.users);

  useEffect(() => {
    console.log("authState changed: ", authState);
  }, [authState]);

  useEffect(() => {
    console.log("is-reply is 2: " + is_reply);
  }, [is_reply]);

  const toggleReply = () => {
    const user_api_endpoint = "https://jsonplaceholder.typicode.com/users";
    fetch(`${user_api_endpoint}`)
      .then((response) => response.json())
      .then((data) => {
        //console.log(data);
        if (data) {
          dispatch(setAuthUsers(data ));
          // console.log('data=>',data)
         
        } else {
          alert("Error getting username");
        }
      });

    // dispatch(setIsReply(!is_reply));
  };
  return (
    <div
      onClick={() => dispatch(setAuthState(!authState))}
      className="bg-green--700"
    >
      <div className="answer p-2 my-4 border rounded-md">
        <div className="ans-author flex flex-row items-start justify-start">
          <div className="h-8 w-8 border bg-[#1E3A8A] text-white font-medium rounded-full text-center align-middle">
            {answer.answerAuthor[0]}
          </div>
          <div className="author-name">
            <h5 className="font-medium ml-3">{answer.answerAuthor}</h5>
            <p className="text-sm text-gray-600 mt-1">
              Member since {answer.answerDate}
            </p>
          </div>
        </div>
        {/* end author section  */}
        <UpDown upVotes={answer.answerUpVotes} downVotes={answer.answerDownVotes} />
        <div className="answer-content">
          <p className="text-gray-700 p-2">{answer.answerContent}</p>
          <div
            className="cursor-pointer px-4 py-2 bg-slate-700 rounded-lg"
            onClick={() => toggleReply()}
          >
            {" "}
            Hello Toggle
          </div>
        </div>
        <div className="bg-green-300 p-4">
          {my_users.map((user,index)=>{
          return (<p key={index}>{user.username}</p>);
        })}
        </div>
      </div>

    </div>
  );
};

export default AnswerItem;
