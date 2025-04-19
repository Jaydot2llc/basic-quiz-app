import { useState, useCallback } from 'react';
import QUESTIONS from '../data/htmlQuestions.ts';
import Question from './Question.tsx';
import Summary from './Summary.tsx';

export default function Quiz() {
    const [userAnswers, setUserAnswers] = useState<(string | null)[]>([]);

    const activeQuestionIndex: number = userAnswers.length;
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer: string | null) {
        console.log('Answer selected is:', selectedAnswer);
        setUserAnswers((previousUserAnswers) => {
            return [...previousUserAnswers, selectedAnswer];
        });
    }, []);

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer]);

    if(quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    } else {
        return (
            <div className="quiz-container">
                <div className="flex flex-col items-center font-mono max-w-3xs md:max-w-screen">
                    <h1 className="text-3xl font-bold uppercase mb-2">Quiz</h1>
                    <Question 
                        key={activeQuestionIndex} 
                        questionIndex={activeQuestionIndex}
                        onAnswerSelected={handleSelectAnswer} 
                        onSkipAnswer={handleSkipAnswer} />
                </div>
            </div>
        )
    }
}