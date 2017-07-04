import React, {Component} from 'react'
import {connect} from 'react-redux'

import { addProduct } from '/home/stedy/Desktop/stedyyulius.com/stedy/src/actions/index.js'

export class Ecommerce extends Component {
  constructor(props) {
    super(props)
    this.state={
      products:this.props.products,
      totalPrice: 0,
      cart: [],
      totalCartPrice:0
    }
  }
  render() {
    return (
    <div>  
      <div className="container">
        <div className="notification login-alert">
            Please Enter Your Username And Password!
        </div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <a className="navbar-brand" href="#">Stedy's Shop</a>
            </div>  
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
              <ul className="nav navbar-nav">
                <li>
                  <a href="#" data-toggle="modal" data-target="#squarespaceModal">Add Product
                  </a>
                </li>
              </ul>
              {/* Modal */}
              <div className="modal fade" id="squarespaceModal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
                <div className="modal-dialog">
              	<div className="addMenu modal-content">
              		<div className="modal-header">
              			<button type="button" className="close" data-dismiss="modal"><span aria-hidden="true">×</span><span className="sr-only">Close</span></button>
              			<h3 className="modal-title" id="lineModalLabel">Add Product</h3>
              		</div>
              		<div className="modal-body">            			
              			      <form>
                            <div className="form-group">
                              <label>Product Name</label>
                              <input type="text" className="form-control" placeholder="product name" ref="name" />
                            </div>
                            <div className="form-group">
                              <label>Product Price</label>
                              <input type="number" className="form-control" placeholder="Price has to be in numbers ex: Rp20.000 just write it as 20000" ref="price"/>
                            </div>
                            <div className="form-group">
                              <label>Product Image</label>
                              <br />
                              <input type="text" className="form-control" placeholder="copy image url here" ref="image"/>
                            </div>
                            <button type="submit" data-dismiss="modal" className="addProduct btn btn-primary" onClick={()=>this.addNewProduct({
                              name: this.refs.name.value || "no name",
                              price: this.refs.price.value || 0,
                              img: this.refs.image.value || "https://www.jainsusa.com/images/store/landscape/not-available.jpg",
                              quantity: 0    
                            })}>Submit</button>
                          </form>
              		</div>
              		<div className="modal-footer">
              			<div className="btn-group btn-group-justified" role="group" aria-label="group button">
              				<div className="btn-group" role="group">
              					<button type="button" className="btn btn-default" data-dismiss="modal"  role="button">Close</button>
              				</div>
              			</div>
              		</div>
              	</div>
                </div>
              </div>
            {/* End of Modal */}
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="/a" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                    <span className="glyphicon glyphicon-shopping-cart"></span>
                    {this.state.cart.length} Items<span className="caret"></span>
                  </a>
                  <ul className="dropdown-menu dropdown-cart" role="menu">
                    {this.state.cart.map((item,index)=>{
                      return(  
                    <li>
                      <span className="item">
                        <span className="item-left">
                          <img className="item" src={item.img} alt="item"/>
                          <span className="item-info">
                            <span><b>{item.name}</b></span>
                            <span>Price: {item.price}</span>
                            <span>Ammount: {item.quantity}</span>
                          </span>
                        </span>
                        <span className="item-right">
                          <button className="rp btn btn-xs btn-danger pull-right" onClick={()=>this.removeCart(index)}>x</button>
                        </span>
                      </span>
                    </li>
                    )})}
                    <br />
                    <li className="divider"></li>
                    <br />
                    <br /> 
                    <li>
                      <div className="totalCart text-center"><b>Total Price: Rp{this.state.totalCartPrice}</b></div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {/* --------------------------Products ----------------------------------*/}
  <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="products">
                <thead>
                    <tr>
                        <th></th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                  {this.state.products.map((product,index)=>{
                    return(
                    <tr key={index}>
                        <td>
                        <div className="media">
                            <div className="thumbnail pull-left"><img className="product media-object" src={product.img} /> </div>
                            <div className="media-body">
                                <h4 className="media-heading">{product.name}</h4>
                                <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                                <br />
                                <br />
                                <button type="button" className="btn btn-danger" onClick={()=> this.removeProduct(index)}>
                                    <span className="glyphicon glyphicon-remove"></span> Remove
                                </button>
                                <br />
                            </div>
                        </div></td>
                        <td className="col-sm-1 col-md-1">
                        <td className="text-center"><strong>{product.quantity}</strong></td>
                        </td>
                        <td className="Price col-sm-1 col-md-1 text-center"><strong>Rp{product.price}</strong></td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>Rp{product.quantity * product.price}</strong></td>
                        <td className="col-sm-1 col-md-1">
                          <button className="btn btn-default btn-xs" onClick={()=>this.addQuantity(index)}><span className="glyphicon glyphicon-plus"></span></button>
                          <button className="btn btn-default btn-xs" onClick={()=>this.minusQuantity(index)}><span className="glyphicon glyphicon-minus"></span></button>
                        </td>              
                    </tr>
                  )})}  
                    <tr>
                        <td></td>
                        <td></td>
                        <td className="col-sm-1 col-md-1 text-center"><h3><strong>Total</strong></h3></td>
                        <td className="col-sm-1 col-md-1 text-center"><h3><strong>Rp{this.state.totalPrice}</strong></h3></td>
                        <td className="col-sm-1 col-md-1 text-center">
                          <button type="button" className="btn btn-success btn-xs" onClick={()=>this.checkout()}>
                              Checkout
                          </button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
  </div>
</div>  
    )
  }

  // formatPrice(price,state){
  //   let val = (price/1).toFixed(2).replace('.', ',')
  //   let formatedPrice = val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  //   state = {
  //     name: state.name,
  //     quantity: state.quantity,
  //     price: formatedPrice,
  //     img: state.img
  //   } 
  //   console.log(state);
  //   this.setState({
  //     state: state
  //   })
  // }
  // 
  // componentWillMount(){
  //   this.setState({
  //     displayedPrice: this.state.products
  //   })
  //   for(var i = 0; i < this.state.displayedPrice.length;i++){
  //     console.log(`masuk`);
  //     this.formatPrice(this.state.displayedPrice[i].price,this.state.products)
  //   }
  //   console.log(JSON.stringify(this.state.displayedPrice));
  // }
  
  addQuantity(index){
  var oldQuantity = this.state.products[index].quantity
  var newQuantity = oldQuantity + 1
  var updatedProduct = {
    name: this.state.products[index].name,
    quantity: newQuantity,
    price: this.state.products[index].price,
    img: this.state.products[index].img
  } 
  this.state.products[index] = updatedProduct
  var tp = 0
  for(var i = 0; i < this.state.products.length; i++){
    tp += this.state.products[i].price * this.state.products[i].quantity
  }
    this.setState({
      products: this.state.products,
      totalPrice: tp
    })
  }
  
  minusQuantity(index){
    if(this.state.products[index].quantity !== 0){
      var oldQuantity = this.state.products[index].quantity
      var newQuantity = oldQuantity - 1
      var updatedProduct = {
        name: this.state.products[index].name,
        quantity: newQuantity,
        price: this.state.products[index].price,
        img: this.state.products[index].img
      } 
      this.state.products[index] = updatedProduct
      var tp = 0
      for(var i = 0; i < this.state.products.length; i++){
        tp += this.state.products[i].price * this.state.products[i].quantity
      }
        this.setState({
          products: this.state.products,
          totalPrice: tp
        })
    }
  }
  
  removeProduct(index){
    var currentPrice = this.state.products[index].quantity * this.state.products[index].price
    this.state.products.splice(index,1)
    var minus = this.state.totalPrice - currentPrice
    this.setState({
      products: this.state.products,
      totalPrice: minus
    })
  }
  
  checkout(){
    var items = []
    var totalPrice = 0
    for(var i = 0;i < this.state.products.length; i++){
      if(this.state.products[i].quantity > 0){
        items.push(this.state.products[i])
        totalPrice += this.state.products[i].quantity * this.state.products[i].price 
      }
    }
    for(var j = 0; j < items.length;j++){
      if(items[j].quantity === 1){
        alert(`${items[j].quantity} ${items[j].name} Added to cart!`)
      }
      
      if(items[j].quantity > 1){
        alert(`${items[j].quantity} ${items[j].name}s Added to cart!`)
      }
    }
    console.log(this.state.products);
    this.setState({
      cart: this.state.products,
      totalCartPrice: totalPrice
    },()=>{
      console.log(`masuk jing`);
    })
  }
  
  removeCart(index){
    var currentPrice = this.state.cart[index].quantity * this.state.cart[index].price
    this.state.cart.splice(index,1)
    var minus = this.state.totalCartPrice - currentPrice
    this.setState({
      cart:this.state.cart,
      totalCartPrice: minus
    })
  }
  
  addNewProduct(newProduct){
    this.state.products.push(newProduct)
    this.setState({
      products: this.state.products
    })
    // alert(`${newProduct.name} Added!`)
  }
}

const mapStateToProps = (state) =>{
  return {
    products: state.products
  }  
}

const mapDispatchToProps = (dispatch) =>{
  return {
    addProduct: (payload) => dispatch(addProduct(payload))
  }
}



export default connect (mapStateToProps,mapDispatchToProps)(Ecommerce)