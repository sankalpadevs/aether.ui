import React from "react";

import { TypographyProps } from "../../types/components";
import { HasDisplayName, JSXElements, RefProp } from "../../types/render";

import { cbnCls } from "../../utils/common";
import { forwardRefWithAs } from "../../utils/render";

const formClassName = (suffix: string) => `aetherui-${suffix}`;

function _Typography<TElem extends JSXElements>({
  as,
  ...props
}: TypographyProps<TElem>) {
  const className = formClassName(props.variant ?? "h1");

  /**
   * These are the defaults for component and color, if nothing is passed they are used!
   */
  const Component = (as ?? "h1") as React.ElementType;
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

interface _ITypographyProps extends HasDisplayName {
  <TElem extends JSXElements>(
    props: TypographyProps<TElem> & RefProp<typeof _Typography>,
  ): JSX.Element;
}

export const Typography = forwardRefWithAs(_Typography) as _ITypographyProps;
