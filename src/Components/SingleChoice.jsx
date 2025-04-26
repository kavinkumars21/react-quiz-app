import React from 'react'

const SingleChoice = ({options, question}) => {
  return (
    <div>
      {
        options.map((option,index) => (
          <div key={index}>
            <label>
              <input type='radio' value={option} name={question} />
              {option}
            </label>
          </div>
        ))
      }
    </div>
  )
}

export default SingleChoice
