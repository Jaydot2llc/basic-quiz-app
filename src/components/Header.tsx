import logoImg from '../assets/quiz-logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center py-4">
        <img className="mb-4" src={logoImg} alt="Quiz Logo" />
        <h1 className="text-6xl font-bold uppercase bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-500">HTML Quiz</h1>
    </header>
  )
}