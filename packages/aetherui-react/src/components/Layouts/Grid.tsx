import React from "react";
import { Generic } from "./Generic";
import { GenericComponentProps } from "../../types/layout";
import { cbnCls } from "../../utils/common";

const defaultClass = "aetherui-grid";

type GridProps<T extends keyof React.JSX.IntrinsicElements = "div"> =
  GenericComponentProps<T> & {
    flow?: "column" | "row";
  };

const GridWithoutRef = <T extends keyof React.JSX.IntrinsicElements = "div">(
  { as, overrideClassName, children, ...rest }: GridProps<T>,
  ref: React.Ref<T>,
) => {
  const renderAs = as || "div";

  return (
    <Generic
      ref={ref}
      as={renderAs}
      overrideClassName={cbnCls(
        defaultClass,
        overrideClassName,
        rest.flow === "column" ? "aetherui-grid-column" : "aetherui-grid-row",
      )}
      {...rest}
    >
      {children}
    </Generic>
  );
};

export const Grid = GridWithoutRef;

// Grid.displayName = "Grid"
