import { isEmpty } from "lodash";


export const isTrulyEmpty = <T>(val: T): boolean => {
  if (typeof val === "number") return false;
  return isEmpty(val);
};