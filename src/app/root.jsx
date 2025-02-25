"use client";

import { useRouter } from "next/navigation";
import { useAuth } from "./context/AuthContext";
import { useEffect } from "react";

export const Root = ({ children }) => {
  const router = useRouter();
  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  }, [user]);

  return <>{children}</>;
};
