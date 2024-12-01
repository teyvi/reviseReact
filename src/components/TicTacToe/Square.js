import {useState} from "react";

function Square({value , onSquareClick}) {


  return (
    <div>
      <div>
        <button className="square" onClick={onSquareClick}>{value}</button>
      </div>
    </div>
  );
}

export default Square;
