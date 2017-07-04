import React,{Component} from 'react'

import './portofolios-components/Portofolios.css'

import Ecommerce from './portofolios-components/Ecommerce.js'

class Portofolios extends Component{
  constructor(props){
    super(props)
  }
  render(){
    return(
      <div className="container">
        <div>
          <h1>Ecommerce</h1>
          <Ecommerce />
        </div>
      </div>
    )
  }
}

export default Portofolios