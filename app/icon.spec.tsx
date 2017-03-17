import { Icon } from 'icons/Icon'
import * as React from 'react'
import { expect } from 'chai'
import { mount, shallow } from 'enzyme'

describe('Test', () => {

  it('should work', () => {
    const wrapper = mount(<Icon />);
    expect(wrapper.find(Icon).length).to.equal(1);
  });

});