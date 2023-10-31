"use client";
import { signIn, signOut } from "next-auth/react";

const AuthBTN = ({ action }) => {
  return (
    <button
      class="text-indigo-500 inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-green-200 rounded text-base mt-4 md:mt-0"
      onClick={() => {
        action == "signin" ? signIn() : signOut();
      }}
    >
      {action}
    </button>
  );
};

export default AuthBTN;
