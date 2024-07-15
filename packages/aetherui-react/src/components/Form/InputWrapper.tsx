import React from "react";

import { Typography } from "../Typography/Typography";
import { Grid } from "../Layouts/Grid";
import { Generic } from "../Layouts/Generic";

import { cbnCls } from "../../utils/common";

type InputWrapperProps = {
  label: React.ReactNode;
  children: React.ReactNode;
  helper: React.ReactNode;
  isError: React.ReactNode;
};

export default function InputWrapper({
  label,
  children,
  helper,
  isError,
}: InputWrapperProps) {
  return (
    <Grid
      noPadding
      className={cbnCls(
        "aetherui-m-top-05 aetherui-m-bottom-0 aetherui-m-x-0 aetherui-w-fit",
      )}
    >
      {label && (
        <Typography
          as={"label"}
          variant={"h6"}
          className={
            "aetherui-input-label aetherui-font-weight-500 aetherui-m-bottom-05"
          }
        >
          {label}
        </Typography>
      )}
      {children}
      {helper && (
        <Generic
          noMargin
          noPadding
          className={cbnCls(
            "aetherui-m-top-025 aetherui-color-text-secondary aetherui-font-weight-300 aetherui-font-size-075",
          )}
        >
          {helper}
        </Generic>
      )}
      {isError && (
        <Generic
          noMargin
          noPadding
          className={cbnCls(
            "aetherui-m-top-025 aetherui-font-weight-300 aetherui-color-text-error aetherui-font-size-0875",
          )}
        >
          {isError}
        </Generic>
      )}
    </Grid>
  );
}
