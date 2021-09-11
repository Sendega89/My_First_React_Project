import React from "react";

function Sidebar() {
    return (
        <nav className="sidebar">
            <div className='menuItems'>
                <div> <a href='#Part1'>Profile</a></div>
            <div><a href='#Part2'>Message</a></div>
            <div><a href='#Part3'>News</a></div>
            <div><a href='#Part4'>Photo</a></div>
            <div className='settings'><a href='#Part5'>Settings</a></div>
        </div>
        </nav>
    )
}

export default Sidebar