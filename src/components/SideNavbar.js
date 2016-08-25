import React from 'react';
import { Link } from 'react-router';
import { LoginButton } from './'
class SideNavbar extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'SideNavbar';
    }

    render() {
    	let user_active = false;
    	if(this.props.location.pathname == "/" || this.props.location.pathname.includes("user"))
    		user_active = true;
        return (
        		<div>
        			 <ul id="slide-out" className="side-nav">
					    <li>
					    	<div className="userView">
					    		<Link to="/">
						     	 	<img src="/asset/images/logo.png" />
						      	</Link>
					    	</div>
					    </li>
					    <center>
					    	<LoginButton />
					    </center>
					    <li><div className="divider"></div></li>
					    <li>
					    	<Link to="/" className={`waves-effect side-li ${user_active? 'active': ''}`}>
					    		<img src="/asset/images/search.png" />전적검색
					    		<i className="fa fa-check-circle-o fa-lg side-active" aria-hidden="true"></i>
					    	</Link>
					    	
					    </li>
					    <li>
					    	<Link to="/chat" activeClassName="active" className="waves-effect side-li">
					    		<img src="/asset/images/group.png" />파티매칭
					    		<i className="fa fa-check-circle-o fa-lg side-active" aria-hidden="true"></i>
					    	</Link>
					   		
					    </li>
					    <li>
					    	<Link to="/youtube" activeClassName="active" className="waves-effect side-li">
					    	<img src="/asset/images/youtube.png" />동영상
					    		<i className="fa fa-check-circle-o fa-lg side-active" aria-hidden="true"></i>
					    	</Link>
					    </li>
					    <li>
					    	<Link to="/board" activeClassName="active" className="waves-effect side-li">
					    	<img src="/asset/images/board.png" />커뮤니티	
					    		<i className="fa fa-check-circle-o fa-lg side-active" aria-hidden="true"></i>
					    	</Link>
					    </li>
					  </ul>
        		</div>
        	);
    }
}

SideNavbar.propTypes = {
	location: React.PropTypes.object
};

export default SideNavbar;