import React from 'react';

export default class SignupPage extends React.Component{
    constructor(props){
        super(props);
        this.state={}
    }

    render(){
        return(
            <div className="container">
                <div className="col-md-4">
                    <div class="tabs-content">
                        <div id="signup-tab-content" className="">
                            <form class="signup-form">
                                <input type="text" className="input form-control loginInput"  placeholder="first name" />
                                <input type="text" className="input form-control loginInput"  placeholder="last name" />
                                <input type="email" className="input form-control loginInput "  placeholder="Email" />
                                <input type="password" className="input form-control loginInput" placeholder="Password" />
                                <input type="password" className="input form-control loginInput" placeholder="Password" />
                                <button className="btn btn-block btn-primary text-center loginInput" >Sign Up </button>
                            </form>
                            {/* <div className="help-text loginInput">
                                <p>By signing up, you agree to our</p>
                                <p><a href="#">Terms of service</a></p>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}