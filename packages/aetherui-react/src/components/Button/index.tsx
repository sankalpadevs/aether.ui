import React from "react";

export const Button = React.forwardRef(() => {
  return React.createElement(
    "button",
    { className: "aetherui-btn" },
    "Click Me!",
  );
});
