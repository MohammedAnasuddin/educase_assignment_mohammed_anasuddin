import { useEffect, useState } from "react"
import profileImg from "../assets/profile.png"
import cameraIcon from "../assets/camera_icon.png"

function Profile() {

  const [user,setUser] = useState({
    name:"Marry Doe",
    email:"Marry@gmail.com"
  })

  useEffect(()=>{

    const storedUser = localStorage.getItem("user")

    if(storedUser){
      const parsed = JSON.parse(storedUser)

      setUser({
        name: parsed.name || "Marry Doe",
        email: parsed.email || "Marry@gmail.com"
      })
    }

  },[])

  return (

    <div className="profile-page">

      <div className="profile-header">
        Account Settings
      </div>

      <div className="profile-content">

        <div className="profile-info">

          <div className="avatar-wrapper">
            <img src={profileImg} className="profile-avatar" />

            <img
              src={cameraIcon}
              className="camera-icon"
            />
          </div>

          <div className="profile-text">
            <div className="profile-name">{user.name}</div>
            <div className="profile-email">{user.email}</div>
          </div>

        </div>

        <p className="profile-description">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
          Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
          Dolore Magna Aliquyam Erat, Sed Diam
        </p>

        <div className="profile-divider"></div>

        {/* pushes last divider down */}
        <div className="profile-spacer"></div>

        <div className="profile-divider"></div>

      </div>

    </div>

  )
}

export default Profile