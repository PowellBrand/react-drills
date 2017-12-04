import React, { Component } from 'react'

export default class Logincomp extends Component {
    constructor() {
        super()

        this.state = {
            user: '',
            password: ''
        }
    }

    changeUser(value) {
        this.setState({
            user: value
        })
    }

    changePass(value) {
        this.setState({
            password: value
        })
    }
    alertUser() {
        alert(`Username: ${this.state.user} Password: ${this.state.password}`)
    }

    render() {
        return (
            <div>
                <input onChange={(e) => this.changeUser(e.target.value)}>
                </input>
                <input onChange={(e) => this.changePass(e.target.value)}>
                </input>
                <button onClick={(e) => this.alertUser()}>Login
                </button>

            </div>
        );
    }


}