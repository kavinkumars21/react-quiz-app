import React from 'react'
import Question from './Question'
import Options from './Options'
import CorrectAnswer from './CorrectAnswer'

const QuizCard = ({mcq}) => {
  
  return (
    <>
    {
      mcq.map((mcq,index) => (
        <div key={index} className='mb-10 flex flex-col bg-amber-200'>
          <div>
            <Question questions = {mcq.question} />
          </div>
          <div className='mb-5'>
            <Options options = {[mcq.type, mcq.options, mcq.question]} />
          </div>
          <div>
            <CorrectAnswer answer = {mcq.correct_answer} answers = {mcq.correct_answers} />
          </div>
        </div>
      ))
    }
    </>
  )
}

export default QuizCard
