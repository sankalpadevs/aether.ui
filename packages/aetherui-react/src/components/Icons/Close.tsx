import React from "react";

import { HasDisplayName, RefProp } from "../../types/render";
import { IconProps } from "../../types/components";

import { forwardRefWithAs } from "../../utils/render";

function _CloseIcon(props: IconProps, ref: React.Ref<SVGSVGElement>) {
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

interface _ICloseIconProps extends HasDisplayName {
  (props: IconProps & RefProp<typeof _CloseIcon>): JSX.Element;
}

export const Close = forwardRefWithAs(_CloseIcon) as _ICloseIconProps;
