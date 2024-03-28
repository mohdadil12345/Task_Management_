import React, { useState } from "react";
import { deleteTask, getTASKS, updateTask, updatePriority } from "../Redux/Task_Redux/action";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

function TaskItem({ data, filteredTasks }) {
  const dispatch = useDispatch();


  const [editMode, setEditMode] = useState(null);
  const [editedTask, setEditedTask] = useState({
    title: "",
    description: "",
    priority: "",
  });

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
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };



  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditedTask({
      ...editedTask,
      [name]: value,
    });
  };

  const submitEdit = (id) => {
    dispatch(updateTask(id, editedTask));
    setEditMode(null);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
    toast.success("Task edited successfully");
  };

  const toggleEditMode = (id) => {
    setEditMode(id);
    const taskToEdit = data.find((task) => task._id === id);
    setEditedTask({
      title: taskToEdit.title,
      description: taskToEdit.description,
      priority: taskToEdit.priority,
      status: taskToEdit.status,
    });
  };

  return (
    <div className=" todoContainer">

      {tasks?.map((task, index) => (
        <>


        {filteredTasks == task.priority &&     <div key={index} className=" todoItems">
          <div className="task-list-data">
        
              <strong>Title : </strong>
              {!editMode || editMode !== task._id ? (
                <h3 className="task-text">{task.title}</h3>
              ) : (
                <input
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleEditChange}
                />
              )}
              <strong>Description : </strong>
              {!editMode || editMode !== task._id ? (
                <p className="description">{task.description}</p>
              ) : (
                <textarea
                  name="description"
                  value={editedTask.description}
                  onChange={handleEditChange}
                />
              )}
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
     
              {!editMode || editMode !== task._id ? (
                <>
                  <button className="del_btn" onClick={() => handle_Delete(task._id)}>DELEffTE</button>
                  <button className="edit_btn" onClick={() => toggleEditMode(task._id)}>EDIT</button>
                </>
              ) : (
                <>
                  <button className="edit_btn"  onClick={() => submitEdit(task._id)}>SAVE</button>
                  <button className="edit_btn"  onClick={() => setEditMode(null)}>CANCEL</button>
                </>
              )}
          </div>
        </div>}



{filteredTasks  == ""  &&   <div key={index} className=" todoItems">
          <div className="task-list-data">
                 
          <strong>Title : </strong>
              {!editMode || editMode !== task._id ? (
                <h3 className="task-text">{task.title}</h3>
              ) : (
                <input
                  type="text"
                  name="title"
                  value={editedTask.title}
                  onChange={handleEditChange}
                />
              )}
              <strong>Description : </strong>
              {!editMode || editMode !== task._id ? (
                <p className="description">{task.description}</p>
              ) : (
                <textarea
                  name="description"
                  value={editedTask.description}
                  onChange={handleEditChange}
                />
              )}
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
              {!editMode || editMode !== task._id ? (
                <>
                  <button className="del_btn" onClick={() => handle_Delete(task._id)}>DELETE</button>
                  <button className="edit_btn" onClick={() => toggleEditMode(task._id)}>EDIT</button>
                </>
              ) : (
                <>
                  <button className="edit_btn"  onClick={() => submitEdit(task._id)}>SAVE</button>
                  <button className="del_btn"  onClick={() => setEditMode(null)}>CANCEL</button>
                </>
              )}
          </div>
        </div>}
        
      
        </>

      ))}
    </div>
  );
}

export default TaskItem;
