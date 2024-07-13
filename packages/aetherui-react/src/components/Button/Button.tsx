import React, { useRef } from "react";

import { ButtonProps } from "../../types/button";
import { cbnCls } from "../../utils/common";
import { Grid } from "../Layouts/Grid";
import { Generic } from "../Layouts/Generic";

export function Button({
  type,
  variant,
  children,
  iconOnly,
  icon,
  placeIcon,
  ...elementProps
}: ButtonProps) {
  //defaults
  if (!type) type = "default";
  if (!variant) variant = "default";

  // const reff = useRef<HTMLButtonElement>(null)
  const variedClass = `aetherui-button-${type}-${variant}`;

  return (
    <Generic
      noMargin
      noPadding
      {...elementProps}
      className={cbnCls(
        `aetherui-w-fit aetherui-h-fit aetherui-radius-s aetherui-font-size-0875`,
        variedClass,
      )}
    >
      <Grid
        noMargin
        noPadding
        flow={"column"}
        className={cbnCls(
          `aetherui-p-x-05 aetherui-p-y-025 aetherui-color-inherit`,
        )}
      >
        {icon && (placeIcon === "start" || !placeIcon) && (
          <Generic
            noMargin
            noPadding
            className={`aetherui-m-right-025 aetherui-color-inherit`}
          >
            {icon}
          </Generic>
        )}
        {!iconOnly && children}
        {icon && placeIcon === "end" && (
          <Generic
            noMargin
            noPadding
            className={`aetherui-m-left-025 aetherui-color-inherit`}
          >
            {icon}
          </Generic>
        )}
      </Grid>
    </Generic>
  );
}
