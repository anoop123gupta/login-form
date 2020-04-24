import React from 'react';
import './App.css';
import LoginPage from './Components/Login';
import SignupPage from './Components/Signup';


export default class SignUpForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
		"login": true,
		"signup": false
	}
  }

  showSignup(){
	  this.setState({"login": false, "signup": true})
  }

  showLogin(){
	  this.setState({"login": true, "signup": false})
  }

  render() {
    return (
        <div className="main">
				<div className="col-md-6 col-md-offset-3">
					<div className="panel panel-default">
						<div className="panel-heading">
							<div className="container">
								<ul className="nav nav-tabs col-md-6">
									<li><a href="#" data-toggle="tab" value="login" onClick={()=> this.showLogin()}>Login</a></li>
									<li><a href="#" data-toggle="tab" value="signup" onClick={()=> this.showSignup()}>Signup</a></li>
								</ul>
							</div>
						</div>
						<div className="panel-body">
							{ this.state.login == true && <LoginPage />}
							{ this.state.signup == true && <SignupPage />}
						</div>
					</div>
				</div>
		</div>
    )
  }
}
