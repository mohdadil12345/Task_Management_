import React from 'react'
import { deleteTask, getTASKS, updateTask } from '../Redux/Task_Redux/action'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function TaskItem({data}) {
  const dispatch = useDispatch();

  const tasks = useSelector((state) => state.task.tasks.data);

  const handletoggle = (id, currentStatus) => {
    const newStatus=!currentStatus
    dispatch(updateTask(id, newStatus)); 
    
    toast.success(newStatus? 'Task Completed' : 'Task Marked Pending');

  };

  // useEffect(()=>{
  //   dispatch(getTASKS())
  // },[])

  console.log("tasksss", tasks)

  const handle_Delete = (id) => {
    dispatch(deleteTask(id));
    toast.success('Task deleted successfully');
    dispatch(getTASKS());
  };
  





  return (
   <>
      <ul className="  task-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow px-20">
        {tasks?.map((task, index) => (
          <li key={index} className=" rounded-md shadow-md p-4">
            <div className="task-list-data">
             <div className="flex gap-2">
             <h3>Name:</h3>
              <h3 className="task-text">{task.title}</h3>
             </div>
             <div className="flex gap-2">
             <p>Description:</p>
              <p className="description">{task.description}</p>
             </div>
         <div className="flex gap-2">
         <p>Priority:</p>
              <p className="task-priority">{task.priority}</p>
         </div>
         <div className="flex gap-2">
                <p>Status:</p>
                <p onClick={() => handletoggle(task._id, task.status)} className="task-priority">
                  {task.status ? 'Completed' : 'Pending'}
                </p>
              </div>
         
         
         <div className='flex justify-center gap-5'>
          <button onClick={() => handle_Delete(task._id)} className='border border-red-500 rounded-full p-1'>DELETE</button><button  className='border border-red-500 rounded-full p-1'>🖊</button>
         </div>
            
            </div>
          </li>
        ))}
      </ul>
   
   </>
  )
}

export default TaskItem