import React from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { setAuthTrue, setAuthFalse } from "../../store/index";

function Index() {
  const dispatch = useDispatch();
  return (
    <>
      <button
        onClick={() => {
          dispatch(setAuthTrue());
          console.log(state)
        }}
      >
        click me
      </button>
      <div>index</div>
    </>
  );
}

export default Index;
