import React from "react";

import { HasDisplayName, RefProp } from "../../types/render";
import { IconProps } from "../../types/components";

import { forwardRefWithAs } from "../../utils/render";

function _MinusIcon(props: IconProps, ref: React.Ref<SVGSVGElement>) {
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

interface _IMinusIcon extends HasDisplayName {
  (props: IconProps & RefProp<typeof _MinusIcon>): JSX.Element;
}

export const Minus = forwardRefWithAs(_MinusIcon) as _IMinusIcon;
