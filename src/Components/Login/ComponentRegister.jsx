import React from "react";
import regist from "../../assets/register.webp";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AwardIcon } from "lucide-react";
import { registerUser } from "../../Slices/authSlice";
function ComponentRegister() {

  const {register,handleSubmit,formState:{ errors }} = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {loading, error} = useSelector((state)=>state.auth);

  const onSubmit = async (data) =>{
    try{
      const result = await dispatch(registerUser(data))
      if(result.meta.requestStatus === "fulfilled"){
        navigate("/")
      }
    }catch(err) {console.error(err)}
  }

  return (
    <div className="max-w-[900px] h-[600px] mx-auto my-10 rounded-2xl shadow-lg border border-[#4A80FF] bg-white overflow-hidden flex flex-col md:flex-row">
      <div className="md:flex justify-center items-center w-1/2">
        <img
          src={regist}
          alt="Image Register"
          className="w-[400px] h-auto object-contain"
        />
      </div>
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
        <p className="text-sm text-gray-500 mb-6">Create an account</p>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Username
            </label>
            <input
              type="text" {...register("username", { required: "userName obligatoire" })}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1"
              placeholder="Enter your username"
            />
            {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email" {...register("email", { required: "Email obligatoire" })}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1"
              placeholder="Enter your username"
            />
            {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
          </div>
          <div>
            <select {...register("role", { required: "Rôle obligatoire" })} className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1">
              <option>selection your role</option>
              <option>Utilisateur</option>
              {/* <option>Administrateur</option> */}
              <option>Investisseur</option>
            </select>
            {errors.role && (
            <p className="text-red-500 text-sm">{errors.role.message}</p>
          )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"  {...register("password", {
              required: "Mot de passe obligatoire",
              minLength: { value: 6, message: "Min 6 caractères" },
            })}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1"
              placeholder="Enter your password"
            />
            {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Confirmer password
            </label>
            <input
              type="password"
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1"
              placeholder="Confirmer password"
            />
          </div>
          {error && <p className="text-red-600">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="mt-4 bg-[#4A80FF] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition"
          >
              {loading ? "Inscription..." : "S'inscrire"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ComponentRegister;
