import React, { ChangeEvent, useEffect, useState } from "react";

import InputWrapper from "./InputWrapper";
import { Grid } from "../Layouts/Grid";

import { useRefWrapper } from "../../hooks/refwrapper";

import { NumberInputProps } from "../../types/form";
import { cbnCls } from "../../utils/common";
import useInput from "../../hooks/input";
import { Button } from "../Button/Button";
import { Minus } from "../Icons/Minus";
import { Plus } from "../Icons/Plus";

const NumberInputWithoutRef = (
  {
    label,
    variant,
    helper,
    errorText,
    requiredText,
    error,
    onFocus,
    onBlur,
    onChange,
    textAlign,
    format,
    replacer,
    matcher,
    controlButtons,
    counter,
    defaultValue,
    ...elementProps
  }: NumberInputProps,
  ref: React.RefObject<HTMLInputElement>,
) => {
  const [incDisabled, setIncDisabled] = useState(false);
  const [decDisabled, setDecDisabled] = useState(false);

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

  if (!variant) variant = "base"; // defaults to base
  if (!counter) counter = 1;
  if (!textAlign) textAlign = "center";

  const handleDecrement = () => {
    const elem = inputRef.current;
    if (elem) {
      let decreasedVal = +elem.value - counter;
      if (elementProps.min && decreasedVal < elementProps.min)
        decreasedVal = elementProps.min;
      elem.value = String(decreasedVal);
      const event = new Event("customChange", { bubbles: true });
      elem.dispatchEvent(event); // Dispatch the event
    }
  };

  const handleIncrement = () => {
    const elem = inputRef.current;
    if (elem) {
      let increasedVal = +elem.value + counter;
      if (elementProps.max && increasedVal > elementProps.max)
        increasedVal = elementProps.max;
      elem.value = String(increasedVal);
      const event = new Event("customChange", { bubbles: true });
      elem.dispatchEvent(event); // Dispatch the event
    }
  };

  const onInputChange = () => {
    if (inputRef.current) {
      const val = +inputRef.current.value;
      if (elementProps.max && val >= elementProps.max) {
        setIncDisabled(true);
        setDecDisabled(false);
      } else if (elementProps.min && val <= elementProps.min) {
        setDecDisabled(true);
        setIncDisabled(false);
      } else {
        setIncDisabled(false);
        setDecDisabled(false);
      }
    }
  };

  useEffect(() => {
    if (error) {
      setIsError(errorText);
    } else setIsError(null);
  }, [error]);

  useEffect(() => {
    const elem = inputRef.current;
    if (elem) {
      elem.addEventListener("customChange", (e) => {
        onInputChange();
        if (onChange) onChange(e as unknown as ChangeEvent<HTMLInputElement>);
      });
    }
  }, []);

  return (
    <InputWrapper label={label} helper={helper} isError={isError}>
      <Grid
        flow={"column"}
        noMargin
        noPadding
        className={cbnCls(
          `aetherui-radius-s aetherui-p-x-075 aetherui-p-y-025 aetherui-numberinput-wrapper-${variant}`,
          isInputFocused ? `aetherui-numberinput-${variant}-focus-visible` : ``,
          isError && "aetherui-input-error",
        )}
      >
        {controlButtons && (
          <Button
            icon={<Minus />}
            disabled={decDisabled}
            type={"tertiary"}
            variant={"contrast"}
            onClick={handleDecrement}
          />
        )}

        <input
          defaultValue={defaultValue || 0}
          type={"number"}
          ref={inputRef}
          onFocus={(e) => {
            onInputFocus();
            if (onFocus) onFocus(e);
          }}
          onChange={(e) => {
            onInputChange();
            if (onChange) onChange(e);
          }}
          onBlur={(e) => {
            onInputBlur();
            if (inputRef.current) {
              if (
                elementProps.max &&
                +inputRef.current.value > elementProps.max
              )
                setIsError(
                  `Value must be less than or equal to ${elementProps.max}`,
                );
              if (
                elementProps.min &&
                +inputRef.current.value < elementProps.min
              )
                setIsError(
                  `Value must be grater than or equal to ${elementProps.min}`,
                );
            }
            if (onBlur) onBlur(e);
          }}
          className={cbnCls(
            `aetherui-numberinput-${variant}`,
            textAlign && `aetherui-text-align-${textAlign}`,
          )}
          {...elementProps}
        />

        {controlButtons && (
          <Button
            icon={<Plus />}
            disabled={incDisabled}
            type={"tertiary"}
            variant={"contrast"}
            onClick={handleIncrement}
          />
        )}
      </Grid>
    </InputWrapper>
  );
};

export const NumberInput = useRefWrapper<HTMLInputElement, NumberInputProps>(
  NumberInputWithoutRef,
);
