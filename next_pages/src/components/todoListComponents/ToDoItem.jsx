import { useState } from "react";

function ToDoItem(props) {
  const [completed, setCompleted] = useState(props.completed);
  return (
    <div className="todoItem">
      <li
        onClick={() => {
          setCompleted((prev) => !prev);

          //////setting the completting of the todo in the server

          props.onToggleCompletion(props.id);

          //////////////
        }}
        className={`li ${completed ? `completed` : ``}`}
      >
        {props.text}
      </li>
      <button
        className="button deleteBtn"
        onClick={() => {
          props.onDelete({
            index: props.index,
            id: props.id,
            completed: completed,
          });
        }}
      >
        <span className="span">delete</span>
      </button>
    </div>
  );
}

export default ToDoItem;
