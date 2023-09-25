import { useEffect } from "react";

const useWindowListener = <K extends keyof WindowEventMap>(
  eventType: K,
  listener: (this: Window, ev: WindowEventMap[K]) => void
) => {
  useEffect(() => {
    window.addEventListener(eventType, listener);
    return () => {
      window.removeEventListener(eventType, listener);
    };
  }, [eventType, listener]);
};

export default useWindowListener;
