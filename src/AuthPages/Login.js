import React, { Component } from 'react';
import { login } from '../user-utils.js';

export default class Login extends Component {
    state = {
        email: '',
        password: ''
    }

    handleEmail = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        const user = await login(this.state.email, this.state.password);

        this.props.handleUserChange(user);
        this.props.history.push('/search');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input value={this.state.email} onChange={this.handleEmail} />
                    </label>
                    <label>
                        Password:
                        <input value={this.state.password} onChange={this.handlePassword} />
                    </label>
                    <button>login</button>
                </form>
            </div>
        )
    }
}
