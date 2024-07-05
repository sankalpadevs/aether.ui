import React from "react";
import { TypographyProps } from "../../types";
import { cbnCls } from "../../utils/utils";

export function Typography({ as: Component, ...props }: TypographyProps) {
  let className = "";
  switch (props.variant) {
    case "h1":
      className = "aetherui-h1";
      break;
    case "h2":
      className = "aetherui-h2";
      break;
    case "h3":
      className = "aetherui-h3";
      break;
    case "h4":
      className = "aetherui-h4";
      break;
    case "h5":
      className = "aetherui-h5";
      break;
    case "h6":
      className = "aetherui-h6";
      break;
    default:
      className = "aetherui-h1";
      break;
  }
  if (!Component) Component = "h1";
  if (!props.color) props.color = "black";

  return (
    <Component
      className={cbnCls(
        className,
        props.className,
        `aetherui-text-color-${props.color}`,
      )}
    >
      {props.children}
    </Component>
  );
}
