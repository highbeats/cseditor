import React from 'react';

import './image.css';
import './app.css';
import {
  Entity,
  EditorState,
  AtomicBlockUtils,
} from 'draft-js';

function insertImage(editorState, url) {
  const urlType = 'image';
  const entityKey = Entity.create(urlType, 'IMMUTABLE', { src: url });
  const newEditorState = AtomicBlockUtils.insertAtomicBlock(
    editorState,
    entityKey,
    ' '
  );
  return EditorState.forceSelection(
    newEditorState,
    editorState.getCurrentContent().getSelectionAfter()
  );
};

class EditorInsert extends React.Component {
  state = {
    position: {
      transform: 'scale(0)',
    }
  };

  toggle() {
    let scale = this.state.position.transform.match(/\d+/g)[0] === '1' ? '0' : '1';
    this.setState({
      position: {
        transform: `scale(${scale})`,
        transition: 'transform 0.15s cubic-bezier(.3,1.2,.2,1)'
      }
    });
  }

  addImage(url) {
    const { editorState, onChange } = this.props;
    onChange(insertImage(editorState, url));
  }

  render() {
    return (
      <div>
        <div className="leftInsertBar">
          <div className='insert-image' onClick={::this.toggle}> ··· </div>
            <div
              className='dropdown'
              style={this.state.position}>
              <input
                className='insertImgUrl'
                placeholder='Paste image or video link...'
                type='text'
                onKeyDown={e => {
                  if (e.keyCode === 13) {
                    this.addImage(e.target.value);
                  }
                }}/>
            </div>
        </div>
      </div>
    );
  }
}

EditorInsert.displayName = 'EditorInsert';
EditorInsert.propTypes = {};
EditorInsert.defaultProps = {};

export default EditorInsert;
