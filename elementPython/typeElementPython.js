import type { typeCoreElement} from "../libraryData/typeCoreElement";
import { initElement } from "../libraryData/typeCoreElement";
export type typeElementPython = {
    ...typeCoreElement,
    initialCode: string,
  }

  


export const initElementText:typeElementPython = {
    ...initElement,
    initialCode: "",
  };