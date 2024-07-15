import React from "react";

import { HasDisplayName, RefProp } from "../../types/render";
import { IconProps } from "../../types/components";

import { forwardRefWithAs } from "../../utils/render";

function _PlusIcon(props: IconProps, ref: React.Ref<SVGSVGElement>) {
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
      <path fillOpacity=".6" d="M18 11h-5V6h-2v5H6v2h5v5h2v-5h5v-2Z" />
    </svg>
  );
}

interface _IPlusIcon extends HasDisplayName {
  (props: IconProps & RefProp<typeof _PlusIcon>): JSX.Element;
}

export const Plus = forwardRefWithAs(_PlusIcon) as _IPlusIcon;
