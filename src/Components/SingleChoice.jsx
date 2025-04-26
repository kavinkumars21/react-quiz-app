import React, { useState } from 'react'
import CorrectAnswer from './CorrectAnswer';

const SingleChoice = ({ options, question, crtAnswers }) => {

  const [correct, setCorrect] = useState();
  const [wrong, setWrong] = useState();
  const [disabled, setDisabled] = useState();

  const handleChoosen = (e) => {
    const choosenAns = e.target.value
    if(choosenAns === crtAnswers) {
      setCorrect(true)
      setDisabled(true)
    } else {
      setWrong(true)
      setDisabled(true)
    }
  }
  
  return (
    <div>
      <div>
        {
          options.map((option,index) => (
            <div key={index}>
              <label>
                <input type='radio' value={option} name={question} onChange={handleChoosen} disabled={disabled} />
                {option}
              </label>
            </div>
          ))
        }
      </div>
      {
        wrong && <CorrectAnswer answer = {crtAnswers} />
      }
      {
        correct && <div className='font-extrabold text-green-600'>Correct</div>
      }
    </div>
  )
}

export default SingleChoice
