import { IoMdCheckmarkCircle } from 'react-icons/io';
import { MdDeleteForever } from 'react-icons/md';

export const TodoDeleteAndCheck = ({ data, checked, onDeleteTask, onHandleCheck }) => {
  const handleKeyPress = (event, action) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      action();
    }
  };

  return (
    <li className="todo-item">
      <span
        className={checked ? 'checkList' : 'notCheckList'}
        onClick={() => onHandleCheck(data)}
        onKeyPress={e => handleKeyPress(e, () => onHandleCheck(data))}
        role="button"
        tabIndex={0}
        aria-label={`Mark task "${data}" as ${checked ? 'incomplete' : 'complete'}`}
      >
        {data}
      </span>
      <button
        className="check-btn"
        onClick={() => onHandleCheck(data)}
        aria-label={`Mark task "${data}" as ${checked ? 'incomplete' : 'complete'}`}
      >
        <IoMdCheckmarkCircle />
      </button>
      <button
        className="delete-btn"
        onClick={() => onDeleteTask(data)}
        aria-label={`Delete task "${data}"`}
      >
        <MdDeleteForever />
      </button>
    </li>
  );
};

// export const Delete = ({ task, onDeleteTask }) => (
//   <li className="todo-item">
//     <span>{task}</span>
//     <button className="check-btn">
//       <IoMdCheckmarkCircle />
//     </button>
//     <button className="delete-btn" onClick={() => onDeleteTask(task)}>
//       <MdDeleteForever />
//     </button>
//   </li>
// );
