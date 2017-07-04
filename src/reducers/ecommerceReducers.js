const defaultProducts = [{
  name:"Cheese Burger Plain",
  quantity: 0,
  price:60000,
  img:"https://i.kinja-img.com/gawker-media/image/upload/s--HJeU57Mm--/c_fit,fl_progressive,q_80,w_636/iivxqhievftc6gg3abmf.jpg"
},
{
  name:"Tahu Sumedang",
  quantity: 0,
  price: 10000,
  img:"http://bdg.centrin.net.id/~ucup/images/tahuu.jpg"
}]

export const addProduct = (products,newProduct)=>{
  return products.concat(newProduct)
}

export default (state = defaultProducts,action)=>{
  if(action.type === "Update Products"){
    return state.concat(action.payload)
  }
  else{
    return state
  }
}