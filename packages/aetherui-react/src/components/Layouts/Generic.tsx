import React from "react";
import { GenericComponentProps } from "../../types/layout";
import { cbnCls } from "../../utils/common";

const genericClass = "aetherui-box";

const GenericWithoutRef = (
  {
    as = "div",
    children,
    overrideClassName,
    noMargin,
    noPadding,
    className,
    ...rest
  }: GenericComponentProps,
  ref: React.Ref<HTMLElement>,
) => {
  // by default <div> is rendered
  const Component = as as React.ElementType;

  return (
    <Component
      ref={ref}
      {...rest}
      className={cbnCls(
        genericClass,
        className,
        overrideClassName,
        !noMargin && "aetherui-m-025",
        !noPadding && "aetherui-p-025",
      )}
    >
      {children}
    </Component>
  );
};

export const Generic = React.forwardRef(GenericWithoutRef);

Generic.displayName = "Generic";
