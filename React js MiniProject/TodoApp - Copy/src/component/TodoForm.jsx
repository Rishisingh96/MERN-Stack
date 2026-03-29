import { useState } from 'react';

export const TodoForm = ({ onAddTodo }) => {
  const [inputValue, setInputValue] = useState({});
  const [error, setError] = useState('');

  const handleInputChange = value => {
    setInputValue({ id: Date.now(), content: value, checked: false });
    setError('');
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    if (!inputValue.content || !inputValue.content.trim()) {
      setError('Please enter a task');
      return;
    }

    onAddTodo(inputValue);
    setInputValue({ id: '', content: '', checked: false });
    setError('');
  };

  return (
    <section className="form">
      <form onSubmit={handleFormSubmit}>
        <div className="input-group">
          <input
            type="text"
            className={`todo-input ${error ? 'error' : ''}`}
            autoComplete="off"
            placeholder="What needs to be done?"
            value={inputValue.content || ''}
            onChange={event => handleInputChange(event.target.value)}
          />
          {error && <span className="error-message">{error}</span>}
        </div>
        <div>
          <button type="submit" className="todo-btn">
            Add task
          </button>
        </div>
      </form>
    </section>
  );
};
