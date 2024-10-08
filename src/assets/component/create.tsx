import { useState } from "react";
import "../../App.scss";

type CreateProps = {
  CreateTodo: (todo:string)=>void
}

export default function Create({ CreateTodo }:CreateProps) {

  const [addTodo, setAddTodo] = useState(true)

  const [inputs, setInputs] = useState({
    todo: "",
  });

  const { todo } = inputs;

  function newTodo(e:any) {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  }

  function createBtn() {
    CreateTodo(todo);
    setInputs({
      todo: "",
    });
    setAddTodo(!addTodo)
  }

  function addTodoBtn(){
    setAddTodo(!addTodo)
  }

  return (
    <>
    {addTodo?
    (<div className="newTaskBtn" onClick={addTodoBtn}>+ New Task</div>)
    :(
       <div className="create_wrap">
       <input type="text" name="todo" value={todo} onChange={newTodo} />
       <div onClick={createBtn} className="addBtn">Add task</div>
     </div>
    )}
    </>
  );
}
