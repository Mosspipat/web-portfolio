import React from "react";

export const Divider = ({ label }: { label: string }) => {
  return (
    <h3 className="flex items-center my-8">
      <span
        aria-hidden="true"
        className="flex-grow rounded h-1 border-collapse border-2 border-white"
      ></span>
      {/* <span className="mx-3 text-lg font-medium">My projects</span> */}
      <span className="mx-3 text-4xl font-medium uppercase ">{label}</span>
      <span
        aria-hidden="true"
        className="flex-grow rounded h-1 border-collapse border-2 border-white"
      ></span>
    </h3>
  );
};
