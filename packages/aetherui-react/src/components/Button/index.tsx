import React from "react";

export const Button = React.forwardRef(() => {
  return React.createElement(
    "button",
    { className: "bg-blue-800 text-white p-6" },
    "Click Me!",
  );
});
