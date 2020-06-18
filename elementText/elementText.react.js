// @flow
import React from 'react'
import { Popup, Dimmer, Loader, Segment } from 'semantic-ui-react'
import type { typeCoreElementText } from './elementText.type'
import ReactMarkdown from 'react-markdown'
import { fAnalytics } from '../../firebase/firebase.react'
import CodeBlock from '../elementJavascript/CodeBlock.react';
import ElementMarkdown from './ElementMarkdown.react';



const CoreElementText = (props: typeCoreElementText) => {
  return (
    <div className="display-linebreak">
      <ElementMarkdown content={props.content} />
    </div>
  )
}

export default CoreElementText
