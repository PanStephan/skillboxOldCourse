import React from 'react';
import User from './User.js';

export default function Users() {
	return(
		<div className="right"> 
			<User 
				src="https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68876296_2410378785689597_7808529304685379584_n.jpg?_nc_cat=104&_nc_oc=AQneCv5g2gujkvrVs4iZyIzOnKE4rXSCk4vHImG0hENPro5lozmPkYdHbK1jBcJEvgw&_nc_ht=scontent-arn2-2.xx&oh=a3b08c86e05358de01418419719ca391&oe=5E5BD614" 
				alt="man" 
				name="true1853"/>
		<div className="users__block">
			<User 
				src="https://consequenceofsound.net/wp-content/uploads/2016/09/screen-shot-2016-09-08-at-12-08-28-am.png?w=807" 
				alt="man" 
				name="Тom"
				min/>
			<User 
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFHDSHlbrDnK3fUQvOYgt9oBmxCSK00q1qtZ10_djNxB3RYrqnQ" 
				alt="man" 
				name="Jerry"
				min/>
			<User 
				src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQT-S16ImeFueeD1PbPvN8FJSaQeuy9jw0H43P8CFt2UbFkPcmQ" 
				alt="man" 
				name="Medvedev"
				min/>
			<User 
				src="https://img.gazeta.ru/files3/261/12700261/TASS_35911649-pic905-895x505-44322.jpg" 
				alt="man" 
				name="Putin"
				min/>
		</div>
		</div>
	)
}
