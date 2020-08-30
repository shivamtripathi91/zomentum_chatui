import React from 'react'
import { mainUser } from '../generateFakeData'
import Avatar from './Dp'

export default function Welcome() {
    return (
        <div className="welcome">
            <Avatar user={mainUser} />
            <h2>Welcome, {mainUser.name}</h2>
            <br></br>
            <h5>Search for someone to start chatting with or go to Contacts to see who is available</h5>
            
        </div>
    )
}
