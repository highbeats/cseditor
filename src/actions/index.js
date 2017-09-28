/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import saveEditorState from '../actions/saveEditorState.js';
import saveEditor from '../actions/saveEditor.js';
const actions = {
  saveEditor,
  saveEditorState
};
module.exports = actions;
