// @flow

import type { typeElementLibrary } from "../enumElements";
import { ELEMENT_LIBRARY } from "../enumElements";
export type typeCoreElement= {
    id: string,
    path?: string,
    createdAt: string,
    createdBy: string,
    description: string,
    keywords: ?Array<string>,
    numberKeywords: number,
    topics: ?Array<string>,
    links: Array<?string>,
    numberLinks: number,
    order: number,
    title: string,
    content:string,
    slug: string,
    views?: number,
    updateAt: string,
    type: typeElementLibrary
  }


export const initElement:typeCoreElement= {
    id: "",
    createdAt: "",
    createdBy: "",
    description: "",
    keywords: [],
    numberKeywords: 0,
    topics: [],
    links: [],
    numberLinks: 0,
    order: 0,
    title: "",
    content: "",
    slug: "",
    updateAt: "",
    type: ELEMENT_LIBRARY.MARKDOWN

  };