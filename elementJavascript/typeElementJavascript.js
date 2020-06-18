import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";
export type typeElementJavascript = {
    ...typeElement,
    initialJavascript: string,
  }

  


export const initElementText:typeElementJavascript = {
    ...initElement,
    initialJavascript: "",
  };