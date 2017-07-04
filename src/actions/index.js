const addProduct = (payload) =>{
  return{
    type: "Update Products",
    payload: payload
  }
}

export{
  addProduct
}