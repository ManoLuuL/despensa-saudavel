import {
  ERROR_NOTIFICATION_DEFAULT_TIMER_IN_MILISSECONDS,
  SUCCESS_NOTIFICATION_DEFAULT_TIMER_IN_MILISSECONDS,
  WARN_NOTIFICATION_DEFAULT_TIMER_IN_MILISSECONDS,
} from "./consts";
import {
  ErrorToastOptions,
  SuccessToastOptions,
  WarnToastOptions,
} from "./types";
import { ReactNode, useCallback, useMemo } from "react";
import { ToastOptions, toast } from "react-toastify";

export const useToast = () => {
  const baseNotificationProps = useMemo<ToastOptions>(
    () => ({
      position: "top-right",
      theme: "dark",
      draggable: true,
      closeOnClick: true,
      draggableDirection: "x",
      pauseOnHover: true,
      pauseOnFocusLoss: true,
      style: {
        zIndex: 20000,
      },
    }),
    []
  );

  const showSuccess = useCallback(
    (message: ReactNode, options?: SuccessToastOptions) => {
      return toast(message, {
        ...baseNotificationProps,
        type: "success",
        autoClose:
          options?.timer ?? SUCCESS_NOTIFICATION_DEFAULT_TIMER_IN_MILISSECONDS,
      });
    },
    [baseNotificationProps]
  );

  const showError = useCallback(
    (message: ReactNode, options?: ErrorToastOptions) => {
      return toast(message, {
        ...baseNotificationProps,
        type: "error",
        autoClose:
          options?.timer ?? ERROR_NOTIFICATION_DEFAULT_TIMER_IN_MILISSECONDS,
      });
    },
    [baseNotificationProps]
  );

  const showWarning = useCallback(
    (message: ReactNode, options?: WarnToastOptions) => {
      return toast(message, {
        ...baseNotificationProps,
        type: "warning",
        autoClose:
          options?.timer ?? WARN_NOTIFICATION_DEFAULT_TIMER_IN_MILISSECONDS,
      });
    },
    [baseNotificationProps]
  );

  return {
    showSuccess,
    showError,
    showWarning,
  };
};
