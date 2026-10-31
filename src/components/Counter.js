
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../redux/actions";

function Counter() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();

  return (
    <div className="counter-box">
      <h2>Redux Counter: {count}</h2>

      <button onClick={() => dispatch(increment())}>
        Increment (+)
      </button>

      <button onClick={() => dispatch(decrement())}>
        Decrement (-)
      </button>
    </div>
  );
}

export default Counter;
