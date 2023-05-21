import React, { useContext } from "react";
import { AppContext } from "../../app/context";

export const useGlobal = () => {
  const context = useContext(AppContext);
  return {
    ...context,
  };
};