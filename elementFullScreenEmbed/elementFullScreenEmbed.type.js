import type { typeCoreElement} from '../libraryData/typeCoreElement'
import { initElement } from '../libraryData/typeCoreElement'
export type typeCoreElementText = {
  ...typeCoreElement,
  content: string,
  embed: {
    id: string, //ID for Generated Embed
    title: string,
    source?: string, //Generate Embed
    placeholder: string,
    url?: string, //Iframe URL
  },
}

export const initCoreElementText: typeCoreElementText = {
  ...initElement,
  content: '',
  embed: [],
}
