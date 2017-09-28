import React, { Component } from 'react';

import {
  Editor,
  editorStateFromHtml,
  editorStateToHtml,
  editorStateFromRaw,
  editorStateToJSON
} from 'last-draft';

import RAW from './raw';

class Writer extends Component {
  constructor(props) {
    super(props)
    /* examples of initial state */
    const INITIAL_STATE = editorStateFromRaw(RAW)
    //const INITIAL_STATE = editorStateFromRaw({})
    //const INITIAL_STATE = editorStateFromHtml(HTML)
    //const INITIAL_STATE = editorStateFromHtml('<div />')
    this.state = {
      editorState: INITIAL_STATE
    };
  }

  onChange(editorState) {
    this.setState({ editorState });
    /* You would normally save this to your database here instead of logging it */
    //console.log(editorStateToHtml(editorState))
    //console.log(editorStateToJSON(editorState))
  }

  render() {
    return (
      <Editor
        inline={['bold', 'italic', 'dropcap']}
        blocks={['ol', 'h2', 'quote']}
        autofocus={true}
        editorState={this.state.editorState}
        placeholder='Type your text...'
        onChange={::this.onChange} />
    );
  }
}

Writer.displayName = 'Writer';
Writer.propTypes = {};
Writer.defaultProps = {};

export default Writer;
