import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdDeleteForever } from "react-icons/md";

export const TodoDeleteAndCheck = ({data, checked, onDeleteTask ,onHandleCheck}) => {
  return (
    <li className="todo-item">
      <span className={checked ? "checkList":"notCheckList"}>{data}</span>
      <button className="check-btn" onClick = {()=> onHandleCheck(data)}>
        <IoMdCheckmarkCircle />
      </button>
      <button className="delete-btn" onClick={() => onDeleteTask(data)}>
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
