"use client";
import React from "react";
const BaseLayoutComponent = ({ children }) => {
  return (
    <>
      <main className="w-full">{children}</main>
    </>
  );
};

export default BaseLayoutComponent;
