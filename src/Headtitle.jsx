import React from 'react';
import logo from './images/cricstatz-logo.jpg';
import './index.css'
function Headtitle(props) {
    const passfunc = (event) => {
        props.func(event)
    }
    return (
        <>
        <div className = "navbar">
            <div className = "leftnav">
            <img src = {logo} alt = "cric logo"/>
            <h2>CRICSTATZ</h2>
            </div>
            <div className = "rightnav">
            <input type = 'text' placeholder = 'Search here' onChange = {passfunc} />
            </div>
        </div>
        </>
    );
}
export default Headtitle;