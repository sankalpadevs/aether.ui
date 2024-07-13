import React from "react";
// import {TButton} from "./button";

export type TNotificationVariant = "banner" | "alert";

// export type NotificationControlButton = TButton & {
//     onClick: (e: React.MouseEvent<any>) => void
// }

export type TNotificationBase = {
  type?: "default" | "primary" | "success" | "error" | "warning";
  title: React.ReactNode;
  description?: React.ReactNode;
  onUnmount?: () => any;
};

export type TNotificationWithCategory = TNotificationBase & {
  category: string;
};

export type TNotificationWithIconAndVariant = TNotificationBase & {
  category?: string;
  icon?: React.ReactNode;
  variant?: TNotificationVariant;
  // controlButtons?: NotificationControlButton[]
};

export type TNotification =
  | TNotificationWithCategory
  | TNotificationWithIconAndVariant;
