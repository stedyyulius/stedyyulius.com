import React from 'react'
import {shallow,mount} from 'enzyme'
import renderer from 'react-test-renderer'

import Footer from '/home/stedy/Desktop/stedyyulius.com/stedy/src/components/Footer.js'

describe('<Footer /> Component',()=>{
  const FooterWrapper = shallow(<Footer />)
  
  it('should have stedy`s facebook link',()=>{
    const facebook = FooterWrapper.find('.facebook')
    expect(facebook.nodes[0].props.href).toEqual("https://www.facebook.com/stedy.yulius")
  })
  
  it('should have stedy`s github link',()=>{
    const github = FooterWrapper.find('.github')
    expect(github.nodes[0].props.href).toEqual("https://github.com/stedyyulius")
  })
  
  it('should have stedy`s email link',()=>{
    const email = FooterWrapper.find('.emailUrl')
    expect(email.nodes[0].props.to).toEqual("/stedyyulius@gmail.com")
  })
})