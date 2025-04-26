import React from 'react'

const CorrectAnswer = ({answer, answers}) => {

  return (
    <div className='bg-red-500 w-fit text-white px-2 rounded-sm'>
      {
        answer != null ? 
          <p>Correct Answer : {answer}</p> : 
          <div>
            <p>Correct answers : </p>
            {
              answers.map((crtAns,index) => (
                <p key={index}>{crtAns}</p>
              ))
            }
          </div>
      }
    </div>
  )
}

export default CorrectAnswer
