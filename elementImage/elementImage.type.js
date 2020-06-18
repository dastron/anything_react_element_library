import type { typeCoreElement} from "../libraryData/typeCoreElement";
import { initElement } from "../libraryData/typeCoreElement";
export type typeCoreElementImage = {
    ...typeCoreElement,

    images: ?Array<{
        src: string,
        ref: string
    }>
  }

  


export const initCoreElementImage:typeCoreElementImage = {
    ...initElement,
    images:[]
  };