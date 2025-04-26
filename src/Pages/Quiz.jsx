import React, { useState } from 'react'
import QuizCard from '../Components/QuizCard'
import questions from '../Util/Quiz.json'

const Quiz = () => {

  const [count, setCount] = useState(0);
  return (
    <div>
      <div className='ml-[20%]'>
        Question : {count + 1}
      </div>
      <div>
        <QuizCard mcq = {[questions[count]]}/>
      </div>
      <div className='flex justify-center gap-40'>
        <button 
        className='bg-gray-500 px-16 py-1 rounded-sm text-white hover:bg-gray-700 hover:cursor-pointer'
        onClick={() => count <= 0 ? setCount(questions.length - 1) : setCount(count - 1)}>
          Previouse
        </button>
        <button 
        className='bg-gray-500 px-16 py-1 rounded-sm text-white hover:bg-gray-700 hover:cursor-pointer'
        onClick={() => count >= questions.length - 1 ? setCount(0) : setCount(count + 1)}>
          Next
        </button>
      </div>
    </div>
  )
}

export default Quiz
