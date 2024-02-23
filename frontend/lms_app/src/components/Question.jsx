import React from 'react';

const Question = ({ question, options }) => {
  return (
    <div className="mb-4 ">
      <h2 className="text-lg font-bold mb-2">{question}</h2>
      {options.map((option, index) => (
        <div key={index} className="flex items-center mb-2">
          <input type="radio" id={`option${index}`} name={question} value={option} />
          <label htmlFor={`option${index}`} className="ml-2">{option}</label>
        </div>
      ))}
    </div>
  );
};

export default Question;
