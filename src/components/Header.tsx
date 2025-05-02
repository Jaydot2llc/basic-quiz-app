import logoImg from '../assets/quiz_icon_bw.jpg';
import { QUIZ_TITLE } from '../services/DataService';

export default function Header() {
  return (
    <header className="flex flex-col items-center py-4">
        <img aria-label="quiz logo" className="mb-4" src={logoImg} alt="Quiz Logo" />
        <h1 className='text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-slate-500 to-stone-500'>{QUIZ_TITLE}</h1>
    </header>
  )
}