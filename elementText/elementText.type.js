import type { typeCoreElement} from "../libraryData/typeCoreElement";
import { initElement } from "../libraryData/typeCoreElement";
export type typeCoreElementText = {
    ...typeCoreElement,
    content: string,
  }

  


export const initCoreElementText:typeCoreElementText = {
    ...initElement,
    content: "",
  };