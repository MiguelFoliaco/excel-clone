import { KEY, TOKEN_KEY } from "../constants";

export const local = localStorage;

export const idUser = local.getItem("idUser");

export const tokenCryp = (token: string) => {
  const newToken = btoa(token + "{@}" + KEY);
  local.setItem(TOKEN_KEY, newToken);
};
export const getToken = () => {
  const token = local.getItem(TOKEN_KEY);
  if (token === null) return "";
  const tokenDescript = atob(token);
  const toekenArr = tokenDescript.split("{@}");
  if (toekenArr[0] !== undefined) return toekenArr[0];
  return "";
};
