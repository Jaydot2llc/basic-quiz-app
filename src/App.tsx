import Header from './components/Header'
import Quiz from './components/Quiz'
import { QuestionsContextProvider } from './store/questions-context';

export default function App() {

  return (
    <>
      <QuestionsContextProvider>
        <Header />
        <main className="flex flex-col items-center mx-auto px-0 md:px-4">
          <Quiz />
        </main>
      </QuestionsContextProvider>

    </>
  )
};