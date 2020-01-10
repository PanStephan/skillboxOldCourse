import React from 'react';
import User from './User';
import Palette from './Palette';

const Profile = () => {
    return (
        <div className="container profile">
            <User 
				src="https://scontent-arn2-2.xx.fbcdn.net/v/t1.0-9/68876296_2410378785689597_7808529304685379584_n.jpg?_nc_cat=104&_nc_oc=AQneCv5g2gujkvrVs4iZyIzOnKE4rXSCk4vHImG0hENPro5lozmPkYdHbK1jBcJEvgw&_nc_ht=scontent-arn2-2.xx&oh=a3b08c86e05358de01418419719ca391&oe=5E5BD614" 
                alt="man" 
                name="true1853" />
            <Palette />
        </div>

    )
}
export default Profile;