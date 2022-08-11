import React, { ChangeEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addToDoItem } from "../features/todoSlice";

const InputArea = () => {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();

  const handleAddToDoItem = () => {
    if (!inputText) return;
    dispatch(addToDoItem(inputText));
    setInputText("");
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const newValue = e.target.value;
    setInputText(newValue);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputText} />
      <button onClick={handleAddToDoItem}>
        <span>Add</span>
      </button>
    </div>
  );
};

export default InputArea;
