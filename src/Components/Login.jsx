import React from 'react';

export default class LoginPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return (
            <div className="container">
                <div className="col-md-4">
                <div id="login-tab-content">
                    <form className="login-form">
                        <input type="text" className="input form-control loginInput" id="user_login" autocomplete="off" placeholder="Email or Username" />
                        <input type="password" className="input form-control loginInput" id="user_pass" autocomplete="off" placeholder="Password" />
                        {/* <input type="checkbox" className="checkbox " id="remember_me" /> */}
                        {/* <label for="remember_me">Remember me</label> */}
                        <button className="btn btn-block btn-primary text-center loginInput" >Login </button>
                        {/* <input type="submit" className="btn btn-primary btn-md btn-block text-center loginInput" value="Login" /> */}
                    </form>
                    {/* <div className="help-text">
                        <p><a href="#">Forget your password?</a></p>
                    </div> */}
                </div>
                </div>
            </div>
        )
    }
}