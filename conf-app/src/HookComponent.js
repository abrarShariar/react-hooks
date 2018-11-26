import React, {useState, useEffect} from 'react';


const useRandomName = () => {
  const [name, setName] = useState("");

  useEffect(async () => {
    const result = await fetch('http://localhost:3001/test');
    const data = await result.json();
    setName(data.name);
  }, []);

  return {
    name,
    setName
  }
}

const TextBox = () => {
  const {name, setName} = useRandomName();
  return (
    <div>
        From TextBox: {name}
    </div>
  )
}

const TextBox1 = () => {
  const {name, setName} = useRandomName();
  return (
    <div>
      From TextBox1: {name}
    </div>
  );
}

const ParentComponent = () => {
  return (
    <div>
      <TextBox/>
      <TextBox1/>
    </div>
  )
}

export default ParentComponent;
