import { createContext, useEffect, useState } from 'react';
import { getQuizData } from '../services/DataService.ts';  
import type { QuestionType } from '../services/DataService.ts';
// import QUESTIONS from '../data/reactQuestions.ts';

export const QuestionsContext = createContext<{
    questions: QuestionType[];
}>({
    questions: null as unknown as QuestionType[],
});

import { ReactNode } from 'react';

export function QuestionsContextProvider({ children }: { children: ReactNode }) {
    const [questions, setQuestions] = useState<QuestionType[]>([]);

    useEffect(() => {
        const loadData = async () => {
          try {
            const data: QuestionType[] = await getQuizData();
            console.log('Data:', data);
            setQuestions(data);
          } catch (error) {
            console.error('Failed to fetch items', error);
          }
        };
    
        loadData();
        console.log('Questions:', questions);
      });

    const contextValue = {
        questions: questions,
    }

    return <QuestionsContext.Provider value={contextValue}>{children}</QuestionsContext.Provider>;
}