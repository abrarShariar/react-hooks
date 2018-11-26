import React, { useState, useEffect } from 'react';

const useRandomName = () => {
  const [text, setText] = useState();

  useEffect(async () => {
    const result = await fetch('http://localhost:3001/test');
    const data = await result.json();
    setText(data.name);
  }, []);

  return {
    text,
    setText
  }
}

const TestBox1 = () => {
  const {text, setText} = useRandomName();
  return (
    <p>From TestBox1: {text}</p>
  )
}

const TestBox2 = () => {
  const {text, setText} = useRandomName();
  return (
    <p>From TestBox2: {text}</p>
  )
}

const InputBox = () => {
  return (
    <div>
      <TestBox1/>
      <TestBox2/>
    </div>
  )
}

export default InputBox;
