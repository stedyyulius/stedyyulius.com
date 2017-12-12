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
            <div className ='row'>
              <div className="col-md-offset-2 col-md-8">
                <div data-aos="fade-up"><img className="pic" src="https://scontent-sin6-2.xx.fbcdn.net/v/t31.0-8/21765762_1584299078307643_4070240637421098328_o.jpg?oh=f5dd91bc58127dee9bc9f7aa79a72af7&oe=5AC50938" alt="win"/></div>
              </div>
              <div className="col-md-offset-2 col-md-8">
                <div className="description" data-aos="fade-left">
                  <h2>2nd Place FWD Hackhaton</h2>
                </div>
                <div className="description" data-aos="fade-left">
                  My first time signing up for hackhaton, it turns out it is really tiring yet really really fun. Here i made educational app for kids for them to be a stronger person just as they train their character in game. The app was made using vue js.
                </div>
              </div>
            </div>
            <div className ='row'>
              <div className="col-md-offset-2 col-md-8">
                <div data-aos="fade-up"><img className="pic" src="https://static.cdn-cdpl.com/source/c420ea5d6888e29a87437c2d005edd57/DSC02504.jpg" alt="win"/></div>
              </div>
              <div className="col-md-offset-2 col-md-8">
                <div className="description" data-aos="fade-right">
                  <h2>2nd Place Facebook Hackhaton</h2>
                </div>
                <div className="description" data-aos="fade-right">
                  In this hackhaton i made event locator app using react, github api, facebook apis, graphql, ect.
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Achievements
