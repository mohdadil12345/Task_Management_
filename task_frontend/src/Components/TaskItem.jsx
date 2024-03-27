import React from "react";
import { deleteTask, getTASKS, updateTask } from "../Redux/Task_Redux/action";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function TaskItem({ data }) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks.data);

  const handletoggle = (id, currentStatus) => {
    const newStatus = !currentStatus;
    dispatch(updateTask(id, newStatus));

    toast.success(newStatus ? "Task Completed" : "Task Marked Pending");
  };

  useEffect(()=>{
    dispatch(getTASKS())
  },[data])

  console.log("tasksss", tasks);

  const handle_Delete = (id) => {
    dispatch(deleteTask(id));
    toast.success("Task deleted successfully");
    dispatch(getTASKS());
  };

  return (
   
      <div className=" todoContainer">
        {tasks?.map((task, index) => (
          <div key={index} className=" todoItems">
            <div className="task-list-data">
              <div className="flex gap-8">
                <strong>Name : </strong>
                <h3 className="task-text">{task.title}</h3>
              </div>
              <div className="flex gap-8">
               <strong>Description : </strong>
                <p className="description">{task.description}</p>
              </div>
              <div className="flex gap-8">
                <strong>Priority : </strong>
                <p className="task-priority">{task.priority}</p>
              </div>
              <div className="flex gap-8">
                <strong>Status : </strong>
                <p
                  onClick={() => handletoggle(task._id, task.status)}
                  className={task.status ? 'green' : 'red'}
                >
                  {task.status ? "Completed" : "Pending"}
                </p>
              </div>

              <div className="flex  gap-4">
                <button
                  onClick={() => handle_Delete(task._id)}
                  className="del_btn"
                  // className="border border-red-500 rounded-2 p-3 w-26"
                >
                  DELETE
                </button>
                <button className="edit_btn">
                {/* <button className="border border-blue-200 rounded-2 p-3 w-26"> */}
                  EDIT
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
 
  );
}

export default TaskItem;
