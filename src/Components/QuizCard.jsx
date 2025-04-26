import React from 'react'
import Question from './Question'
import Options from './Options'
import CorrectAnswer from './CorrectAnswer'

const QuizCard = ({ mcq }) => {
  
  return (
    <>
    {
      mcq.map((mcq,index) => (
        <div key={index} className='mb-10 flex flex-col items-center'>
            <div className='w-[60%]'>
                <div>
                    <Question questions = {mcq.question} type = {mcq.type} />
                </div>
                <div className='mt-5'>
                    <Options options = {[mcq.type, mcq.options, mcq.question, mcq.correct_answer]} />
                </div>
                {/* <div>
                    <CorrectAnswer answer = {mcq.correct_answer} answers = {mcq.correct_answers} />
                </div> */}
            </div>
        </div>
      ))
    }
    </>
  )
}

export default QuizCard
