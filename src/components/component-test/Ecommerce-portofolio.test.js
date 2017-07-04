import React from 'react'
import ReactDOM from 'react-dom'
import {shallow,mount} from 'enzyme'
import renderer from 'react-test-renderer'
import {Provider} from 'react-redux'
import store from '/home/stedy/Desktop/stedyyulius.com/stedy/src/store/store.js'

import ConnectedEcommerce from '../portofolios-components/Ecommerce'
import { Ecommerce } from '../portofolios-components/Ecommerce'

describe('<Ecommerce /> Component in <Portofolio /> Component',()=>{
  
  it('should render connected Ecommerce',()=> {
    const wrapper = shallow(<Provider store={store}><Ecommerce /></Provider>)
    expect(wrapper).toHaveLength(1);
  });
  
  
  it('should contain Name Collumn',()=>{
    const wrapper = shallow(<Ecommerce products={[]} />)
    const NameCollumn = wrapper.find(".media-body").find('.media-heading')
    expect(NameCollumn.root).toHaveLength(1)
  })
  
  it('should contain Price Collumn',()=>{
    const wrapper = shallow(<Ecommerce products={[]} />)
    const PriceCollumn = wrapper.find(".Price").find('strong')
    expect(PriceCollumn.root).toHaveLength(1)  
  })
  
  it('should contain Image Collumn',()=>{
    const wrapper = shallow(<Ecommerce products={[]} />)
    const ImgCollumn = wrapper.find(".media-body")
    expect(ImgCollumn.root).toHaveLength(1)
  })

  it('Submit button in Add product modal should add new Product on click',()=>{
    const wrapper = shallow(<Ecommerce products={[]} />)
    const products = wrapper.state().products
    wrapper.instance().addNewProduct({
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    })
    expect(products).toHaveLength(1)
  })
  
  it('removeProduct(index) should delete a product',()=>{
    const wrapper = shallow(<Ecommerce products={[{
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }]} />)
    const products = wrapper.state().products
    wrapper.instance().removeProduct(0)
    expect(products).toHaveLength(0)
  })
  
  it('removeCart(index) should delete an item in cart',()=>{
    const wrapper = shallow(<Ecommerce products={[]} />)
    const cart = wrapper.state().cart
    cart.push([{
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }])
    wrapper.instance().removeCart(0)
    expect(cart).toHaveLength(0)
  })
  
  it('addQuantity(index) should increase an item quantity by 1',()=>{
    const wrapper = shallow(<Ecommerce products={[{
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }]} />)
    const products = wrapper.state().products
    const totalPrice = wrapper.state().totalPrice
    wrapper.instance().addQuantity(0)
    expect(products[0].quantity).toEqual(1)
  })
  
  it('minusQuantity(index) should decrease an item quantity by 1',()=>{
    const wrapper = shallow(<Ecommerce products={[{
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 5    
    }]} />)
    const products = wrapper.state().products
    wrapper.instance().minusQuantity(0)
    expect(products[0].quantity).toEqual(4)
  })
  
  it('checkout() should set items in cart and set totalCartPrice',()=>{
    const wrapper = shallow(<Ecommerce products={[]} />)
    wrapper.state().products.push({
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 1    
    })
    wrapper.instance().checkout()
    const cart = wrapper.state().cart
    const totalCartPrice = wrapper.state().totalCartPrice
    console.log(cart);
    expect(cart).toHaveLength(1)
    expect(totalCartPrice).toEqual(16000) 
  })
})