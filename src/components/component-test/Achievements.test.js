import React from 'react'
import {shallow, mount} from 'enzyme'
import renderer from 'react-test-renderer'

import Achievements from '/home/stedy/Desktop/stedyyulius.com/stedy/src/components/Achievements.js'


describe('<Achievements /> Component',()=>{
  const AchievementsWrapper = shallow(<Achievements />)
  
  it('Total Achievements should be 9', ()=>{
    const Achievements = AchievementsWrapper.find('.achievements').find('.row')
    expect(Achievements).toHaveLength(7)
  })
  
  it('Every Achievements should contain Photo', ()=>{
    const AchievementsPhoto = AchievementsWrapper.find('.achievements').find('div').find('img')
    expect(AchievementsPhoto).toHaveLength(6)
  })  
})