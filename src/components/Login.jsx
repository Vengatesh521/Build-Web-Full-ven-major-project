import React, { useState } from "react";
import { Button, Input } from "./index";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import authService from "../appwrite/auth";
import { login as authLogin } from "../store/authSlice";
import auth from "../appwrite/auth";

const Login = () => {
  const naviage = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");
  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          naviage("/");
        }
      }
    } catch (err) {
      setError("Login failed. Please check your credentials.");
    }
  };

  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10`}
      >
        <h1 className="text-center text-2xl font-bold leading-tight ">
          Sign In Form
        </h1>
        {error && <div className="text-red-500 text-center mb-4">{error}</div>}
        <form onSubmit={handleSubmit(login)} className="mt-8">
          <Input
            label="Email:"
            placeholder="Enter Your Email"
            type="email"
            {...register("email", { required: true })}
          />
          <Input
            label="Password:"
            placeholder="Enter Your password"
            {...register("password", { required: true })}
            type="password"
          />

          <Button type="submit" className="w-full mt-4">
            Sign in{" "}
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
