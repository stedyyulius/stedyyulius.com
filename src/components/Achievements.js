import React, {Component} from 'react'

class Achievements extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="achievements container">
          <div className="head">
            <h3><i>
              "Nothing great in the world has ever been accomplished without passion"
              <br />
              ~Georg Willhelm Friedrich Hegel~
            </i></h3>
          </div>
          <br />
          <br />
          <div className="head">
            <h1>Gaming</h1>
            <hr />
          </div>  
          <br />
          <div className="row">
            <div className="col-md-4">
              <div data-aos="fade-right"><img className="pic" src="http://i.imgur.com/qOSrNal.jpg" alt="win"/></div>
            </div>
            <div className="col-md-8">
              <div className="description" data-aos="fade-up">
                <h2>1st Place Binus Hon Tournament</h2>
              </div>
              <div className="description" data-aos="fade-up">
                Its all started here
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8">
              <div className="description" data-aos="fade-right">
                <h2>1st Place IHNC Jakarta Region</h2>
              </div>
              <div className="description" data-aos="fade-right">
                God blessed me by introducing me to all of my strong teammates (from left) Usep,Imam,Erland,Philip,Budi,and Thomas (still in Batam)
              </div>
            </div>
            <div className="col-md-4">
              <div data-aos="fade-up"><img className="pic" src="http://i.imgur.com/UvjEE7f.jpg" alt="win"/></div>
            </div>
          </div>
          <br/>
          <div className="row">
            <div className="col-md-4">
              <div data-aos="fade-right"><img className="pic" src="http://i.imgur.com/U65kAZb.jpg" alt="win"/></div>
            </div>
            <div className="col-md-8">
              <div className="description" data-aos="fade-up">
                <h2>1st Place IHNC Indonesia</h2>
              </div>
              <div className="description" data-aos="fade-up">
                Probably the biggest prize given in history of gaming competition in Indonesia so far, Huge thanks to my teammates (Thomas,Usep,Budi, and Erland)
              </div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-8">
              <div className="description" data-aos="fade-right">
                <h2>7th Place Hon World Championship</h2>
              </div>
              <div className="description" data-aos="fade-right">
                Representing Indonesia in Bangkok, getting 7th place out of 25 countries
              </div>
            </div>
            <div className="col-md-4">
              <div data-aos="fade-up"><img className="pic" src="http://i.imgur.com/aA45nUY.jpg" alt="win"/></div>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-md-4">
              <div data-aos="fade-right"><img className="pic" src="http://i.imgur.com/CU2je1b.jpg" alt="win"/></div>
            </div>
            <div className="col-md-8">
              <div className="description" data-aos="fade-up">
                <h2>3rd Place Fireside Gathering JCC Jakarta</h2>
              </div>
              <div className="description" data-aos="fade-up">
                After retiring from HON, i started to play Hearthstone untill now, but rarely join the tournaments recently
              </div>
            </div>
          </div>
          <br />
          <div className="head">
            <h1> Film </h1>
            <hr />
            <br />
          <div className ='row'>
            <div className="col-md-offset-2 col-md-8">
              <div data-aos="fade-up"><img className="pic" src="http://i.imgur.com/FEKwHgG.jpg" alt="win"/></div>
            </div>
            <div className="col-md-offset-2 col-md-8">
              <div className="description" data-aos="fade-up">
                <h2>1st Place YesHeIs Movie Competition Indonesia</h2>
              </div>
              <div className="description" data-aos="fade-up">
                Making movies is also one of my hobbies, "Apa Salahku?" or "What did i do wrong?" is a psychological short movie about a conversation between a boy with an oldman which discussing about the boy's naughty little brother, yet the oldman knows something about him
              </div>
            </div>
          </div>  
          </div>
          <br />
        <div className ='row'>
          <div className="head col-md-12" data-aos="fade-up">
            <h1> Coding </h1>
            <hr />
            <br />
            <div className="col-md-offset-2 col-md-8">
              <div data-aos="fade-right"><h3>Just started coding in 2017 and i promised to myself i will get at least 1 throphy for this stuff</h3></div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Achievements