import axios from "axios";

import { ADDTASK_FAILURE, ADDTASK_REQUEST, ADDTASK_SUCCESS, GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS, UPDATE_TASK_FAILURE, UPDATE_TASK_SUCCESS } from "../ActionTypes";
import toast from "react-hot-toast";

export const gettaskRequest = () => ({
  type: GET_TASK_REQUEST,
})

export const gettaskSuccess = (tasks) => ({
  type: GET_TASK_SUCCESS,
  payload: tasks,
});


export const gettaskFailure = (error) => ({
  type: GET_TASK_FAILURE,
  payload: error,
});

export const getTASKS = () => async (dispatch) => {
  dispatch(gettaskRequest());

  try {
    const token = localStorage.getItem('logintoken'); // Assuming your authorization token key is 'authToken'
    
    const response = await axios.get("https://task-management-i6l7.onrender.com/task", {
      headers: {
        Authorization: `Bearer ${token}` // Assuming it's a Bearer token
      }
    });
    console.log(response)
    dispatch(gettaskSuccess(response.data));
  } catch (error) {
    dispatch(gettaskFailure(error.message));
  }
};




  

export const addtaskRequest = () => ({
  type: ADDTASK_REQUEST,
});

export const addtaskSuccess = (task) => ({
  type: ADDTASK_SUCCESS,
  payload: task,
});

export const addtaskFailure = (error) => ({
  type: ADDTASK_FAILURE,
  payload: error,
});

export const addtask = (newTask) => async (dispatch) => {
  dispatch(addtaskRequest());

  try {
    const token = localStorage.getItem('logintoken'); 
    const response = await axios.post("https://task-management-i6l7.onrender.com/task/add",newTask, {
        headers: {
          Authorization: `Bearer ${token}` 
        }
      } );
      toast.success(response.data.msg, {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    dispatch(addtaskSuccess(response.data));
   

    console.log("res", response)
  } catch (error) {
    toast.error(error.response.data.msg || "An error occurred", {
        style: {
            borderRadius: "50px",
            background: "#000428",
            color: "#ffffff",
            padding: "1rem 1.5rem",
            fontWeight: "600",
        },
    });
    dispatch(addtaskFailure(error.message));
  }
};

export const updateTaskFailure = (error) => ({
    type: UPDATE_TASK_FAILURE,
    payload: error,
  });
  export const updateTaskSuccess = (id,newStatus) => ({
    type: UPDATE_TASK_SUCCESS,
    payload: { id, newStatus }
  });
  export const updateTaskRequest = () => ({
    type: GET_TASK_REQUEST,
  })
  export const updateTask = (taskId, newStatus) => async (dispatch) => {
    dispatch(updateTaskRequest());
  
    try {
      const token = localStorage.getItem('logintoken');
      const response = await axios.patch(`https://task-management-i6l7.onrender.com/task/update/${taskId}`, { status: newStatus }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      console.log("Response from API:", response.data); // Log the response data
      dispatch(updateTaskSuccess(taskId, newStatus)); // Dispatching success action with id and new status
      console.log("Updated task:", taskId, newStatus);
    } catch (error) {
      dispatch(updateTaskFailure(error.msg));
    }
  };
  
  
//   export const updateTask = (taskId,  newStatus ) => async (dispatch) => {
//     dispatch(updateTaskRequest());
  
//     try {
//       const token = localStorage.getItem('logintoken');
//       const response = await axios.patch(`https://task-management-i6l7.onrender.com/task/update/${taskId}`,  newStatus , {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       dispatch(updateTaskSuccess(taskId, newStatus)); 
//       console.log("Updated task:", response.data);
//     } catch (error) {
//       dispatch(updateTaskFailure(error.message));
//     }
//   };
  