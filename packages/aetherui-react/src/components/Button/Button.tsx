import React from "react";

import { Grid } from "../Layouts/Grid";
import { Generic } from "../Layouts/Generic";

import { ButtonProps } from "../../types/components";
import { HasDisplayName, RefProp } from "../../types/render";

import { cbnCls } from "../../utils/common";
import { forwardRefWithAs } from "../../utils/render";

const DEFAULT_BUTTON = "button";

function _Button({
  type,
  variant,
  children,
  iconOnly,
  icon,
  placeIcon,
  ...elementProps
}: ButtonProps<typeof DEFAULT_BUTTON>) {
  /**
   * These are the defaults for type and variant, if nothing is passed, these are used!
   */
  if (!type) type = "default";
  if (!variant) variant = "default";

  const variedClass = `aetherui-button-${type}-${variant}`;

  return (
    <Generic
      as={DEFAULT_BUTTON}
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
            as={"a"}
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

interface _IButtonProps extends HasDisplayName {
  (
    props: ButtonProps<typeof DEFAULT_BUTTON> & RefProp<typeof _Button>,
  ): JSX.Element;
}

export const Button = forwardRefWithAs(_Button) as _IButtonProps;
