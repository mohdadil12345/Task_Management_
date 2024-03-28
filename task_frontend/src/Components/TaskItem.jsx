import React, { useState } from "react";
import { deleteTask, getTASKS, updateTask, updatePriority } from "../Redux/Task_Redux/action";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function TaskItem({ data, filteredTasks }) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks.data);


  const handletoggle = (id, currentStatus) => {
    const newStatus = currentStatus;
    dispatch(updateTask(id, newStatus));
    toast.success(newStatus ? "Task Completed" : "Task Marked Pending");
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const handlepriority = (id, currenpriority) => {
  
    dispatch(updatePriority(id, currenpriority));
    toast.success("Priority Set to " + currenpriority);
    setTimeout(() => {
      window.location.reload();
    }, 2000);

  };

  useEffect(() => {
    dispatch(getTASKS());
  }, []);

  console.log("tasksss", tasks);

  const handle_Delete = (id) => {
    dispatch(deleteTask(id));
    toast.success("Task deleted successfully");
    dispatch(getTASKS());
  };

  return (
    <div className=" todoContainer">
      {tasks?.map((task, index) => (
        <>
        {filteredTasks == task.priority &&     <div key={index} className=" todoItems">
          <div className="task-list-data">
        
              <strong>Title : </strong>
              <h3 className="task-text">{task.title}</h3>
       
              <strong>Description : </strong>
              <p className="description">{task.description}</p>
          
          
              <strong>Priority : </strong>
            
              <select
                className="priority p-2 border border-gray-300 rounded"
                name="priority"
                value={task.priority}
                onChange={(e)=>handlepriority(task._id,e.target.value)}
              >
                <option value="">Select Priority</option>
                <option value="urgent">Urgent</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
     
              <strong>Status : </strong>
        
              <select
                className={`priority p-2 border border-gray-300 rounded ${
                  task.status ? "green" : "red"
                }`}
                name="priority"
                value={task.status ? "Completed" : "Pending"}
                onChange={(e) =>
                  handletoggle(
                    task._id,
                    e.target.value == "Completed" ? true : false
                  )
                }
              >
              
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
     
              <button
                onClick={() => handle_Delete(task._id)}
                className="del_btn"
                
              
              >
                DELETE
              </button>
              <button className="edit_btn">
             
                EDIT
              </button>
          </div>
        </div>}

{filteredTasks  == ""  &&   <div key={index} className=" todoItems">
          <div className="task-list-data">
              <strong>Name : </strong>
              <h3 className="task-text">{task.title}</h3>
              <strong>Description : </strong>
              <p className="description">{task.description}</p>
              <strong>Priority : </strong>
              <select
                className="priority p-2 border border-gray-300 rounded"
                name="priority"
                value={task.priority}
                onChange={(e)=>handlepriority(task._id,e.target.value)}
              >
                <option value="">Select Priority</option>
                <option value="urgent">Urgent</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>
              <strong>Status : </strong>
            
              <select
                className={`priority p-2 border border-gray-300 rounded ${
                  task.status ? "green" : "red"
                }`}
                name="priority"
                value={task.status ? "Completed" : "Pending"}
                onChange={(e) =>
                  handletoggle(
                    task._id,
                    e.target.value == "Completed" ? true : false
                  )
                }
              >
             
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
              </select>
       
              <button
                onClick={() => handle_Delete(task._id)}
                className="del_btn"
                
           
              >
                DELETE
              </button>
              <button className="edit_btn">
              
                EDIT
              </button>

          </div>
        </div>}
        
      
        </>

      ))}
    </div>
  );
}

export default TaskItem;
