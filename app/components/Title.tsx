"use client";
import React from "react";

const Title = ({ title }: { title: string }) => {
  return (
    <div className="px-10 mb-4">
      <h1
        className={`text-[1.6rem] max-sm:text-2xl font-semibold tracking-tight text-start max-sm:text-center `}
      >
        {title}
      </h1>
    </div>
  );
};

export default Title;
