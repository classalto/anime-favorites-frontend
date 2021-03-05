import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        return (
            <div>
                <NavLink to="/">Home</NavLink>
                {
                    this.props.user && this.props.user.token && <>
                        <NavLink to="/search">Search</NavLink>
                        <button onClick={this.props.handleLogout}>Logout</button>
                    </>
                }

                {
                    (!this.props.user || this.props.user.token) && <>
                        <NavLink to="/login">Login</NavLink>
                        <NavLink to="/signup">Signup</NavLink>
                    </>
                }
            </div>
        )
    }
}