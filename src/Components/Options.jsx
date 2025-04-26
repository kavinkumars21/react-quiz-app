import React from 'react'
import SingleChoice from './SingleChoice';
import MultiChoice from './MultiChoice';
import TrueOrFalse from './TrueOrFalse';
import CodeSnippet from './CodeSnippet';

const Options = ({ options }) => {

  if(options[0] === 'single_choice') {
    return (
      <SingleChoice options = {options[1]} question = {options[2]} />
    )
  } else if (options[0] === 'multiple_choice') {
    return (
      <MultiChoice options = {options[1]} question = {options[2]} /> 
    )
  } else if (options[0] === 'true_false') {
    return (
      <TrueOrFalse options = {options[1]} />
    )
  } else {
    return (
      <CodeSnippet options = {options[1]} question = {options[2]} />
    )
  }
}

export default Options
