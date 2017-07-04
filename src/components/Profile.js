import React from 'react'


const Profile = () => {
  return(
    <div>
        <div className="media">
                <img 
                  className="profile media-object dp img-circle" 
                  src="http://i.imgur.com/AHbnalf.png" 
                  alt="profile"
                />
            <div className="media-body">
                <h4 className="media-heading">Stedy Yulius<small> Indonesia</small></h4>
                <h5>Javascript Programmer</h5>

                <span className="label label-info">HTML5/CSS3</span>
                <span className="label label-info">Vue/Vuex</span>
                <span className="label label-info">React/Redux</span>
                <br />
                <span className="label label-info">Sequelize</span>
                <span className="label label-info">Adobe Premiere</span>
            </div>
        </div>
      </div>
    )
  }

export default Profile