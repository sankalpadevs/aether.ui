import { renderNotification } from "../components/Notification/Notification";
import { useTheme } from "../context/index";
import { TNotification } from "../types/notification";

export default function useNotification() {
  const { theme } = useTheme();

  const rootClassName = "aetherui-notification-root";
  const notificationClassName = "aetherui-notification";
  const wrapOffset = theme.common.notification.wrapOffset;
  const notificationPosition = theme.common.notification.position;
  const rootParent = document.body;

  //check if notification root is present
  //if present,
  // add a notification and modify the state (Wrapped or Unwrapped by detecting the wrapOffset)
  //else enlist a parent then add a notification and modify the state (Wrapped or Unwrapped by detecting the wrapOffset)

  /**
   * Checks if the root is present or not and returns root if present else `undefined`.
   */
  const checkIfRootIsPresent = () => {
    const notificationRootCollection =
      document.body.getElementsByClassName(rootClassName);
    return notificationRootCollection && notificationRootCollection.length > 0
      ? notificationRootCollection[0]
      : undefined;
  };

  /**
   * Returns number of notifications present currently
   */
  const getNumberOfNotifications = () => {
    const root = checkIfRootIsPresent();
    if (root) {
      return root.getElementsByClassName(notificationClassName).length;
    }
    return 0;
  };

  /**
   * Gets class name for positions
   */
  const getPositionClassName = () => {
    const wrapper = "aetherui-notification-";
    switch (notificationPosition) {
      case "top-right":
        return wrapper + "top-right";
      case "top-left":
        return wrapper + "top-left";
      case "top-center":
        return wrapper + "top-center";
      case "middle-left":
        return wrapper + "middle-left";
      case "middle-right":
        return wrapper + "middle-right";
      case "center":
        return wrapper + "center";
      case "bottom-left":
        return wrapper + "bottom-left";
      case "bottom-right":
        return wrapper + "bottom-right";
      case "bottom-center":
        return wrapper + "bottom-center";
      default:
        return "default";
    }
  };

  /**
   * Creates and returns notification-root
   */
  const createNotificationRoot = () => {
    const elem = document.createElement("div");
    const position = getPositionClassName();
    elem.className = `${rootClassName} ${position}`;
    return elem;
  };

  const enqueueNotification = (props: TNotification) => {
    //check if root is present
    let root = checkIfRootIsPresent();

    //if not present,
    if (!root) {
      // insert root, then enqueue notification
      root = createNotificationRoot();
      rootParent.appendChild(root);
    }

    //check number of notifications already present
    const len = getNumberOfNotifications();

    //if length exceeds wrapOffset,
    if (len > wrapOffset) {
      //TODO: change wrapper class and also other children classes
    }

    if (root) {
      const container = renderNotification(props);
      root.appendChild(container);
    }
  };

  return { enqueueNotification };
}
