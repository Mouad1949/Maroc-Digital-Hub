import React, { useEffect } from "react";
import imageLogo from "../../assets/login.webp";
import { useDispatch , useSelector } from "react-redux";
import { useState } from "react";
import { loginUser } from "../../Slices/authSlice";
import { useNavigate } from "react-router-dom";



function ComponenetLogin() {

  const dispatch = useDispatch();
  const {loading, error , user} = useSelector((state) => state.auth);
  const navigate = useNavigate()

  const [email , setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(loginUser({email,password}))
  }
  useEffect(()=>{
    if(user){
      navigate("/")
    }
  },[user,navigate])

  return (
    <div className="max-w-[900px] h-[600px] mx-auto my-10 rounded-2xl shadow-lg border border-[#4A80FF] bg-white overflow-hidden flex flex-col md:flex-row">
      <div className="md:flex justify-center items-center w-1/2">
        <img src={imageLogo} alt="Image login" className="w-[400px] h-auto object-contain"/>
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-[#4A80FF] mb-2">Sign in</h1>
        <p className="text-sm text-gray-500 mb-6">
          Don't have an account?{" "}
          <a href="#" className="text-[#4A80FF] font-medium hover:underline">
            Register here
          </a>
        </p>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email" onChange={(e)=>setEmail(e.target.value)}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1"
              placeholder="Enter your Email"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password" onChange={(e)=>setPassword(e.target.value)}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1"
              placeholder="Enter your password"
            />
          </div>
          <button
            type="submit" disabled={loading}
            className="mt-4 bg-[#4A80FF] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Loading..." : "Login"}
          </button>
          {error && <p className="text-red-500">{error}</p>}
          
        </form>
        {/* {user && <p className="text-green-600">Bienvenue {user.username}!</p>} */}
      </div>
    </div>
  );
}

export default ComponenetLogin;
