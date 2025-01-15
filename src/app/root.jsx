"use client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const Root = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (!userData) {
      router.push("/auth/login");
    }
  }, [router]);

  return <>{children}</>;
};
