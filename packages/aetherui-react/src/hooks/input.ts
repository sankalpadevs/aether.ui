import React, { useState } from "react";
import { matchPattern } from "../utils/common";

export default function useInput(
  isRequired: boolean | undefined,
  requiredText: React.ReactNode,
  errorText: React.ReactNode,
  ref: React.LegacyRef<HTMLInputElement>,
  matcher?: RegExp,
  replacer?: string | ((substring: string, ...args: any[]) => string),
  format?: RegExp,
) {
  const inputRef = ref as React.RefObject<HTMLInputElement>;
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isError, setIsError] = useState<React.ReactNode>(null);

  const onInputFocus = () => {
    setIsInputFocused(true);
  };

  const onInputBlur = () => {
    setIsInputFocused(false);
    const elem = inputRef.current;
    if (isRequired && elem && elem.value.length === 0) {
      if (requiredText) setIsError(requiredText);
      else setIsError("Required Field");
    } else if (elem && elem.value.length !== 0 && matcher) {
      const isMatched = matchPattern(elem.value, matcher);

      if (!isMatched) {
        //try to format
        if (replacer && format) {
          let formattedText;
          if (typeof replacer === "string") {
            formattedText = elem.value.replace(format, replacer);
          } else {
            formattedText = elem.value.replace(format, replacer);
          }
          //test the formatted text
          if (matchPattern(formattedText, matcher)) {
            elem.value = formattedText;
            setIsError(null);
          } else setIsError(errorText);
        } else {
          setIsError(errorText);
        }
      } else {
        setIsError(null);
      }
    } else {
      setIsError(null);
    }
  };

  return {
    inputRef,
    isInputFocused,
    isError,
    setIsError,
    setIsInputFocused,
    onInputFocus,
    onInputBlur,
  };
}
