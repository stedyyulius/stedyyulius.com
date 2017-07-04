import React from 'react'
import {shallow,mount} from 'enzyme'
import renderer from 'react-test-renderer'

import Email from '/home/stedy/Desktop/stedyyulius.com/stedy/src/components/Email.js'

describe('<Email /> Component',()=>{
  const EmailWrapper = shallow(<Email />)
  
  it('should have property <h3>',()=>{
    const h3 = EmailWrapper.find('head').find('h3').first()
    expect(h3).toBeDefined()
  })
  
  it('should have email written',()=>{
    const email = EmailWrapper.find('h3').find('b')
    expect(email).toHaveLength(1)
  })
})