// @flow
import React from 'react'
import { Segment } from 'semantic-ui-react'
import type { typeElementPython } from './typeElementPython'
import ReactMarkdown from 'react-markdown'
import { Form } from 'semantic-ui-react'
import { Grid } from 'semantic-ui-react'
import { useState } from 'react'
import CodeBlock from '../helperCode/CodeBlock.react'
import CodeRenderer from '../helperCode/CodeRenderer.react'
import { Button } from 'semantic-ui-react'
import { Embed } from 'semantic-ui-react'
import { Header } from 'semantic-ui-react'
import { Icon } from 'semantic-ui-react';

const CoreElementPython = (props: typeElementPython) => {
  const [markdown, setMarkdown] = useState(props.initialCode)
  const [runCode, setRunCode] = useState(false)
  function onChange(e) {
    setMarkdown(e.target.value)
  }
  function updateEmbed() {
    setRunCode(false) //Clear iFrame
    setTimeout(() => {
      setRunCode(encodeURIComponent(markdown))
    }, 30)
  }
  return (
    <div className="display-linebreak full-height">
      {/* <Segment basic> */}
      <br />
      <Form>
        <Grid stackable columns="equal">
          <Grid.Column style={{ Height: '100%' }}>
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
              name={'initialCode'}
              placeholder="Insert some markdown here"
              defaultValue={props.initialCode}
            />
          </Grid.Column>
          <Grid.Column>
            <CodeRenderer source={markdown} />
            <Button
              color="green"
              fluid
              onClick={() => {
                updateEmbed()
              }}
            >
              {' '}
              Run Code (Python Tutor){' '}
            </Button>
          </Grid.Column>
        </Grid>
        <Grid centered>
          <Grid.Column>
            {runCode && (
              <div>
                <Header>
                  Code Output{' '}
                  <Icon
                    name="times"
                    style={{ float: 'right' }}
                    onClick={() => {
                      setRunCode(false)
                    }}
                  ></Icon>
                </Header>
                <div style={{ maxWidth: '495px', margin: '0 auto' }}>
                  <Embed
                    defaultActive={true}
                    style={{ height: '650px', maxWidth: '495px' }}
                    iframe={{
                      allowFullScreen: true,
                      scrolling: true,
                    }}
                    icon="right circle arrow"
                    url={
                      'https://pythontutor.com/iframe-embed.html#code=' +
                      runCode +
                      '&codeDivHeight=150&verticalStack=true&show_only_outputs=true&codeDivWidth=475&cumulative=false&curInstr=0&jumpToEnd=true&heapPrimitives=nevernest&origin=opt-frontend.js&py=3&rawInputLstJSON=%5B%5D&textReferences=false'
                    }
                  />
                </div>
              </div>
            )}
          </Grid.Column>
        </Grid>
      </Form>
      {/* </Segment> */}
    </div>
  )
}

export default CoreElementPython
