import React from 'react';
import { shallow } from 'enzyme';
import AddImageButton from 'components//AddImageButton.js';

describe('<AddImageButton />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<AddImageButton />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "addimagebutton-component"', () => {
      expect(component.hasClass('addimagebutton-component')).to.equal(true);
    });
  });
});
