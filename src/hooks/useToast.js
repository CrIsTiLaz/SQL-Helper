import { useState } from "react";

/**
 *
 * @param {number} duration
 * Custom hook to handle toast for alerts
 */
export const useToast = (duration = 3000) => {
  const [toastVisible, setToastVisible] = useState(false);
  const [toastType, setToastType] = useState("");
  const [toastMessage, setToastMessage] = useState("");

  const handleShowToast = (type, message) => {
    setToastType(type);
    setToastMessage(message);
    setToastVisible(true);

    setTimeout(() => {
      setToastVisible(false);
    }, duration);
  };

  return {
    isToastVisible: toastVisible,
    showToast: handleShowToast,
    toastType,
    toastMessage,
  };
};

export default useToast;
