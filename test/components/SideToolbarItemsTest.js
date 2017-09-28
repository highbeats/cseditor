import React from 'react';
import { shallow } from 'enzyme';
import SideToolbarItems from 'components//SideToolbarItems.js';

describe('<SideToolbarItems />', () => {

  let component;
  beforeEach(() => {
    component = shallow(<SideToolbarItems />);
  });

  describe('when rendering the component', () => {

    it('should have a className of "sidetoolbaritems-component"', () => {
      expect(component.hasClass('sidetoolbaritems-component')).to.equal(true);
    });
  });
});
