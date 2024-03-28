import React, { useEffect, useState } from "react";
import { addtask, getTASKS } from "../Redux/Task_Redux/action";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import toast from "react-hot-toast";

const Task = () => {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks.data);

  const [filteredTasks, setFilteredTasks] = useState("");

  const [taskData, settaskData] = useState({
    title: "",
    description: "",
    status: false,
    priority: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    settaskData({
      ...taskData,
      [name]: value,
    });
  };
  const submitTaskData = () => {
    dispatch(addtask(taskData));
    console.log(taskData);
    settaskData({
      title: "",
      description: "",
      status: false,
      priority: "",
    });
  };

  console.log("dataa", tasks);

  useEffect(() => {
    dispatch(getTASKS());
  }, [taskData]);

  const filterByCategory = (e) => {

     setFilteredTasks( e.target.value)
    
  };

  return (
    <>
      <div className="flex justify-content-center align-items-center">
    
        <select
          onChange={(e) => filterByCategory(e)}
          className="select_tag priority mt-2 p-2 border border-gray-300 rounded"
          name="category"
        >
          <option value="">Select By Priority</option>
          <option value="urgent">Urgent</option>
          <option value="medium">Medium</option>
          <option value="low">Low</option>
        </select>
      </div>

      <div className="main-container-todo ">
        <div className=" cont w-[25%] todo-container max-w-lg p-5 rounded-lg shadow-md">
          <h2 className="todo text-center text-2xl">Todo List</h2>
          <div className="data flex justify-between">
            <p className="task-count"></p>
            <p className="completed-count"></p>
          </div>

          <div className="input-container flex flex-col gap-2">
            <input
              type="text"
              name="title"
              value={taskData.title}
              onChange={handleChange}
              placeholder="Add a new task"
              className="task-input flex-grow p-2 border border-gray-300 rounded text-black"
            />
            <select
              className="priority p-2 border border-gray-300 rounded"
              name="priority"
              value={taskData.priority}
              onChange={handleChange}
            >
              <option value="">Select Priority</option>
              <option value="urgent">Urgent</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
            <textarea
              value={taskData.description}
              onChange={handleChange}
              name="description"
              id=""
              cols="30"
              rows="10"
              className="desc p-2 border border-gray-300 rounded"
            ></textarea>
            <button
              onClick={submitTaskData}
              className="add-button text-white p-2 rounded cursor-pointer"
            >
              Add Task
            </button>
          </div>
        </div>
        <div className="todoContainerMain">
          <TaskItem data={tasks} filteredTasks={filteredTasks}/>
        </div>
      </div>
    </>
  );
};

export default Task;
