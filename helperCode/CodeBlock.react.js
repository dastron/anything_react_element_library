import React from 'react';
import PropTypes from 'prop-types';
// import SyntaxHighlighter from 'react-syntax-highlighter';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { twilight } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default class CodeBlock extends React.PureComponent {
  

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter language={language} style={twilight}>
        {value}
      </SyntaxHighlighter>
    );
  }
}