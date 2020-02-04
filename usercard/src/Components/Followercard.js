import React from 'react';

const Followercard = props => {
    console.log("followers props", props)
    return (
        <div>
            <h1>Followers!</h1>
            {props.followers.map(follower => {
                console.log(follower)
                return (
                    <div>
                        <img src={follower.avatar_url} />
                        <h5> {follower.login} </h5>
                    </div>
                )
            })}
        </div>
    )
}

export default Followercard;