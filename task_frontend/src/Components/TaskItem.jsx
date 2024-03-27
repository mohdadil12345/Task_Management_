import React from 'react'
import { getTASKS, updateTask } from '../Redux/Task_Redux/action'
import toast from 'react-hot-toast'
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function TaskItem({data}) {
  const dispatch = useDispatch();

  

  const handletoggle = (id, currentStatus) => {
    // Toggle the status
    const newStatus=!currentStatus
    dispatch(updateTask(id, newStatus)); 
    
    toast.success(newStatus? 'Task Completed' : 'Task Marked Pending');

  };

  useEffect(()=>{
    dispatch(getTASKS())
  },[])
  


  return (
   <>
      <ul className="  task-list grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 flex-grow px-20">
        {data?.map((task, index) => (
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
          <button className='border border-red-500 rounded-full p-1'>✂</button><button  className='border border-red-500 rounded-full p-1'>🖊</button>
         </div>
            
            </div>
          </li>
        ))}
      </ul>
   
   </>
  )
}

export default TaskItem