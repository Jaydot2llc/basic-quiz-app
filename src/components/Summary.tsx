import { useEffect, useState } from 'react';
import { getQuizData } from '../services/DataService.ts';  
import type { QuestionType } from '../services/DataService.ts';
import quizIsCompleteImage from '../assets/trophy2.jpg';

export default function Summary({ userAnswers }: { userAnswers: (string | null)[] }) {
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
        getQuizData().then((data) => setQuestions(data));
    }, []);
    
    const skippedAnswers: (string | null)[] = userAnswers.filter(answer => answer === null);
    const correctAnswers: (string | null)[] = userAnswers.filter((answer, index) => answer === questions[index].answers[0]);

    const skippedAnswersPercentage: number = Math.round((skippedAnswers.length / questions.length) * 100);
    const correctAnswersPercentage: number = Math.round((correctAnswers.length / questions.length) * 100);
    const incorrectAnswersPercentage: number = Math.round(100 - skippedAnswersPercentage - correctAnswersPercentage);
    return (
        <div id="summary">
            <img src={quizIsCompleteImage} alt="Quiz is completed" />
            <h2>Quiz is completed!</h2>
            <div id="summary-stats">
                <p>
                    <span className="number">{skippedAnswersPercentage}%</span>
                    <span className="text">skipped</span>
                </p>
                <p>
                    <span className="number">{correctAnswersPercentage}%</span>
                    <span className="text">correctly answered</span>
                </p>
                <p>
                    <span className="number">{incorrectAnswersPercentage}%</span>
                    <span className="text">incorrectly answered</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClasses = 'user-answer';

                    if(answer === null) {
                        cssClasses += ' skipped';
                    } else if(answer === questions[index].answers[0]) {
                        cssClasses += ' correct';
                    } else {
                        cssClasses += ' incorrect';
                    }
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className="question">{questions[index].text}</p>
                            <p className={cssClasses}>{answer ?? 'skipped'}</p>
                        </li>
                    );
                }
                )}
            </ol>
        </div>
    )
}