// @flow
import React, { useState } from 'react'
import { Segment, Embed, Portal, Item, Icon } from 'semantic-ui-react'
import type { typeCoreElementFullScreenEmbed } from './elementFullScreenEmbed.type'
import ReactMarkdown from 'react-markdown'
import { Placeholder } from 'semantic-ui-react'
import { Card } from 'semantic-ui-react'
import { fAnalytics } from '../../firebase/firebase.react'

const CoreElementFullScreenEmbed = (props: typeCoreElementFullScreenEmbed) => {
  const [open, setOpen] = useState(false)

  const handleClose = () => setOpen(false)
  const handleOpen = () => setOpen(true)
  let placholder = null
  let url = null
  if (props.embed) {
    placholder = props.embed.placeholder
    url = props.embed.url
  } else if (props.embedData) {
    placholder = props.embedData.screenshot.url
    url = props.url
  }
  return (
    <div>
      <Card.Group centered>
        <Card>
          <Card.Content extra>
            <div>
              <Item onClick={handleOpen}>
                <Item.Header style={{ width: '100%' }}>
                  {props.embedData.title}
                  <Icon
                    size="large"
                    style={{ float: 'right' }}
                    name="expand arrows alternate"
                  />
                </Item.Header>

                <Item.Image
                  style={{ border: '1px solid rgba(0,0,0,.1)' }}
                  bordered
                  size="medium"
                  src={props.embedData.screenshot.url}
                />

                <Item.Content>
                  <Item.Meta>
                    <span className="price">{props.embedData.author}</span>
                    <span className="stay">{props.embedData.publisher}</span>
                  </Item.Meta>
                  <Item.Description>
                    {props.embedData.description}
                  </Item.Description>
                </Item.Content>
              </Item>
            </div>
          </Card.Content>
        </Card>
      </Card.Group>

      <Portal onClose={handleClose} open={open}>
        <Segment
          style={{
            left: '0',
            width: '100vw',
            height: '100vh',
            position: 'fixed',
            zIndex: 10000,
            top: '-14px',
          }}
        >
          <div>
            <div>
              <Icon
                name="times"
                size="huge"
                style={{ float: 'right' }}
                onClick={handleClose}
              />
            </div>

            {url && (
              <Embed
                iframe={{
                  allowFullScreen: true,
                  scrolling: true,
                }}
                style={{ marginLeft: '66px' }}
                icon="right circle arrow"
                placeholder={placholder}
                url={url}
              />
            )}
          </div>
        </Segment>
      </Portal>
    </div>
  )
}

export default CoreElementFullScreenEmbed