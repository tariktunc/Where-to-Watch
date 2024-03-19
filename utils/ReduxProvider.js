"use client";
import { Provider } from "react-redux";
import stores from "@/stores/stores";

export default function ReduxProvider({ children }) {
  return <Provider store={stores}>{children}</Provider>;
}
