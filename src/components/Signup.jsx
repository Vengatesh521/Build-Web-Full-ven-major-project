import React from "react";
import { useForm } from "react-hook-form";
import { Input, Button } from "./index";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const create = async (data) => {
    try {
      // Simulate an API call
      console.log("Form submitted successfully:", data);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="mx-auto w-full max-w-lg bg-gray-400 rounded-xl p-10 border-black/10">
        <div className="mb-2 flex justify-center">
          <h1 className="text-center text-2xl font-bold leading-tight">
            Sign Up Form
          </h1>
        </div>
        <form onSubmit={handleSubmit(create)}>
          <div className="space-y-5">
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
            />
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("email", { required: true })}
            />
            <Input
              label="Full Name:"
              placeholder="Enter your full name"
              {...register("Password", { required: true })}
            />
            <Button type="submit" className="w-full">
              Create Account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
