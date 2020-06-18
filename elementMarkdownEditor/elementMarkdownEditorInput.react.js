// @flow
import React, { Component } from 'react'
import { Form, Item, Segment, Header, Grid } from 'semantic-ui-react'
import type { typeElement } from '../../data/typeElement'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../elementJavascript/CodeBlock.react';

type state = {
  initialMarkdown: ?string,
}

type props = {
  ...typeElement,
  initialMarkdown: string,
  name?: string,
  label?: string,
  onChange: ({
    currentTarget: {
      name: string,
      value: any,
    },
  }) => {},
}

class ElementMarkdownEditorInput extends Component<props, state> {
  state = {
    initialMarkdown: this.props.initialMarkdown || '',
  }
  onChange = (e: any) => {
    let { name, value } = e.currentTarget
    this.setState((prevState) => {
      return {
        initialMarkdown: value,
      }
    })
    this.props.onChange(e)
  }

  render() {
    const { initialMarkdown } = this.state
    // const {  } = this.props
    return (
      <div>
        <Header size="tiny"> {'Markdown Editor'} </Header>
        <Segment basic>
          <Grid columns="equal">
            <Grid.Column>
              <Form.TextArea
                rows={15}
                onChange={this.onChange}
                style={{ width: '100%', minHeight: '100%', resize: 'none' }}
                name={'initialMarkdown'}
                placeholder="Insert some markdown here"
                defaultValue={initialMarkdown}
              />
            </Grid.Column>
            <Grid.Column>
              <ReactMarkdown source={initialMarkdown} renderers={{
                code: CodeBlock,  
              }}/>
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default ElementMarkdownEditorInput
