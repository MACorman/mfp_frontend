import React from 'react'

class LoginSignUp extends React.Component {

    state = {
        username: '',
        password: ''
    }

    submitHandler = (e) => {
        e.preventDefault()
        let user = this.state
        this.props.login(user)
    }
    render() {
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type='text' placeholder='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                    <input type='password' placeholder='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                    <input type='submit' value='Login'/>
                </form>
                <p>Don't have an account yet?</p>
                <button>Sign Up</button>
            </div>
        )
    }
}

export default LoginSignUp