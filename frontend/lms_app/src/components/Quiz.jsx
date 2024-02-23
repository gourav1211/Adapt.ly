import React from 'react';
import Question from './Question';
import { Link } from 'react-router-dom';

const Quiz = () => {
  const questions = [
    {
      question: 'Question 1',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    {
      question: 'Question 2',
      options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    },
    // questions 
  ];

  return (
    <div className='items-center justify-center ml-50'>
        <Link to='/quiz'>
      {questions.map((question, index) => (
        <Question key={index} question={question.question} options={question.options} />
      ))}
      </Link>
    </div>
  );
};

export default Quiz;
