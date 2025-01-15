"use client";

import React, { useEffect, useState } from "react";
import { Mail, Lock } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import useFirebaseLogin from "../../hooks/use-login";
import { useAuth } from "../../context/AuthContext";

const LoginPage = () => {
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, [user]);

  const { login, loading, error } = useFirebaseLogin();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(formData.email, formData.password);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-blue-500 to-purple-600">
      <div className="min-h-screen backdrop-blur-sm backdrop-filter bg-white/30 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-md">
          {/* Logo placeholder with glassmorphism effect */}
          <div className="w-24 h-24 mx-auto rounded-lg bg-white/20 backdrop-blur-sm shadow-xl flex items-center justify-center">
            <div className="text-white text-2xl font-bold">TS</div>
          </div>

          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Sign in to Tinnitus Support
          </h2>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white/70 backdrop-blur-lg py-8 px-4 shadow-2xl rounded-xl sm:px-10 border border-white/50">
            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                {error}
              </div>
            )}

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Mail className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white/90 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700"
                >
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="block w-full pl-10 py-3 border border-gray-300 rounded-md bg-white/90 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm outline-none"
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) =>
                      setFormData({ ...formData, password: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="text-sm">
                  <Link
                    href="/forgot-password"
                    className="font-medium text-blue-600 hover:text-blue-500"
                  >
                    Forgot your password?
                  </Link>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-xl text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
