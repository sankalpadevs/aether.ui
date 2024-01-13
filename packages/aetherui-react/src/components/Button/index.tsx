import React from "react";

export const Button = () => {
  return (
    <button
      onClick={() => {
        console.log("clicked!");
      }}
    >
      Click me!
    </button>
  );
};
