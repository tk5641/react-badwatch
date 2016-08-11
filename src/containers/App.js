import React from 'react';
import { Header } from '../components';
import { connect } from 'react-redux';
import { loginRequest, logoutRequest } from '../actions/authentication';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'App';
        this._handleLogin = this._handleLogin.bind(this);
        this._handleLogout = this._handleLogout.bind(this);
    }

    _handleLogin()
    {
        return this.props.loginRequest().then(
            () => {
                if(this.props.authentication.login.status == "SUCCESS")
                {
                    console.log("로그인 성공");
                    return true;
                }
                else
                {
                    console.log("로그인 실패");
                    return false;
                }
            }
        );
    }

    _handleLogout()
    {
        return this.props.logoutRequest().then(
            () => {
                if(this.props.authentication.login.status == "INIT")
                {
                    console.log("로그아웃 성공");
                    return true;
                }
                else
                {
                    console.log("로그아웃 실패");
                    return false;
                }
            }
        );
    }

    render() {
        return (
        		<div>
	        		<Header onLogin={this._handleLogin} 
                            onLogout={this._handleLogout}
                            authentication={this.props.authentication}/>
	        		<div className="container body-container">
	        			{this.props.children}
	        		</div>     		
        		</div>
        	);
    }
}

const mapStateToProps = (state) => {
    return {
        authentication: state.authentication
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        loginRequest: () => {
            return dispatch(loginRequest());
        },
        logoutRequest: () => {
            return dispatch(logoutRequest());
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);;