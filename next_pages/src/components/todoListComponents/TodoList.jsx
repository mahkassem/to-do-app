import { useState } from "react";
import ToDoItem from "./ToDoItem";
import InputArea from "./InputArea";

function TodoList(props) {
  const [items, setItems] = useState(props.items);

  function addItem(input) {
 
    props.onAdd(input, setItems);
  }

  function deleteItem({index,id,completed}) {
    setItems((prevItems) => {
      return prevItems.filter((item, i) => {
        return i !== index;
      });
    });

    props.onDelete(id);
  }

  function toggleCompletion(id){
    props.toggleCompletion(id);
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <InputArea onClick={addItem} />
      <div>
        <ul>
          {items.length > 0 &&
            items[0].task.length > 0 &&
            items.map((todoItem, index) => {
           
              return (
                <ToDoItem
                  key={todoItem.id}
                  id={todoItem.id}
                  index={index}
                  text={todoItem.task}
                  onChecked={deleteItem}
                  onDelete={deleteItem}
                  onToggleCompletion={toggleCompletion}
                  completed={todoItem.completed}
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
