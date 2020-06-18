// @flow
import React, { Component } from 'react'
import { Form, Item, Segment, Header, Grid } from 'semantic-ui-react'
import type { typeCoreElement} from '../libraryData/typeCoreElement'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../helperCode/CodeBlock.react';

type state = {
  initialCode: ?string,
}

type props = {
  ...typeCoreElement,
  initialCode: string,
  name?: string,
  label?: string,
  onChange: ({
    currentTarget: {
      name: string,
      value: any,
    },
  }) => {},
}

class ElementJavascriptInput extends Component<props, state> {
  state = {
    initialCode: this.props.initialCode,
  }
  onChange = (e: any) => {
    let { name, value } = e.currentTarget
    this.setState((prevState) => {
      return {
        initialCode: value,
      }
    })
    this.props.onChange(e)
  }

  render() {
    const { initialCode } = this.state
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
                name={'initialCode'}
                placeholder="Insert some Javascript here"
                defaultValue={initialCode}
              />
            </Grid.Column>
            <Grid.Column>
              <ReactMarkdown
                source={'```javascript \r\n' + (initialCode || '')}
                renderers={{
                  code: CodeBlock,
                }}
              />
            </Grid.Column>
          </Grid>
        </Segment>
      </div>
    )
  }
}

export default ElementJavascriptInput
