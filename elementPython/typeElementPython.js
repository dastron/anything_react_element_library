import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";
export type typeElementPython = {
    ...typeElement,
    initialCode: string,
  }

  


export const initElementText:typeElementPython = {
    ...initElement,
    initialCode: "",
  };