import React from "react";
// import {useTheme} from "../../context/index";

function _Button() {
  let variant = "default";
  let variantclass = "";
  switch (variant) {
    case "primary":
      variantclass =
        "aetherui-bg-primary aetherui-text-primary-contrast aetherui-font-semibold";
      break;
    case "default":
      variantclass = "aetherui-bg-grayscale-5 aetherui-text-primary-text";
  }
  return (
    <button
      className={`${variantclass} aetherui-py-2 aetherui-font-inter aetherui-text-base aetherui-px-3.5 aetherui-rounded-md aetherui-border-0 aetherui-outline-0`}
    >
      Button
    </button>
  );
}

export const Button = React.forwardRef(_Button);
