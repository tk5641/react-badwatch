import React from 'react';
import axios from 'axios';
import { UserList } from '../components';
class UserByName extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'UserByName';
        this.state = {
        	userData: [],
        	userEnd: false
        };
        this._getMoreUser = this._getMoreUser.bind(this);
    }

    _getMoreUser()
    {
    	if(this.state.userEnd)
    	{
    		return;
    	}

    	let url = "http://bad.watch/api/user?name="+this.props.params.userName+"&value="+ this.state.userData[this.state.userData.length-1].overwatch_id;
    	axios.get(url)
    	.then((response) => {
    		let data = response.data;
    		if(data.responseCode == 2)
    		{
    			this.setState({
    				userData: this.state.userData.concat(data.userData)
    			});
                if(data.userData.length < 10)
                {
                    this.setState({
                        userEnd: true
                    });
                }
    		}
    		else 
    		{
    			sweetAlert(
    				   '',
					  '데이터를 불러오는데 오류가 발생했습니다.',
					  'error'
					);
				return;
    		}
    	})
    	.catch( err => { 
    				console.log(err);
 			 		sweetAlert(
					  '데이터를 불러오는데 오류가 발생했습니다.',
					  '잠시후 다시시도해주세요.',
					  'error'
					);
					return;
 			  }) 
    }

    componentDidMount()
    {
    	let url = "http://bad.watch/api/user?name="+this.props.params.userName+"&value="+ Number.MAX_SAFE_INTEGER; 
    	axios.get(url)
    	.then((response) => {
    		let data = response.data;
    		if(data.responseCode == 2)
    		{
    			this.setState({
    				userData: data.userData
    			});
    		}
    		else 
    		{
    			sweetAlert(
    				   '',
					  '데이터를 불러오는데 오류가 발생했습니다.',
					  'error'
					);
				return;
    		}
    	})
    	.catch( err => { 
    				console.log(err);
 			 		sweetAlert(
					  '데이터를 불러오는데 오류가 발생했습니다.',
					  '잠시후 다시시도해주세요.',
					  'error'
					);
					return;
 			  }) 
    }

    render() {
    	const more_user = (
    			<div className="more-user" onClick={this._getMoreUser}>
        			더보기
        		</div>
    		);
        return (
        		<div className="user-list-box">
        			{this.state.userData.map((user) => {
        				return (
        					<UserList key={user.user_id}
        							  user={user}/>
        					);
        			})}
        			{this.state.userEnd? undefined: more_user}
        		</div>
        	);
    }
}

export default UserByName;
