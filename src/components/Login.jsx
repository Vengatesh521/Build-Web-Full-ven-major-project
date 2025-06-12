import React from "react";
import { Button, Input } from "./index";
const Login = () => {
  return (
    <div className="flex items-center justify-center w-full">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-400 rounded-xl p-10 border border-black/10`}
      >
        <h1 className="text-center text-2xl font-bold leading-tight ">
          Sign In Form
        </h1>
        <Input label="Email:" placeholder="Enter Your Email" type="email" />
        <Input
          label="Password:"
          placeholder="Enter Your password"
          type="password"
        />

        <Button type="submit" className="w-full mt-4">
          Sign in{" "}
        </Button>
      </div>
    </div>
  );
};

export default Login;
