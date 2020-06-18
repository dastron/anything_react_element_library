import React, { Component } from 'react'
import ReactMarkdown from 'react-markdown'
import CodeBlock from '../elementJavascript/CodeBlock.react'

const CodeRenderer = (props: { source: string }) => {
  return (
    <ReactMarkdown
      ReactMarkdown
      source={'```python \r\n' + props.source}
      renderers={{
        code: CodeBlock,
      }}
    />
  )
}

export default CodeRenderer
