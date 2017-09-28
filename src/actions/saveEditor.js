import { SAVE_EDITOR } from './const';

function action(parameter) {
  return { type: SAVE_EDITOR, parameter };
}

module.exports = action;
