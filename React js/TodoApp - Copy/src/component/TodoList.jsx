import { useState, useEffect } from 'react';
import { Clock } from './Clock';
import './Todo.css';
import { TodoForm } from './TodoForm';
import { TodoDeleteAndCheck } from './TodoDeleteAndCheck';
import { getSLocalStorageData, setSLocalStorageData } from './TodoLocalStorage';

// Load tasks from localStorage on component mount
export const TodoList = () => {
  const [task, setTask] = useState(() => getSLocalStorageData());
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    setSLocalStorageData(task);
  }, [task]);

  const handleFormSubmit = inputValue => {
    const { id, content, checked } = inputValue;
    if (!content.trim()) return;

    // Avoid adding duplicate task content
    const ifTodoContentMatched = task.find(curTask => curTask.content === content);
    if (ifTodoContentMatched) return;

    setTask(prevTask => [...prevTask, { id, content, checked }]);
  };

  // Function to delete a task based on its content
  const deleteTask = value => {
    const updatedTasks = task.filter(curTask => curTask.content !== value);
    setTask(updatedTasks);
  };

  // Clear all tasks
  const handleClearTodoData = () => {
    setTask([]);
  };

  const handleCheckedTodo = content => {
    const updatedTasks = task.map(curTask => {
      if (curTask.content === content) {
        return { ...curTask, checked: !curTask.checked };
      }
      return curTask;
    });
    setTask(updatedTasks);
  };

  const filteredTasks = task.filter(curTask => {
    if (filter === 'active') return !curTask.checked;
    if (filter === 'completed') return curTask.checked;
    return true;
  });

  const remainingTasks = task.filter(curTask => !curTask.checked).length;

  return (
    <section className="todo-container">
      <header>
        <h1>Todo List</h1>
        <div className="date-time">
          <Clock />
        </div>
      </header>

      <TodoForm onAddTodo={handleFormSubmit} />

      <div className="todo-filters">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => setFilter('all')}
        >
          All
        </button>
        <button
          className={`filter-btn ${filter === 'active' ? 'active' : ''}`}
          onClick={() => setFilter('active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => setFilter('completed')}
        >
          Completed
        </button>
      </div>

      <section className="myUnOrdList">
        <ul>
          {filteredTasks.map(curTask => (
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

      <div className="todo-footer">
        <span className="todo-count">{remainingTasks} items left</span>
        <button className="clear-btn" onClick={handleClearTodoData}>
          Clear all
        </button>
      </div>
    </section>
  );
};
