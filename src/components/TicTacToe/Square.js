import React from "react";

function Square({value}) {
  function handleClick(){
    console.log("clicked!")
  }
  return (
    <div>
      <div>
        <button className="square"
        onClick={handleClick}
        >{value}</button>
      </div>
    </div>
  );
}

export default Square;
