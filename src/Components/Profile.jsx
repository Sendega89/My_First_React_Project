import React from "react";
import './Profile.css';

function Profile() {
    return (
        <div className="Profile">
            <div className="fonImage">
                <img
                    src='https://st3.depositphotos.com/1194063/18197/i/600/depositphotos_181977680-stock-photo-two-red-hearts-on-rustic.jpg'
                    alt='TopImage'/>
            </div>
            <div>ava + description</div>
            <div>My posts
                <div>New Post</div>
            </div>
            <div>Post 1</div>
            <div>Post 2</div>
        </div>
    )
}

export default Profile