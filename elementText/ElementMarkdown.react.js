// @flow
import React from 'react'
import { Popup, Dimmer, Loader, Segment } from 'semantic-ui-react'
import type { typeCoreElementText } from './elementText.type'
import ReactMarkdown from 'react-markdown'
import { fAnalytics } from '../../firebase/firebase.react'
import CodeBlock from '../elementJavascript/CodeBlock.react';


const ElementTextPopup = (props: any) => {
  // console.log(props)
  let href =
    (props.href && (
      <a href={props.href} rel="noopener noreferrer" target="_blank">
        {props.href.replace(
          /((^\w+:|^)\/\/)(www\.)|(^www\.)|((^\w+:|^)\/\/)/,
          ''
        )}
      </a>
    )) ||
    null
  const value = props.children[0].props.value
  return (
    <div>
      <div>{href || value}</div>
      <Segment basic>
        <Dimmer active inverted>
          <Loader inverted></Loader>
        </Dimmer>{' '}
      </Segment>
    </div>
  )
}


 const ElementMarkdown = (props: {content:string}) => {
    return (<ReactMarkdown
        source={props.content}
        // transformLinkUri={(props) => {
        //     console.log(props)
        // }}
        renderers={{
          //Code 
          code: CodeBlock,
          // linkReference are [] w/o a url / href; keywords
          linkReference: (props) => {
            return <strong>{props.children}</strong>
            //   <Popup
            //     content={<ElementTextPopup {...props} />}
            //     on='click'
            //     position='top center'
            //     trigger={<a>[{props.children}]</a>}
            //   />
            // )
          },
          // links include a url / href
          link: (props) => {
            return (
              <Popup
                content={<ElementTextPopup {...props} />}
                on="click"
                position="top center"
                onOpen={() => {
                  fAnalytics.logEvent('select_content', {
                    content_id: props.href,
                    content_type: 'linkReference',
                    event_label: props.href,
                  })
                }}
                trigger={
                  <a
                    href={props.href}
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                    }}
                  >
                    {props.children}
                  </a>
                }
              />
            )
          },
        }}
      />)
}


export default ElementMarkdown