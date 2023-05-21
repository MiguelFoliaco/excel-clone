import React, { Dispatch, SetStateAction, useState } from "react";
import { ITheme, theme as T } from "../theme";

export const useAppStore = (): IAppContext => {
  //* JSON
  const [theme, setTheme] = useState<ITheme>(T);
  return {
    values: {
      theme,
    },
    actions: {
      setTheme,
    },
  };
};

export interface IAppContext {
  values: {
    theme: ITheme;
  };
  actions: {
    setTheme: Dispatch<SetStateAction<ITheme>>;
  };
}
