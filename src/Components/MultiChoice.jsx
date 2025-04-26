import React from 'react'

const MultiChoice = ({ options, question }) => {
  
  return (
    <div>
    {
      options.map((option,index) => (
        <div key={index}>
          <label>
            <input type='checkbox' value={option} name={question} />
            {option}
          </label>
        </div>
      ))
    }
    </div>
  )
}

export default MultiChoice
