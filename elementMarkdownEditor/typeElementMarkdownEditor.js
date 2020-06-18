import type { typeCoreElement} from "../libraryData/typeCoreElement";
import { initElement } from "../libraryData/typeCoreElement";
export type typeElementJavascript = {
    ...typeCoreElement,
    initialMarkdown: string,
    
  }

  


export const initElementText:typeElementJavascript = {
    ...initElement,
    initialMarkdown: "",
  };