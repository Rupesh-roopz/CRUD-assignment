import React from "react";
import {Link } from "react-router-dom";

export class Home extends React.Component{

    render() {
        return (
                <Link to="/form">
                <button className="homeButton">Click here to sign in</button>
                </Link>
        )
}

}
