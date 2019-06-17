import React, {Component} from 'react';
import axios from 'axios'
import './Register.css'

export default class Register extends Component {
    constructor() {
        super();
        this.state={
            name: '',
            username: '',
            email: '',
            password: ''
        }
        this.handleName=this.handleName.bind(this)
        this.handleUsername=this.handleUsername.bind(this)
        this.handleEmail=this.handleEmail.bind(this)
        this.handlePassword=this.handlePassword.bind(this)
        this.registerClient=this.registerClient.bind(this)
    }
    handleName(e) {
        this.setState({name: e.target.value})
    }
    handleUsername(e) {
        this.setState({username: e.target.value})
    }

    handleEmail(e) {
        this.setState({email: e.target.value})
    }
    handlePassword(e) {
        this.setState({password: e.target.value})
    }
    registerClient() {
        axios.post('/auth/register', 
        {name: this.state.name, username: this.state.username, email: this.state.email, password: this.state.password}
        ).then(res => {console.log(res.data)})
    }


    render() {
        return (
            <div className="register">
                <h1>Sign-up</h1>
                <form>
                    <input onChange={this.handleName} placeholder="violet"/>
                    <input onChange={this.handleUsername} placeholder="violetriot123"/>
                    <input onChange={this.handleEmail} placeholder="violetriot@gmail.com"/>
                    <input onChange={this.handlePassword} placeholder="password"type="password"/>
                    
                </form>
                    <button>Register</button>
            </div>
        )
    }
}