import React, { useEffect } from "react";

import { Grid } from "../Layouts/Grid";
import { Generic } from "../Layouts/Generic";
import InputWrapper from "./InputWrapper";

import { DEFAULT_INPUT_TAG, TextInputProps } from "../../types/components";
import { ExtractElemRef, HasDisplayName, RefProp } from "../../types/render";

import { cbnCls } from "../../utils/common";
import { forwardRefWithAs } from "../../utils/render";

import useInput from "../../hooks/input";
import useNotification from "../../hooks/notification";

function _TextInput(
  {
    label,
    variant,
    prefix,
    suffix,
    helper,
    errorText,
    requiredText,
    error,
    onFocus,
    onBlur,
    textAlign,
    format,
    replacer,
    matcher,
    clearText,
    showCopy,
    copyText,
    ...elementProps
  }: TextInputProps,
  ref?: React.Ref<ExtractElemRef<DEFAULT_INPUT_TAG>>,
) {
  const forwardedRef = ref ?? React.useRef<HTMLInputElement>(null);

  const {
    inputRef,
    isInputFocused,
    isError,
    setIsError,
    onInputFocus,
    onInputBlur,
  } = useInput(
    elementProps.required,
    requiredText,
    errorText,
    forwardedRef,
    matcher,
    replacer,
    format,
  );

  const { enqueueNotification } = useNotification();

  /**
   * This is the default for variant, if nothing is passed in props, this is used.
   */
  if (!variant) variant = "base";

  useEffect(() => {
    if (error) {
      setIsError(errorText);
    } else setIsError(null);
  }, [error]);

  return (
    <InputWrapper helper={helper} isError={isError} label={label}>
      <Grid
        flow={"column"}
        noMargin
        noPadding
        className={cbnCls(
          `aetherui-radius-s aetherui-p-x-075 aetherui-p-y-05 aetherui-textinput-wrapper-${variant}`,
          isInputFocused ? `aetherui-textinput-${variant}-focus-visible` : ``,
          isError && "aetherui-input-error",
        )}
      >
        {prefix && (
          <Generic
            className={cbnCls(
              `aetherui-textinput-${variant}-prefix aetherui-m-right-05 aetherui-font-weight-300 aetherui-select-none`,
            )}
            noMargin
            noPadding
          >
            {prefix}
          </Generic>
        )}

        <input
          type={"text"}
          ref={inputRef}
          onFocus={(e) => {
            onInputFocus();
            if (onFocus) onFocus(e);
          }}
          onBlur={(e) => {
            onInputBlur();
            if (onBlur) onBlur(e);
          }}
          className={cbnCls(
            `aetherui-textinput-${variant}`,
            textAlign && `aetherui-text-align-${textAlign}`,
          )}
          {...elementProps}
        />

        {clearText && (
          <Generic
            className={cbnCls(
              `aetherui-textinput-${variant}-suffix aetherui-m-left-05 aetherui-font-weight-300 aetherui-select-none`,
            )}
            noMargin
            noPadding
          >
            X
          </Generic>
        )}

        {!clearText && suffix && (
          <Generic
            className={cbnCls(
              `aetherui-textinput-${variant}-suffix aetherui-m-left-05 aetherui-font-weight-300 aetherui-select-none`,
            )}
            noMargin
            noPadding
          >
            {suffix}
          </Generic>
        )}
        {showCopy && (
          <Generic
            onClick={() => {
              enqueueNotification({
                type: "success",
                title: "Copied Successfully!",
                description: "Text is now copied to your clipboard",
                category: "clipboard",
              });
            }}
            className={cbnCls(
              `aetherui-m-left-05 aetherui-select-none aetherui-cursor-pointer aetherui-color-text-primary`,
            )}
            noMargin
            noPadding
          >
            {copyText ? copyText : "Copy"}
          </Generic>
        )}
      </Grid>
    </InputWrapper>
  );
}

interface _ITextInputProps extends HasDisplayName {
  (props: TextInputProps & RefProp<typeof _TextInput>): JSX.Element;
}

export const TextInput = forwardRefWithAs(_TextInput) as _ITextInputProps;
