import { useState, useEffect } from "react";
import { Clock } from "./Clock";
import "./Todo.css";
import { TodoForm } from "./TodoForm";
import { TodoDeleteAndCheck } from "./TodoDeleteAndCheck";
import { getSLocalStorageData , setSLocalStorageData} from "./TodoLocalStorage";


// Load tasks from localStorage on component mount
export const TodoList = () => {
  const [task, setTask] = useState(() =>getSLocalStorageData());


  const handleFormSubmit = (inputValue) => {
    const { id, content, checked } = inputValue;
    if (!content.trim()) return;

    // Avoid adding duplicate task content
    const ifTodoContentMatched = task.find((curTask) => curTask.content === content);
    if (ifTodoContentMatched) return;

    setTask((prevTask) => [...prevTask, { id, content, checked }]);
  };


  // //todo add data to localStorage
  // localStorage.setItem(todoKey, JSON.stringify(task));
  setSLocalStorageData(task);
  

  // Function to delete a task based on its content
  const deleteTask = (value) => {
    const updatedTasks = task.filter((curTask) => curTask.content !== value);
    setTask(updatedTasks);
  };

  // Clear all tasks
  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = (content) => {
    const updatedTasks = task.map((curTask) => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTask(updatedTasks);
  };

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <div className="date-time">
          <Clock />
        </div>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <section className="myUnOrdList">
        <ul>
          {task.map((curTask) => (
            <TodoDeleteAndCheck
              key={curTask.id}
              data={curTask.content}
              checked={curTask.checked}
              onDeleteTask={deleteTask}
              onHandleCheck={handleCheckedTodo}
            />
          ))}
        </ul>
      </section>

      <section>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </section>
    </section>
  );
};
