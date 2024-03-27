import React from "react";
function HomePage() {
  return (
    <div className="home_page">
      <h1>Handling backend </h1>
      <li>All the crud operations like create, read, update, delete are handling in backend</li>
      <li>Signup functionality handling in backend</li>
      <li>pagination of limit 5 data in page handling in bakcend</li>
      <li>Login functionality also done.</li>
      <li>Authentication is also handled using json web token.</li>
      <li>user may able to read update delete their on data.</li>
      <li>Logout functionality also handle in backend.</li>

      <h1>Redux Integration:</h1>
      <li>Redux for state management, as evident from the useDispatch and useSelector hooks imported from react-redux</li>
      <li>Actions like adding tasks and fetching tasks (addtask and getTASKS) are dispatched using the dispatch function.</li>

      <h1>Task Management:</h1>
      <li>Users can input task details such as title, description, and priority using input fields and dropdown menus.</li>
      <li>When the user clicks the "Add Task" button (submitTaskData function), the task data is dispatched to Redux for state management. The task input fields are then cleared for adding a new task.</li>

      <h1>Task Display:</h1>
      <li>Task items are displayed in the TaskItem component.</li>
      <li>The TaskItem component receives the list of tasks (tasks or filteredTasks) as props and renders each task item accordingly.</li>
      <li>Actions like updating tasks, deleting tasks, and fetching tasks (updateTask, deleteTask, and getTASKS) are dispatched using the dispatch function.</li>

      <h1>Styling and Layout:</h1>
      <li>Implemented styling for the Task component using CSS  as well as tailwind</li>

      <h1>Task Status Toggle:</h1>
      <li>Users can click on the task status (Completed or Pending) to toggle between the completed and pending states.</li>
      <li>A success toast is displayed after toggling the task status, informing the user whether the task was marked as completed or pending.</li>

      <h1>Dispatching Signup Action:</h1>
      <li>When the user clicks the "Register" button, the handleSignup function is triggered. </li>
      <li>The Redux action (signupUser) is imported using useDispatch hook from react-redux</li>
    </div>
  );
}

export default HomePage;
