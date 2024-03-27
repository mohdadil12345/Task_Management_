import React, { useEffect, useState } from "react";
import { addtask, getTASKS } from "../Redux/Task_Redux/action";
import { useDispatch, useSelector } from "react-redux";
import TaskItem from "./TaskItem";
import toast from "react-hot-toast";

const Task = () => {
  const dispatch = useDispatch();
  const data = useSelector((store) => {
    return store.task.tasks.data;
  });

  const [filteredTasks, setFilteredTasks] = useState([]);
  

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

  console.log("dataa", data);

  useEffect(() => {
    dispatch(getTASKS());
  }, [taskData]);

  const filterByCategory = (e) => {
    const priority = e.target.value;
    console.log(priority);
  
    let fil_Tasks = [];
  
    if (priority === "") {
      fil_Tasks = data;
    } else {
      fil_Tasks = data.filter((task) => task.priority === priority);
    }
  
    console.log("filtertasks", fil_Tasks);
    setFilteredTasks(fil_Tasks);
  };
  



  return (
    <>
    
      <input type="text" placeholder="Filter By Status" className="searc_input" />
      <select
        onChange={(e) => filterByCategory(e)}
        className="select_tag"
        name="category"
      >
        <option value="">Select By Priority</option>
        <option value="urgent">Urgent</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>




      <div className="main-container-todo p-10 flex justify-evenly">
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
        <div>
          <TaskItem data={filteredTasks} />
        </div>
      </div>
    </>
  );
};

export default Task;
