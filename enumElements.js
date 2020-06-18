// @flow

import React from 'react'
import CoreElementText from './elementText/elementText.react'
import CoreElementImage from './elementImage/elementImage.react'
import CoreElementJavascript from './elementJavascript/elementJavascript.react'
import CoreElementEmbed from './elementEmbed/elementEmbed.react'
import ElementEmbedInput from './elementEmbed/elementEmbedInput.react'
import ElementTextInput from './elementText/elementTextInput.react'
import ElementLinkInput from './elementLink/elementLinkInput.react'
import CoreElementLink from './elementLink/elementLink.react'
import { Segment } from 'semantic-ui-react'
import CoreElementFullScreenEmbed from './elementFullScreenEmbed/elementFullScreenEmbed.react'
import CoreElementLunarLander from './elementLunarLander/elementLunarLander.react'
import CoreElementFormula from './elementFormula/elementFormula.react'
import ElementFormulaInput from './elementFormula/elementFormulaInput.react'
import CoreElementMarkdownEditor from './elementMarkdownEditor/elementMarkdownEditor.react'
import ElementMarkdownEditorInput from './elementMarkdownEditor/elementMarkdownEditorInput.react'
import ElementJavascriptInput from './elementJavascript/elementJavascriptInput.react';
import ElementPythonInput from './elementPython/elementPythonInput.react';
import CoreElementPython from './elementPython/elementPython.react';
import type { typeEventOnChange } from '../data/typeEventOnChange';
import type { typeCoreElement } from './libraryData/typeCoreElement';

export const ELEMENT_LIBRARY = Object.freeze({
  CARD: 'coreElementCard',
  IMAGE: 'coreElementImage',
  TEXT: 'coreElementText',
  EMBED: 'coreElementEmebed',
  LINK: 'coreElementLink',
  MARKDOWN: 'coreElementMarkdown',
  JAVASCRIPT: 'coreElementJavascript',
  MARKDOWN_EDITOR: 'coreElementMarkdownEditor',
  PYTHON: 'coreElementPython',
  FULLSCREENEMBED: 'coreElementFullScreenEmbed',
  LUNARLANDER: 'coreElementLunarLander',
  FORMULA: 'coreElementFormula',
})

export type typeElementLibrary = $Values<typeof ELEMENT_LIBRARY>

const getElementLibrary = (obj: {
  type: typeElementLibrary,
}): typeElementLibrary => obj.type

export const LibraryElementEnum: typeElementLibrary[] = [
  ELEMENT_LIBRARY.TEXT,
  ELEMENT_LIBRARY.MARKDOWN,
  ELEMENT_LIBRARY.LINK,
  ELEMENT_LIBRARY.FULLSCREENEMBED,
  ELEMENT_LIBRARY.EMBED,
  ELEMENT_LIBRARY.CARD,
  ELEMENT_LIBRARY.IMAGE,
  ELEMENT_LIBRARY.MARKDOWN_EDITOR,
  ELEMENT_LIBRARY.JAVASCRIPT,
  ELEMENT_LIBRARY.PYTHON,
  ELEMENT_LIBRARY.LUNARLANDER,
  ELEMENT_LIBRARY.FORMULA,
]

export function ElementLibraryUtil(
  element_type: typeElementLibrary,
  content: any
) {
  const key = getElementLibrary({ type: element_type })
  // console.log(element_type)

  switch (key) {
    case ELEMENT_LIBRARY.MARKDOWN:
      return null
    case ELEMENT_LIBRARY.TEXT:
      return null
    case ELEMENT_LIBRARY.FULLSCREENEMBED:
      return (
        <Segment basic>
          <CoreElementFullScreenEmbed {...content} />
        </Segment>
      )
    case ELEMENT_LIBRARY.CARD:
      return null
    case ELEMENT_LIBRARY.IMAGE:
      return (
        <Segment basic>
          <CoreElementImage {...content} />
        </Segment>
      )
    case ELEMENT_LIBRARY.MARKDOWN_EDITOR:
      return <CoreElementMarkdownEditor {...content} />
    case ELEMENT_LIBRARY.JAVASCRIPT:
      return <CoreElementJavascript {...content} />
    case ELEMENT_LIBRARY.PYTHON:
      return (<CoreElementPython {...content} />)
    case ELEMENT_LIBRARY.EMBED:
      return (
        <Segment basic>
          <CoreElementEmbed {...content} />
        </Segment>
      )
    case ELEMENT_LIBRARY.LINK:
      return (
        <Segment basic>
          <CoreElementLink {...content} />
        </Segment>
      )
    case ELEMENT_LIBRARY.LUNARLANDER:
      return (
        <Segment basic>
          <CoreElementLunarLander {...content} />
        </Segment>
      )
    case ELEMENT_LIBRARY.FORMULA:
      return (
        <Segment basic>
          <CoreElementFormula {...content} />
        </Segment>
      )
    default:
      break
  }
}

export function ElementLibraryInputUtil(
  element_type: typeElementLibrary,
  element: typeCoreElement | any, // TODO - Add a flow type union
  onChange: typeEventOnChange
) {
  const key = getElementLibrary({ type: element_type })

  switch (key) {
    case ELEMENT_LIBRARY.TEXT:
      return <CoreElementText {...element} />
    case ELEMENT_LIBRARY.CARD:
      return <CoreElementText {...element} />
    case ELEMENT_LIBRARY.IMAGE:
      return <CoreElementText {...element} />
    case ELEMENT_LIBRARY.MARKDOWN:
      return <CoreElementText {...element} />
    case ELEMENT_LIBRARY.MARKDOWN_EDITOR:
      return <ElementMarkdownEditorInput onChange={onChange} {...element} />
    case ELEMENT_LIBRARY.JAVASCRIPT:
      return <ElementJavascriptInput onChange={onChange} {...element} />
    case ELEMENT_LIBRARY.PYTHON:
      return <ElementPythonInput onChange={onChange} {...element} />
    case ELEMENT_LIBRARY.EMBED:
      return <ElementLinkInput onChange={onChange} {...element} />
    case ELEMENT_LIBRARY.LINK:
      return <ElementLinkInput onChange={onChange} {...element} />
    case ELEMENT_LIBRARY.FULLSCREENEMBED:
      return <CoreElementFullScreenEmbed {...element} />
    case ELEMENT_LIBRARY.LUNARLANDER:
      return <CoreElementLunarLander {...element} />
    case ELEMENT_LIBRARY.FORMULA:
      return <ElementFormulaInput onChange={onChange} {...element} />
    default:
      break
  }
}

