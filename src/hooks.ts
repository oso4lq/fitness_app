import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
  useStore,
} from "react-redux";
import { AppDispatch, AppStore, RootState } from "@/store/store";
import { useEffect, useRef } from "react";

// Хуки useAppDispatch, useAppSelector и useAppStore позволяют использовать функции useDispatch, useSelector и useStore из библиотеки react-redux с типизацией.
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppStore: () => AppStore = useStore;
export const useOutsideClick = (callback: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent | TouchEvent) => {
      if (
        ref.current &&
        !ref.current.contains(event.target as Node) &&
        !ref.current.parentElement?.contains(event.target as Node)
      ) {
        callback();
      }
    };
    document.addEventListener("mouseup", handleOutsideClick);
    document.addEventListener("touchend", handleOutsideClick);

    return () => {
      document.removeEventListener("mouseup", handleOutsideClick);
      document.removeEventListener("touchend", handleOutsideClick);
    };
  }, [callback]);
  return ref;
};
