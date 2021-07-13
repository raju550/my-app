import "./App.css";
import React, { useState, useEffect } from "react";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <IncreaseBtn></IncreaseBtn>
        <Users></Users>
      </header>
    </div>
  );
}
function IncreaseBtn() {
  const [count, setCount] = useState(10);
  const handleClick = () => {
    const newCount = count + 1;
    setCount(newCount);
  };
  return (
    <div>
      <h1>HEllo world</h1>
      <h1>Count:{count}</h1>
      <button onClick={handleClick}>increase</button>
      <button onClick={() => setCount(count - 1)}>decreases</button>
      <button onClick={() => setCount(0)}>reset</button>
    </div>
  );
}
function Users() {
  const [user, setUser] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, []);

  return (
    <div>
      <h1>hello world {user.length}</h1>
      <ul>
        {console.log(user)}
        {user.map((users) => {
          return (
            <div>
              <li>{users.email}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
