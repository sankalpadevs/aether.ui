import React from "react";
import { IconType } from "../../types/icons";

function CloseIcon(props: IconType, ref: React.Ref<any>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
      ref={ref}
    >
      <path
        fillOpacity=".6"
        d="M19.2 7.2 17 5l-4.9 5-4.9-5L5 7.2l5 4.9L5 17l2.2 2.2 4.9-5 4.9 5 2.2-2.2-5-4.9 5-4.9Z"
      />
    </svg>
  );
}

export const Close = React.forwardRef(CloseIcon);
