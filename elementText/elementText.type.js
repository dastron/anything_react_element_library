import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";
export type typeCoreElementText = {
    ...typeElement,
    content: string,
  }

  


export const initCoreElementText:typeCoreElementText = {
    ...initElement,
    content: "",
  };