import React from "react";
import { IconType } from "../../types";

function MinusIcon(props: IconType, ref: React.Ref<any>) {
  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fillOpacity=".6" d="M6 11h12v2H6v-2Z" />
    </svg>
  );
}

export const Minus = React.forwardRef(MinusIcon);
