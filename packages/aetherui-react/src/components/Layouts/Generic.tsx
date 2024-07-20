import React from "react";

import {
  ExtractElemRef,
  HasDisplayName,
  JSXElements,
  RefProp,
} from "../../types/render";
import { GenericComponentProps } from "../../types/components";

import { cbnCls } from "../../utils/common";
import { forwardRefWithAs } from "../../utils/render";

const genericClass = "aetherui-box";

function _Generic<TElem extends JSXElements>(
  {
    as,
    children,
    overrideClassName,
    noMargin,
    noPadding,
    className,
    ...rest
  }: GenericComponentProps<TElem>,
  ref: React.Ref<ExtractElemRef<TElem>>,
) {
  /**
   * If no 'as' is passed as prop, div will be used by default
   */
  const Component = (as ?? "div") as React.ElementType;

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
}

interface _IGenericProps extends HasDisplayName {
  <TElem extends JSXElements>(
    props: GenericComponentProps<TElem> & RefProp<typeof _Generic>,
  ): JSX.Element;
}

export const Generic = forwardRefWithAs(_Generic) as _IGenericProps;
