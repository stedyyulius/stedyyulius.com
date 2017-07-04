import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Footer extends Component {
  render() {
    return (
      <div className="footer container">
        <hr />
          <div className="text-center center-block">
            <p className="txt-railway"><b>Copyright Stedy @2017</b></p>
            <br/>      
              <a className='facebook' href="https://www.facebook.com/stedy.yulius">
                <i id="social-fb" className="fa fa-facebook-square fa-3x social"></i>
              </a>
              <a className='github' href="https://github.com/stedyyulius">
                <i id="social-gp" className="fa fa-github fa-3x social"></i>
              </a>    
              <Link className='emailUrl' to="/stedyyulius@gmail.com">
                <i id="social-em" className="fa fa-envelope-square fa-3x social"></i>
              </Link>        
          </div>
          <hr />
        </div>
      )
    }
  }

export default Footer      
        