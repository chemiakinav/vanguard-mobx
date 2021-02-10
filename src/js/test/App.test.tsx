import React from 'react'
import Enzyme, { shallow, mount, render } from 'enzyme'
import App from '../app'

describe('<App />', () => {
  test('renders a <div> content tag', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.content')).toHaveLength(1);
  });
})
