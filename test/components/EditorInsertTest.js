import React from 'react';
import { shallow } from 'enzyme';
import EditorInsert from 'components//EditorInsert.js';

describe('<EditorInsert />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<EditorInsert />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "editorinsert-component"', () => {
      expect(component.hasClass('editorinsert-component')).to.equal(true);
    });
  });
});
