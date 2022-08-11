import { useDispatch } from "react-redux";
import { deleteToDoItem } from "../features/todoSlice";

interface ToDoItemTypes {
  index: number;
  toDoItem: string;
}

const ToDoItem = ({ index, toDoItem }: ToDoItemTypes) => {
  const dispatch = useDispatch();

  const handleDeleteToDoItem = () => {
    dispatch(deleteToDoItem(index));
  };

  return (
    <div>
      <li>
        {toDoItem}
        <button className="float-right" onClick={handleDeleteToDoItem}>
          Delete
        </button>
      </li>
    </div>
  );
};

export default ToDoItem;
