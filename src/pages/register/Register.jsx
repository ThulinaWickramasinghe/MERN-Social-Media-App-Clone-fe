import './register.css'

export default function Register() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">
                    facebook
                </h3>
                <span className="loginDesc">Connet with friends and the world around you on facebook</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" className="loginInput" placeholder='Username'/>
                    <input type="email" className="loginInput" placeholder='Email'/>
                    <input type="password" className="loginInput" placeholder='Password'/>
                    <input type="password" className="loginInput" placeholder='Confirm Password'/>
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log into  account</button>
                </div>
            </div> 
        </div>
    </div>
  )
}
