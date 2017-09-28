/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import { SAVE_EDITOR_STATE } from '../actions/const';
import { Map } from 'immutable';
import { EditorState } from 'draft-js';

const initialState = Map({});

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  switch (action.type) {
    case SAVE_EDITOR_STATE: {
      // Modify next state depending on the action and return it
      const nextState = state.merge(action.parameter.content);
      console.log(nextState)
      return nextState;
    }
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
