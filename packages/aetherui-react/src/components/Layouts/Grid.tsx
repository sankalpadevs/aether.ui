import React from "react";
import { Generic } from "../Generic/generic";
import { LayoutComponentProps } from "../../../types";
import { cbnCls } from "../../../utils/utils";

const defaultClass = "aetherui-grid";

type GridLayoutProps = LayoutComponentProps & {
  flow?: "column" | "row";
};

export function Grid({
  overrideClassName,
  children,
  ...rest
}: GridLayoutProps) {
  return (
    <Generic
      {...rest}
      overrideClassName={cbnCls(
        defaultClass,
        overrideClassName,
        rest.flow === "column" ? "aetherui-grid-column" : "aetherui-grid-row",
      )}
    >
      {children}
    </Generic>
  );
}
