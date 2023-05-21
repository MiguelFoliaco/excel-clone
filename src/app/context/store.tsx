import React, { Dispatch, SetStateAction, useState } from "react";
import { ITheme, theme as T } from "../theme";
import { Cell } from "../../components/sheet/interface/Cell";

export const useAppStore = (): IAppContext => {
  //* JSON
  const [theme, setTheme] = useState<ITheme>(T);
  const [openModal, setOpenModal] = useState(false);
  const [cells, setCells] = useState<Cell>({});
  const [cellSelected, setCellSelected] = useState<Cell>();
  return {
    values: {
      theme,
      openModal,
      cells,
      cellSelected
    },
    actions: {
      setTheme,
      setOpenModal,
      setCells,
      setCellSelected
    },
  };
};

export interface IAppContext {
  values: {
    theme: ITheme;
    openModal: boolean;
    cells: Cell;
    cellSelected?: Cell;
  };
  actions: {
    setTheme: Dispatch<SetStateAction<ITheme>>;
    setOpenModal: Dispatch<SetStateAction<boolean>>;
    setCells: Dispatch<SetStateAction<Cell>>;
    setCellSelected: Dispatch<SetStateAction<Cell | undefined>>;
  };
}
