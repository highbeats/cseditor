import React from 'react';
import { shallow } from 'enzyme';
import Writer from 'components//Writer.js';

describe('<Writer />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<Writer />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "writer-component"', () => {
      expect(component.hasClass('writer-component')).to.equal(true);
    });
  });
});
