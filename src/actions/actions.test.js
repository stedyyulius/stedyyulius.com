import * as actions from './index'

describe('actions redux',()=>{
  
  it('addProduct(payload) should add one new product',()=>{
    const newProduct = {
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }
    const expectedAction = {type: 'Update Products', payload: newProduct}
    const actualAction = actions.addProduct(newProduct)
    expect(actualAction).toEqual(expectedAction)
  })
})