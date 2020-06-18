import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";
export type typeElementJavascript = {
    ...typeElement,
    initialMarkdown: string,
    
  }

  


export const initElementText:typeElementJavascript = {
    ...initElement,
    initialMarkdown: "",
  };