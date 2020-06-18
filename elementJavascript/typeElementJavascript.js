import type { typeCoreElement} from "../libraryData/typeCoreElement";
import { initElement } from "../libraryData/typeCoreElement";
export type typeElementJavascript = {
    ...typeCoreElement,
    initialJavascript: string,
  }

  


export const initElementText:typeElementJavascript = {
    ...initElement,
    initialJavascript: "",
  };