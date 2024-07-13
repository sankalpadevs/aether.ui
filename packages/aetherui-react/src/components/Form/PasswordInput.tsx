import React, { useEffect, useState } from "react";

import InputWrapper from "./InputWrapper";
import { PasswordInputProps } from "../../types/form";
import useInput from "../../hooks/input";
import { Grid } from "../Layouts/Grid";
import { cbnCls } from "../../utils/common";
import { Typography } from "../Typography/Typography";
import { Generic } from "../Layouts/Generic";

export function PasswordInput({
  helper,
  errorText,
  requiredText,
  error,
  label,
  matcher,
  showStrength,
  strengthCriteria,
  ...elementProps
}: PasswordInputProps) {
  const [strength, setStrength] = useState<number | null>(null);

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
  );

  const getPasswordStrength = (strength: number) => {
    if (strength >= 1) {
      return (
        <Typography
          className={"aetherui-font-weight-400"}
          variant={"h6"}
          as={"div"}
          color={"success"}
        >
          Strong
        </Typography>
      );
    } else if (strength <= 0.5) {
      return (
        <Typography
          className={"aetherui-font-weight-400"}
          variant={"h6"}
          as={"div"}
          color={"error"}
        >
          Weak
        </Typography>
      );
    } else {
      return (
        <Typography
          className={"aetherui-font-weight-400"}
          variant={"h6"}
          as={"div"}
          color={"warning"}
        >
          Moderate
        </Typography>
      );
    }
  };

  const handlePasswordStrength = () => {
    const elem = inputRef.current;
    if (elem && strengthCriteria && strengthCriteria.length > 0) {
      const password = elem.value;
      let strength = 0.0;

      // Check each criterion and increment strength for each match
      strengthCriteria.forEach((regex) => {
        if (regex.test(password)) {
          strength++;
        }
      });

      // Check password length
      if (password.length >= 8) {
        strength++;
      }

      strength /= strengthCriteria.length;
      setStrength(strength);
    }
  };

  useEffect(() => {
    if (error) {
      setIsError(errorText);
    } else setIsError(null);
  }, [error]);

  return (
    <InputWrapper label={label} helper={helper} isError={isError}>
      <Grid
        flow={"column"}
        noMargin
        noPadding
        className={cbnCls(
          `aetherui-radius-s aetherui-p-x-075 aetherui-p-y-025 aetherui-passwordinput-wrapper`,
          isInputFocused ? `aetherui-passwordinput-focus-visible` : ``,
          isError && "aetherui-input-error",
        )}
      >
        <input
          onFocus={(e) => {
            onInputFocus();
            if (elementProps.onFocus) elementProps.onFocus(e);
          }}
          onBlur={(e) => {
            onInputBlur();
            if (showStrength) handlePasswordStrength();
            if (elementProps.onBlur) elementProps.onBlur(e);
          }}
          ref={inputRef}
          type={"password"}
          className={cbnCls(`aetherui-passwordinput`)}
          {...elementProps}
        />
      </Grid>
      {showStrength && strength ? (
        <Generic
          className={"aetherui-font-size-075 aetherui-color-text-disabled"}
          noMargin
          noPadding
        >
          Password Strength: {getPasswordStrength(strength)}
        </Generic>
      ) : (
        <></>
      )}
    </InputWrapper>
  );
}
