import React from "react";
// import {useTheme} from "../../context/index";

export const Button = React.forwardRef(() => {
  // const {theme} = useTheme()
  return (
    <button
      className={`aetherui-bg-bg-primary aetherui-text-text-primary aetherui-p-6`}
    >
      Click me!
    </button>
  );
});
