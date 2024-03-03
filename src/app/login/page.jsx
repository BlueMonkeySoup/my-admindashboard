"use client";
import Link from "next/link";
import React from "react";
import { login } from "../lib/actions";
import { useFormState } from "react-dom";

const Login = () => {
  const [state, formAction] = useFormState(login, undefined);

  return (
    <div className="h-[100vh] flex flex-col justify-center items-center bg-blue-500">
      <div className="bg-blue-200  h-1/2 w-1/2 flex flex-col justify-center items-center lg:w-1/3 rounded-lg">
        <form
          className="flex flex-col items-center justify-center pb-20 rounded h-[80%] w-[80%] gap-3 text-xl"
          action={formAction}
        >
          <h1 className="flex flex-col items-center j text-6xl mb-10 font-bold text-gray-500 pt-28 ">
            Login
          </h1>

          <input
            type="text"
            className="h-12 p-8 rounded-lg"
            placeholder="username..."
            name="username"
          ></input>
          <input
            type="password"
            className="h-12 p-8 rounded-lg"
            placeholder="password..."
            name="password"
          ></input>
          <Link href="/dashboard">
            <button className="pt-8 mt-10 bg-green-200 w-[220px] h-1/2 p-14 rounded-2xl text-3xl">
              Login
            </button>
          </Link>
        </form>
        {state?.error}
      </div>
    </div>
  );
};

export default Login;
