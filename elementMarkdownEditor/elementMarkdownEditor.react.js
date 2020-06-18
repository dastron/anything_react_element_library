// @flow
import React from 'react'
import { Segment } from 'semantic-ui-react'
import type { typeElementMarkdownEditor } from './typeElementMarkdownEditor'
import ReactMarkdown from 'react-markdown'
import { Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { useState } from 'react'
import CodeBlock from '../elementJavascript/CodeBlock.react';
import { Popup } from 'semantic-ui-react';
import ElementMarkdown from '../elementText/ElementMarkdown.react';

const CoreElementMarkdownEditor = (props: typeElementMarkdownEditor) => {
  const [markdown, setMarkdown] = useState(props.initialMarkdown)

  function onChange(e) {
    setMarkdown(e.target.value)
  }
  return (
    <div className="display-linebreak full-height">
      <Segment basic>
        <Form>
          <Grid stackable columns="equal">
            <Grid.Column style={{ minHeight: '100%' }}>
              <Form.TextArea
              
                onChange={(e) => {
                  onChange(e)
                }}
                style={{
                  width: '100%',
                  minHeight: '100%',
                  resize: 'none',
                  padding: '1em',
                }}
                name={'initialMarkdown'}
                placeholder="Insert some markdown here"
                defaultValue={props.initialMarkdown}
              />
            </Grid.Column>
            <Grid.Column>
              <ElementMarkdown content={markdown} />
            </Grid.Column>
          </Grid>
        </Form>
      </Segment>
    </div>
  )
}

export default CoreElementMarkdownEditor
