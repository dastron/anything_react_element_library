import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";
export type typeCoreElementImage = {
    ...typeElement,

    images: ?Array<{
        src: string,
        ref: string
    }>
  }

  


export const initCoreElementImage:typeCoreElementImage = {
    ...initElement,
    images:[]
  };