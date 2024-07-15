import React, { useEffect, useRef, useState } from "react";

import InputWrapper from "./InputWrapper";
import { Generic } from "../Layouts/Generic";

import { DEFAULT_TEXTAREA_TAG, TextAreaProps } from "../../types/components";
import { ExtractElemRef, HasDisplayName, RefProp } from "../../types/render";

import { forwardRefWithAs } from "../../utils/render";
import { cbnCls } from "../../utils/common";

function _TextArea(
  {
    label,
    helper,
    requiredText,
    errorText,
    error,
    variant,
    onChange,
    showCount,
    ...elementProps
  }: TextAreaProps,
  ref?: React.Ref<ExtractElemRef<DEFAULT_TEXTAREA_TAG>>,
) {
  /**
   * These are the defaults for variant and showCount, if nothing is passed in props, they are used!
   */
  if (!variant) variant = "base";
  if (!showCount) showCount = true;

  const inputRef = (ref ??
    useRef<HTMLTextAreaElement>(null)) as React.RefObject<HTMLTextAreaElement>;

  const [inputLength, setInputLength] = useState(0);
  const [isInputFocused, setIsInputFocused] = useState(false);
  const [isError, setIsError] = useState<React.ReactNode>(null);

  const onInputFocus = () => {
    setIsInputFocused(true);
  };

  const onInputBlur = () => {
    setIsInputFocused(false);
    const elem = inputRef.current;
    if (elementProps.required && elem && elem.value.length === 0) {
      if (requiredText) setIsError(requiredText);
      else setIsError("Required Field");
    } else {
      setIsError(null);
    }
  };

  useEffect(() => {
    if (error) {
      setIsError(errorText);
    } else setIsError(null);
  }, [error]);

  return (
    <InputWrapper label={label} helper={helper} isError={isError}>
      <Generic
        noMargin
        noPadding
        className={cbnCls(
          `aetherui-radius-s aetherui-textarea-wrapper-${variant}`,
          isInputFocused ? `aetherui-textarea-${variant}-focus-visible` : ``,
          isError && "aetherui-input-error",
        )}
      >
        <textarea
          onChange={(e) => {
            setInputLength(e.target.value.length);
            if (onChange) onChange(e);
          }}
          {...elementProps}
          ref={inputRef}
          onBlur={(e) => {
            onInputBlur();
            if (elementProps.onBlur) elementProps.onBlur(e);
          }}
          onFocus={(e) => {
            onInputFocus();
            if (elementProps.onFocus) elementProps.onFocus(e);
          }}
          className={cbnCls(
            `aetherui-textarea-${variant} aetherui-h-9 aetherui-w-20 aetherui-m-025`,
          )}
        />
      </Generic>
      {showCount && elementProps.maxLength && (
        <Generic
          noMargin
          noPadding
          className={cbnCls(
            "aetherui-m-top-025 aetherui-color-text-secondary aetherui-font-weight-300 aetherui-font-size-075",
          )}
        >
          {inputLength} / {elementProps.maxLength}
        </Generic>
      )}
    </InputWrapper>
  );
}

interface _ITextAreaProps extends HasDisplayName {
  (props: TextAreaProps & RefProp<typeof _TextArea>): JSX.Element;
}

export const TextArea = forwardRefWithAs(_TextArea) as _ITextAreaProps;
