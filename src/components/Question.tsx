import { use } from 'react';
import { useState } from 'react';
import QuestionTimer from './QuestionTimer.tsx';
import Answers from './Answers.tsx';
import { QuestionsContext } from '../store/questions-context.tsx';

interface QuestionProps {
    questionIndex: number;
    onAnswerSelected: (answer: string) => void;
    onSkipAnswer: () => void;
}

interface Answer {
    selectedAnswer: string | null;
    isCorrect: boolean | null;
}

const MAX_TIME = 15000;
const TIME_TO_ANSWER = 1000;
const TIME_TO_NEXT_QUESTION = 2000;

export default function Question({ questionIndex, onAnswerSelected, onSkipAnswer } : QuestionProps) {
    const [answer, setAnswer] = useState<Answer>({selectedAnswer: '', isCorrect: null});
    const { questions } = use(QuestionsContext);
    console.log('Question index:', questionIndex);
    console.log('Question:', questions);

    let timer = MAX_TIME;

    if(answer.selectedAnswer) {
        timer = TIME_TO_ANSWER;
        console.log("Timer set to answer time: " + timer);
    }

    if(answer.isCorrect !== null) {
        timer = TIME_TO_NEXT_QUESTION;
        console.log("Timer set to next question time: " + timer);
    }

    function handleAnswerSelected(answer: string) {
        console.log('Answer selected is:', answer);
        setAnswer({
            selectedAnswer: answer,
            isCorrect: null
        } as Answer);

        setTimeout(() => {
            setAnswer({
                selectedAnswer: answer,
                isCorrect: questions[questionIndex].answers[0] === answer
            } as Answer);

            setTimeout(() => {
                onAnswerSelected(answer);  // Need to pass selected answer back to the Quiz component
            }, TIME_TO_NEXT_QUESTION);
        }, TIME_TO_ANSWER);
    }

    let answerState: string | null = '';

    if(answer.selectedAnswer  && answer.isCorrect !== null) {
        answerState = answer.isCorrect ? "correct" : "incorrect";
    } else if(answer.selectedAnswer) {
        answerState = "answered";
    }

    return (
        <div>
            <QuestionTimer
                key={timer}
                timeout={timer} 
                onTimeout={answer.selectedAnswer === '' ? onSkipAnswer : () => {}}
                mode={answerState} />
            <h2 className="mt-4">{questions[questionIndex].text}</h2>
            <Answers 
                answers={questions[questionIndex].answers} 
                onAnswerSelected={handleAnswerSelected} 
                answerState={answerState} 
                selectedAnswer={answer.selectedAnswer} />
        </div>
    );
}