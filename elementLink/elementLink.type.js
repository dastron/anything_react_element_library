import type { typeElement } from "../data/typeElement";
import { initElement } from "../data/typeElement";

export type typeCoreElementLink = {
    ...typeElement,
    embed?: {
      id: string, //ID for Generated Embed
      title: string,
      source?: string, //Generate Embed
      placeholder: string,
      url?: string, //Iframe URL
    },
    embed_data?: {
      status: string,
      author: string,
      publisher: string,
      date: string,
      lang: string,
      description: string,
      iframe:{
        html: string,
        url: string,
      },
      video: {
        url:string,
        type: string,
        size: number,
        height: number,
        width: number,
        size_pretty: string,
        duration: number,
        duration_pretty:string,
      },
      image: {
        url:string,
        type: string,
        size: number,
        height: number,
        width: number,
        size_pretty: string,
      },
      screenshot: {
        url:string,
        type: string,
        size: number,
        height: number,
        width: number,
        size_pretty: string,
      },
      logo: {
        url:string,
        type: string,
        size: number,
        height: number,
        width: number,
        size_pretty: string,
      },
      title: string,
      url:string,
    }
  }


export const initCoreElementLink:typeCoreElementLink = {
    ...initElement,
  };


// data:
// author: "Leonard Niehaus"
// date: "2020-05-23T04:22:06.000Z"
// description: "I am trying to get the path of a queried document in Firebase Firestore. This is my code: const location = await db.doc(‘/locations/US/regions/IOWA’).get()↵console.log(location.path)↵However loca..."
// image: {url: "https://cdn.sstatic.net/Sites/stackoverflow/Img/apple-touch-icon@2.png?v=73d79a89bded", type: "png", size: 6562, height: 316, width: 316, …}
// lang: "en"
// logo: {url: "https://logo.clearbit.com/stackoverflow.com", type: "png", size: 2991, height: 128, width: 128, …}
// publisher: "Stack Overflow"
// screenshot: {size_pretty: "502 kB", size: 502186, type: "png", url: "https://s.microlink.io/4IiYsuhJvdTSmysXygqMRcFiadU_.png", width: 2560, …}
// title: "Firestore get path of already queried document"
// url: "https://stackoverflow.com/questions/57764799/firestore-get-path-of-already-queried-document"
// __proto__: Object
// status: "success"