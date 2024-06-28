import { createSlice } from "@reduxjs/toolkit";
const initialState ={
    isReply: false,
    isAddQuestion: false,
    questionTitle:'',
    questions: [],
    singleQuestion:[]
}
// Actual Slice
export const questionSlice = createSlice({
  name: "question",
  initialState,
  reducers: {
    // Action to set the authentication status
    setIsReply: (state, action) => {
      return {
        ...state, isReply: action.payload
      }
    },
    setIsAddQuestion: (state, action) => {
      return {
        ...state, isAddQuestion: action.payload
      }
    },
    setQuestionTitle: (state, action) => {
      return {
        ...state, questionTitle: action.payload
      }
    },

    setAllQuestions: (state, action) => {
      return {
        questions: action.payload
      }
    },
    setGlobalSingleQuestion: (state, action) => {
      return {
        singleQuestion: action.payload
      }
    },
  },

});

export const { setIsReply,setIsAddQuestion,setQuestionTitle,setAllQuestions, setGlobalSingleQuestion } = questionSlice.actions;


// export const selectIsReply = (state) => state.question.isReply;

export default questionSlice.reducer;