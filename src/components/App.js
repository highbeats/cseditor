import React from 'react';
// DraftJS imports
import Editor from 'draft-js-plugins-editor';
import { composeDecorators } from 'draft-js-plugins-editor';
import { EditorState } from 'draft-js';
//import createRichButtonsPlugin from 'draft-js-richbuttons-plugin';
import createInlineToolbarPlugin from 'draft-js-inline-toolbar-plugin';
import createCounterPlugin from 'draft-js-counter-plugin';
import createEmojiPlugin from 'draft-js-emoji-plugin';
import createImagePlugin from 'draft-js-image-plugin';
import createAlignmentPlugin from 'draft-js-alignment-plugin';
import createFocusPlugin from 'draft-js-focus-plugin';
import createResizeablePlugin from 'draft-js-resizeable-plugin';
import createDndPlugin from 'draft-js-dnd-plugin';
import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';
//...
import AddImageButton from './AddImageButton';
import SideToolbarItems from './SideToolbarItems';
import EditorInsert from './EditorInsert';
//…
import './app.css';
import 'draft-js-inline-toolbar-plugin/lib/plugin.css';
import 'draft-js-emoji-plugin/lib/plugin.css';
import 'draft-js-image-plugin/lib/plugin.css';
import 'draft-js-alignment-plugin/lib/plugin.css';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import 'draft-js-linkify-plugin/lib/plugin.css';
//...
const sideToolbarPlugin = createSideToolbarPlugin();
//const richButtonsPlugin = createRichButtonsPlugin();
const counterPlugin = createCounterPlugin();
const linkifyPlugin = createCounterPlugin();
const emojiPlugin = createEmojiPlugin();
const inlineToolbarPlugin = createInlineToolbarPlugin();
const focusPlugin = createFocusPlugin();
const resizeablePlugin = createResizeablePlugin();
const dndPlugin = createDndPlugin();
const alignmentPlugin = createAlignmentPlugin();
const { AlignmentTool } = alignmentPlugin;
const decorator = composeDecorators(
  resizeablePlugin.decorator,
  //alignmentPlugin.decorator,
  //focusPlugin.decorator,
  //dndPlugin.decorator
);
const imagePlugin = createImagePlugin({decorator});
//...
const { SideToolbar } = sideToolbarPlugin;
const { EmojiSuggestions } = emojiPlugin;
const { CharCounter } = counterPlugin;
const { InlineToolbar } = inlineToolbarPlugin;
//const { BlockquoteButton, OLButton, ULButton, H1Button, H2Button } = richButtonsPlugin;

const plugins = [
  //richButtonsPlugin,
  counterPlugin,
  linkifyPlugin,
  emojiPlugin,
  inlineToolbarPlugin,
  dndPlugin,
  focusPlugin,
  alignmentPlugin,
  resizeablePlugin,
  imagePlugin,
  sideToolbarPlugin
];
//...
function inspectEditorState(editorState) {
  const contentState = editorState.getCurrentContent();
  console.log(contentState);
  console.log(contentState.getBlockMap());
  console.log(contentState.getBlocksAsArray());
  contentState.getBlocksAsArray().map(b => console.log(b.getData()));
}
class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editorState: EditorState.createEmpty(),
      
    };
    this.onChange = editorState => {
      this.setState({editorState});
    };
  }

  onUndo() {
    let editorState = EditorState.undo(this.state.editorState);
    this.setState({editorState});
  }

  saveDocument() {
    inspectEditorState(this.state.editorState);
  }

  render() {
    const spanStyle = {
      color: 'rgb(153, 153, 153)',
      cursor: 'pointer',
      display: 'inline-block',
      marginRight: '1em'
    };
    return (
      <div className="index editor">
        <EditorInsert
          editorState={this.state.editorState}
          onChange={this.onChange} />
        <div className="myToolbar">
          <span style={spanStyle} onClick={::this.onUndo}>Undo</span>
          <span style={spanStyle}>Redo</span>
          <span
            style={spanStyle}
            onClick={() => {
              inspectEditorState(this.state.editorState);
            }}>Save</span>

          <span style={spanStyle}>Link</span>
          <span style={spanStyle} onClick={() => {
            console.log(this.state.editorState.getSelection());
          }}>
            <svg baseProfile='tiny' fill='currentColor' height='24' viewBox='0 0 24 24' width='24' >
              <path d='M0 0h24v24H0V0z' fill='none'/>
              <path d='M9.93 13.5h4.14L12 7.98zM20 2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-4.05 16.5l-1.14-3H9.17l-1.12 3H5.96l5.11-13h1.86l5.11 13h-2.09z' />
          </svg>
          </span>
        </div>
        <div>
          <Editor
            editorState={this.state.editorState}
            onChange={this.onChange}
            plugins={plugins}
            ref={element => {this.editor = element;}} />
          <AlignmentTool />
          <SideToolbar />
          <InlineToolbar editorState={this.state.editorState} />
          <CharCounter editorState={this.state.editorState} limit={200} />
          <EmojiSuggestions />
        </div>

      </div>
    );
  }
}

AppComponent.defaultProps = {
};

export default AppComponent;
