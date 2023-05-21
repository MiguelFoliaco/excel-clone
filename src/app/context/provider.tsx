import React, { createContext, ReactNode } from "react";
import { IAppContext, useAppStore } from "./store";

//@ts-ignored
export const AppContext = createContext<IAppContext>();

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const state = useAppStore();

  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};
