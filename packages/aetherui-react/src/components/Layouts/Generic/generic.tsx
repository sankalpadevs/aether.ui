import React from "react";
import { GenericComponentProps } from "../../../types";
import { cbnCls } from "../../../utils/utils";

const genericClass = "aetherui-box";
export function Generic({
  as: Component,
  children,
  overrideClassName,
  noMargin,
  noPadding,
  ...rest
}: GenericComponentProps) {
  // by default <div> is rendered
  if (!Component) Component = "div";

  return (
    <Component
      {...rest}
      className={cbnCls(
        genericClass,
        overrideClassName,
        noMargin && "aetherui-no-margin",
        noPadding && "aetherui-no-padding",
      )}
    >
      {children}
    </Component>
  );
}
