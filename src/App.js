import "./App.css";
import React, { useState, useEffect } from "react";
import Country from "./Country";
import Cart from "./Cart";
function App() {
  const [countries, setCountries] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleClick = (country) => {
    const newCart = [...cart, country];
    setCart(newCart);
  };
  return (
    <div className="App">
      <h2>country load:{countries.length}</h2>
      <h2>Country added:{cart.length}</h2>
      <Cart cart={cart}></Cart>
      {countries.map((country) => (
        <Country
          name={country.name}
          population={country.population}
          flag={country.flag}
          region={country.region}
          handleClick={handleClick}
        >
          {countries.name}
        </Country>
      ))}
      <header className="App-header">
        <IncreaseBtn></IncreaseBtn>
        <Users></Users>
        <UserData name="Polack"></UserData>
        <UserData name="raju"></UserData>
        <UserData name="rofiq"></UserData>
        <UserData name="ismail"></UserData>
        <RandomUser></RandomUser>
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
        {/* {console.log(user)} */}
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
function UserData(props) {
  return (
    <div>
      <h1>My name {props.name}</h1>
    </div>
  );
}
function RandomUser() {
  const [names, setName] = useState([]);
  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((res) => res.json())
      .then((data) => setName(data.results));

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h1>This is our result</h1>
      <ul>
        {/* {console.log(user)} */}
        {names.map((nam) => {
          return (
            <div key={nam.login.username}>
              {/* {console.log(nam)} */}
              <li>{nam.email}</li>
              <li>{nam.cell}</li>
              <li>{nam.location.city}</li>
            </div>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
