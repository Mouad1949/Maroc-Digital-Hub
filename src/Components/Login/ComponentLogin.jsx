import React, { useEffect } from "react";
import imageLogo from "../../assets/login.webp";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Slices/authSlice";
import { useNavigate, Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function ComponentLogin() {
  const dispatch = useDispatch();
  const { loading, error, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    dispatch(loginUser(data));
  };

  useEffect(() => {
    if (user) navigate("/");
  }, [user, navigate]);

  return (
    <div className="max-w-[900px] mx-auto my-10 rounded-2xl shadow-lg border border-[#4A80FF] bg-white flex flex-col md:flex-row overflow-hidden">
    
      <div className="flex justify-center items-center w-full md:w-1/2 bg-gray-50 p-6">
        <img
          src={imageLogo}
          alt="Login illustration"
          className="w-[250px] md:w-[400px] h-auto object-contain"
        />
      </div>

    
      <div className="flex flex-col justify-center w-full md:w-1/2 p-8">
        <h1 className="text-3xl font-bold text-[#4A80FF] mb-2 text-center md:text-left">
          Sign in
        </h1>
        <p className="text-sm text-gray-500 mb-6 text-center md:text-left">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="text-[#4A80FF] font-medium hover:underline"
          >
            Register here
          </Link>
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5 w-full"
        >
        
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="text"
              {...register("email", {
                required: "Email obligatoire",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Format d'email invalide",
                },
              })}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1 text-sm"
              placeholder="Enter your email"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              {...register("password", {
                required: "Mot de passe obligatoire",
                minLength: {
                  value: 6,
                  message:
                    "Le mot de passe doit contenir au moins 6 caractères",
                },
              })}
              className="w-full border-b-2 border-[#4A80FF] focus:outline-none focus:border-blue-600 py-2 px-1 text-sm"
              placeholder="Enter your password"
            />
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          
          <button
            type="submit"
            disabled={loading}
            className="mt-4 bg-[#4A80FF] text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-70"
          >
            {loading ? "Loading..." : "Login"}
          </button>

          {error && <p className="text-red-500 mt-2 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
}

export default ComponentLogin;
