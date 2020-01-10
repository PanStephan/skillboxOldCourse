import React, {Component} from 'react';
import User from './User';

export default class Post extends Component {
	render() {
		return (
			<div className="post">
				<User 
						src="https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68876296_2410378785689597_7808529304685379584_n.jpg?_nc_cat=104&_nc_oc=AQneCv5g2gujkvrVs4iZyIzOnKE4rXSCk4vHImG0hENPro5lozmPkYdHbK1jBcJEvgw&_nc_ht=scontent-arn2-2.xx&oh=a3b08c86e05358de01418419719ca391&oe=5E5BD614" 
						alt="man" 
						name="true1853" 
						min/>
					<img src={this.props.src} alt={this.props.alt}></img>
				<div className="post__name">
					some account
				</div>
				<div className="post__descr">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
					Dis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
				</div>
			</div>
		)
	}
}