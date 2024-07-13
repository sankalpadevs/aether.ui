import React, { cloneElement } from "react";

export const useRefWrapper = <T, P>(component: any) => {
  const Component = React.forwardRef<T, P>((props, ref) => {
    return cloneElement(component, { ref, ...props });
  });
  console.log("component:", component);
  Component.displayName = "";
  return Component;
};
