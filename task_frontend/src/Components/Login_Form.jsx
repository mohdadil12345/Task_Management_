import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signinUser } from "../Redux/Auth_Redux/action";
import { getTASKS } from "../Redux/Task_Redux/action";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const  data=useSelector((store)=>{
    return store.task
  })


  const handleLogin = () => {
    const userData = { email, password };
    dispatch(signinUser(userData,))
    console.log(userData)
    return
  };
  const tosignup=()=>{
  }
  useEffect(() => {
    dispatch(getTASKS())
  }, [])
  
  console.log(data)
  return (
    <div className="bluish  h-[100vh] p-20">
      <div className="bg-white border p-10 flex flex-col gap-5 w-[30%] m-auto rounded-2xl">
        <h2 className="text-center text-2xl font-bold">Login</h2>
        <div className="flex flex-col gap-5">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={handleLogin}>Login</button>
          <span onClick={tosignup} className="text-[#83858B]" >New user</span>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;