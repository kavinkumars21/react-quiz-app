import React from 'react'

const Question = ({ questions, type }) => {

  const questionSplit = questions.split('```');
  
  return (
    <div className='text-lg'>
      {type === 'code_snippet' ? 
      <div>
        {questionSplit[0]}
        <div>
          <pre>
            <code>
              {questionSplit[1]}
            </code>
          </pre>
        </div>
      </div>
      :
      <div>
        {questions}
      </div>
      }
    </div>
  )
}

export default Question
