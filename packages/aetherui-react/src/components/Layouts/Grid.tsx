import React from "react";

import { Generic } from "./Generic";

import {
  ExtractElemRef,
  HasDisplayName,
  JSXElements,
  RefProp,
} from "../../types/render";
import { GridProps } from "../../types/components";

import { cbnCls } from "../../utils/common";
import { forwardRefWithAs } from "../../utils/render";

const defaultClass = "aetherui-grid";

function _Grid<TElem extends JSXElements>(
  { as, overrideClassName, children, flow, ...rest }: GridProps<TElem>,
  ref: React.Ref<ExtractElemRef<TElem>>,
) {
  const renderAs = as as JSXElements;

  return (
    <Generic
      ref={ref}
      as={renderAs}
      overrideClassName={cbnCls(
        defaultClass,
        overrideClassName,
        flow === "column" ? "aetherui-grid-column" : "aetherui-grid-row",
      )}
      {...rest}
    >
      {children}
    </Generic>
  );
}

interface _IGridProps extends HasDisplayName {
  <TElem extends JSXElements>(
    props: GridProps<TElem> & RefProp<typeof _Grid>,
  ): JSX.Element;
}

export const Grid = forwardRefWithAs(_Grid) as _IGridProps;
