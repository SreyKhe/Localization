"use client";

import { useSession, signIn, signOut } from "next-auth/react";
import React from "react";
import Image from "next/image";
const Dashboard = () => {
  const { data: session } = useSession();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-2xl p-8 max-w-md w-full text-center">
        {session ? (
          <>
          <Image src={session.user?.image as string} alt="pic"  width={100} height={100} className="rounded-full"/>
            <h1 className="text-2xl font-bold text-gray-800">Welcome back, {session.user?.name}👋</h1>
            <p>{session.expires}</p>
            <p className="text-gray-600 mt-2">You're successfully logged in.</p>
            <button 
              onClick={() => signOut()}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition"
            >
              Sign Out
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800">You're not logged in</h1>
            <p className="text-gray-600 mt-2">Sign in to access your dashboard.</p>
            <button
              onClick={() => signIn("google")}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
            >
              Sign in with Google
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
