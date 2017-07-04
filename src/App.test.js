import React from 'react';
import ReactDOM from 'react-dom';
import {shallow} from 'enzyme'
import renderer from 'react-test-renderer'

import App from './App';

describe('renders without crashing', () => {
  const appWrapper = shallow(<App />)
  
  it('renders correctly',()=>{
    expect(appWrapper).toHaveLength(1)
  })
});
