import React from "react";

import { CheckboxProps } from "../../types/form";
import { Grid } from "../Layouts/Grid";
import InputWrapper from "./InputWrapper";
import useInput from "../../hooks/input";

export function Checkbox({
  helper,
  errorText,
  requiredText,
  error,
  label,
  ...elementProps
}: CheckboxProps) {
  const {
    inputRef,
    isInputFocused,
    isError,
    setIsError,
    onInputFocus,
    onInputBlur,
  } = useInput(elementProps.required, requiredText, errorText);

  return (
    <InputWrapper label={label} helper={helper} isError={undefined}>
      <Grid flow={"column"}></Grid>
    </InputWrapper>
  );
}
