import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";
export type typeCoreElementText = {
    ...typeElement,
    content: string,
    embed: {
      id: string, //ID for Generated Embed
      title: string,
      source?: string, //Generate Embed
      placeholder: string,
      url?: string, //Iframe URL
    }
  }


export const initCoreElementText:typeCoreElementText = {
    ...initElement,
    content: "",
    embed: [],
  };