import React, { useState, useEffect } from 'react';

const HookComponent = () => {
  const [posts, setPosts] = useState([]);

  useEffect(async () => {
    const result = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await result.json();
    setPosts(data);
  });

  return (
    <div>
      {posts.map(post => <h1>{post.title}</h1>)}
    </div>
  )
}


// const HookComponent = () => {
//   const [username, setUsername] = useState('Abrar');
//   const [count, setState] = useState();
//   const handleChange = (e) => {
//     setUsername(e.target.value);
//   }
//
//   return (
//     <div>
//       <input name="userName" value={username} onChange={handleChange}/>
//       <p>{username}</p>
//       <p>From HookComponent: {count}</p>
//     </div>
//   )
// }


const HookComponent2 = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(999);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}




export { HookComponent, HookComponent2 };
