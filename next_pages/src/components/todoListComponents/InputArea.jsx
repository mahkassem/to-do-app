import React from "react";

function InputArea(props) {
  const [inputText, setInputText] = React.useState("");

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input
        className="input"
        onChange={handleChange}
        type="text"
        value={inputText}
      />
      <button
        className="button"
        onClick={() => {
          if(inputText.trim()){

          props.onClick(inputText);
          setInputText(``);
          }
        }}
      >
        <span className="span">Add</span>
      </button>
    </div>
  );
}

export default InputArea;
