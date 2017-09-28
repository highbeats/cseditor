import { SAVE_EDITOR_STATE } from './const';

function action(parameter) {
  return { type: SAVE_EDITOR_STATE, parameter };
}

module.exports = action;
