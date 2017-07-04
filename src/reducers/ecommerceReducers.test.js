import ecommerceReducers, {addProduct} from './ecommerceReducers'

describe('Reducers functions',()=>{
  it('addProduct() should add a new Product',()=>{
    const initialProduct = [{
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }]
    const newProduct = {
      name: 'Bbq Steak' || "no name",
      price: 50000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }
    const expectedProductsLength = initialProduct.length + 1
    const addedProduct = addProduct(initialProduct,newProduct)
    expect(addedProduct.length).toEqual(expectedProductsLength)
  })
})  
  
  describe('Todo reducer based on actions ', () => {
  it('should add new Product when Update Products dispatched', () => {
    const initialState = [{
      name: 'Kacang Garuda' || "no name",
      price: 16000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }]
    const newProduct = {
      name: 'Bbq Steak' || "no name",
      price: 50000 || 0,
      img: "" || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
      quantity: 0    
    }
    const expectedState = initialState.concat(newProduct);

    const action = { type: 'Update Products', payload: newProduct };
    const actualState = ecommerceReducers(initialState, action);

    expect(actualState).toEqual(expectedState);
  });
})

