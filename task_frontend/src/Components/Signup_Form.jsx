import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { signupUser } from "../Redux/Auth_Redux/action";

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [fullName, setFullName] = useState("");
  const dispatch = useDispatch();
//   const navigate = useNavigate();

  const handleSignup = () => {
    const userData = { email, password,fullName,username };
    console.log(userData);
    dispatch(signupUser(userData, ));
  };
  const tologin = () => {
    // navigate("/");
  };

  return (
    <div className="bluish h-[100vh] p-20">
      <div className="bg-white border p-10 flex flex-col gap-5 w-[30%] m-auto rounded-2xl">
        <h2 className=" text-center text-2xl font-bold ">Signup</h2>
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
          />  <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="text"
          placeholder="FullName"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
          <button onClick={handleSignup}>Register</button>
          <span onClick={tologin} className="text-[#83858B]">
            already have an account
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;