"use client";
import React, { useState } from "react";
import List from "./List";

const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== "") {
      const newTask = {
        id: Date.now(), // Use a unique identifier
        text: inputValue,
      };
      setTasks([...tasks, newTask]);
      setInputValue("");
    }
  };

  const toggleCompletion = (taskId) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="bg-slate-700 p-20 rounded-lg">
        <div className="pb-4 text-2xl border-b-4">
          <h1>To do list</h1>
        </div>
        <div className="pb-4 border-b-4">
          <h2>Add Item</h2>
          <form onSubmit={handleFormSubmit}>
            <input
              className="text-black"
              type="text"
              id="myInput"
              placeholder="What needs to be done?"
              value={inputValue}
              onChange={handleInputChange}
            />
            <button type="submit" className="bg-black">
              Submit
            </button>
          </form>
        </div>
        <div>
          <List
            items={tasks}
            completedItems={tasks
              .filter((task) => task.completed)
              .map((task) => task.id)}
            toggleCompletion={toggleCompletion}
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
