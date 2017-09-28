import React from 'react';
import { shallow } from 'enzyme';
import DropCapButton from 'components//DropCapButton.js';

describe('<DropCapButton />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<DropCapButton />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "dropcapbutton-component"', () => {
      expect(component.hasClass('dropcapbutton-component')).to.equal(true);
    });
  });
});
