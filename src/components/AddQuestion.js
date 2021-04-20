import React, { useState } from 'react';
import './NavCs.css';

const AddQuestion = (props) => {
  const [question, setName] = useState('');

  const handleValueChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question === '') return;
    setName('');
  };
  return (
    <div>
      <div className='add-question'><h3>Ask Questions!!</h3></div>
      <form onSubmit={handleSubmit}>
      <h3>question:
        <input
          className='addQuestion'
          type='textarea'
          size={100}
          placeholder='Question'
          value={question}
          onChange={handleValueChange}
        />
        </h3>
        
        <input className='addSubmit' type='submit' value='Add Question' />
      </form>
    </div>
  );
};

export default AddQuestion;