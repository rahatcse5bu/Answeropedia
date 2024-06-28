// questionService.js
const single_question_api_endpoint = "https://rahat-question-answer.vercel.app/api/v1/questions/";

export const fetchSingleQuestion = async (id) => {
  try {
        const response = await fetch(single_question_api_endpoint + `${id}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
};
