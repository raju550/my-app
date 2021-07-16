import React from "react";

function Country(props) {
  const { name, population, region, flag } = props;
  const handleClickAdd = props.handleClick;
  return (
    <div>
      <h3>This is {name}</h3>
      <img src={flag} alt="" style={{ width: "100px" }} />
      <p>{props.population}</p>
      <p>Area:{props.region}</p>
      <button onClick={() => handleClickAdd(props)}>Add Country</button>
    </div>
  );
}

export default Country;
