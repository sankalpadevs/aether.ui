import { forwardRef } from "react";

/**
 * This function accepts a React Component and returns it as a ForwardedRefComponent.
 * @param component
 */
export function forwardRefWithAs<
  T extends { name: string; displayName?: string },
>(
  component: T,
): T & {
  displayName: string;
} {
  return Object.assign(forwardRef(component as any) as any, {
    displayName: component.displayName ?? component.name,
  });
}
