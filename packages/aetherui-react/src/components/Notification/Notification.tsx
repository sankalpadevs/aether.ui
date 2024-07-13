import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";
import {
  TNotification,
  TNotificationWithIconAndVariant,
} from "../../types/notification";
import { cbnCls } from "../../utils/common";
import { Generic } from "../Layouts/Generic";
import { useTheme } from "../../context/index";
import { Grid } from "../Layouts/Grid";
import { Close } from "../Icons/Close";

//TODO: Add animations and control buttons to the notification
export const renderNotification = (props: TNotification) => {
  // create a notification container and render a notification inside it
  const container = document.createElement("div");
  container.className = cbnCls(
    "aetherui-notification aetherui-p-x-125 aetherui-p-y-0875",
    `aetherui-${props.type ?? "primary"}-notification`,
  );
  ReactDOM.createRoot(container).render(<Notification {...props} />);
  // return the notification container to append it inside root
  return container;
};
const Notification = (props: TNotification) => {
  const { theme } = useTheme();
  const contentRef = useRef<HTMLDivElement>(null);

  let timeoutId: null | NodeJS.Timeout = null;

  let Icon: React.ReactNode;
  let variant: TNotificationWithIconAndVariant["variant"] = "banner";

  if (props.category) {
    const categoryDetails = theme.common.notificationCategories.find(
      (cat) => cat.id === props.category,
    );
    if (categoryDetails) {
      Icon = categoryDetails.icon;
      variant = categoryDetails.variant;
    }
  } else {
    Icon = (props as TNotificationWithIconAndVariant).icon;
    variant = (props as TNotificationWithIconAndVariant).variant ?? "banner";
  }

  const handleRemoveNotification = () => {
    if (contentRef.current) {
      const parent = contentRef.current.parentElement;
      if (parent) parent.remove();
    }
    if (props.onUnmount) props.onUnmount();
  };

  const registerTimeoutToRemove = () => {
    //register a timeout to remove the notification
    if (!timeoutId)
      timeoutId = setTimeout(() => {
        handleRemoveNotification();
      }, theme.common.notification.disappearTime);
  };

  const handleClearTimeout = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = null;
  };

  useEffect(() => {
    if (variant === "banner") {
      registerTimeoutToRemove();
    }
    if (contentRef.current) {
      const parent = contentRef.current.parentElement;
      if (parent) {
        parent.addEventListener("mouseenter", handleClearTimeout);
        parent.addEventListener("mouseleave", registerTimeoutToRemove);
      }
    }
  }, []);

  return (
    <>
      {Icon && (
        <Grid
          as={"span"}
          noMargin
          noPadding
          className={"aetherui-ps-center aetherui-color-inherit"}
        >
          {Icon}
        </Grid>
      )}
      <Grid
        ref={contentRef}
        noMargin
        noPadding
        className={"aetherui-m-left-075 aetherui-color-inherit"}
      >
        <Generic
          noMargin
          noPadding
          className={
            "aetherui-font-weight-600 aetherui-color-inherit aetherui-text-overflow-ellipsis-one"
          }
        >
          {props.title}
        </Generic>
        {props.description && (
          <Generic
            noMargin
            noPadding
            className={
              "aetherui-color-inherit aetherui-text-overflow-ellipsis-one"
            }
          >
            {props.description}
          </Generic>
        )}
      </Grid>
      <Grid
        onClick={handleRemoveNotification}
        noMargin
        noPadding
        className={cbnCls(
          "aetherui-color-inherit aetherui-w-fit aetherui-h-fit aetherui-p-025 aetherui-poa aetherui-notification-close",
        )}
      >
        <Close />
      </Grid>
    </>
  );
};
