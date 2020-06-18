// @flow
import React from 'react'
import { Item } from 'semantic-ui-react'
import type { typeCoreElementLink } from "./elementLink.type";

const CoreElementLink = (props: typeCoreElementLink) => {
  // console.log(props.embed)
  return (
    <div className="display-linebreak">
        <a href={props.embedData.url} target="_blank">
        <Item.Group link>
        <Item >
      <Item.Image style={{border: '1px solid rgba(0,0,0,.1)'}} bordered size='medium' src={props.embedData.screenshot.url} />

      <Item.Content>
        <Item.Header>{props.embedData.title}</Item.Header>
        <Item.Meta>
          <span className='price'>{props.embedData.author}</span>
          <span className='stay'>{props.embedData.publisher}</span>
        </Item.Meta>
        <Item.Description>{props.embedData.description}</Item.Description>
      </Item.Content>
    </Item>
    </Item.Group>
    </a>
    </div>
  )
}

export default CoreElementLink