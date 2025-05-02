import QUESTIONS from '../data/reactQuestions.ts';

export interface QuestionType {
    id: string;
    text: string;
    answers: string[];
}

export async function getRemoteQuizData() {
    return await fetch('https://www.quizdb.com/api/json/v1/1/search.php?s=Arrabiata')
      .then((response) => response.json())
      .then((data) => data.meals);
}   

export async function getQuizData() {
    const questions: QuestionType[] = QUESTIONS;
    console.log('Questions:', questions);
    return questions;
}