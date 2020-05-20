import React from 'react'

class LoginSignUp extends React.Component {

    state = {
        username: '',
        password: '',
        passwordConfirmation: '',
        signUp: false
    }

    submitHandler = (e) => {
        e.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        this.props.login(user)
    }

    signUpHandler = () => {
        this.setState({ signUp: !this.state.signUp })
    }

    createAccount = (e) => {
        e.preventDefault()
        let user = {
            username: this.state.username,
            password: this.state.password
        }
        if(this.state.password === this.state.passwordConfirmation) {
            this.props.createNewUser(user)
            this.setState({username: '', password: '', passwordConfirmation: ''})
        } else {
            alert("Oops! Passwords do not match.")
        }
    }

    render() {
        return(
            <div>
                <p>Welcome to MyFitnessPal!</p>
                {
                    this.state.signUp 
                    ?
                    <form onSubmit={this.createAccount}>
                        <input type='text' placeholder='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                        <input type='password' placeholder='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                        <input type='password' placeholder='password confirmation' value={this.state.passwordConfirmation} onChange={(e) => this.setState({passwordConfirmation: e.target.value})}/>
                        <input type='submit' value='Create Account'/>
                    </form>
                    :
                    <div>
                        <form onSubmit={this.submitHandler}>
                            <input type='text' placeholder='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                            <input type='password' placeholder='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                            <input type='submit' value='Login'/>
                        </form>
                        <p>Don't have an account yet?</p>
                        <button onClick={this.signUpHandler}>Sign Up</button>
                    </div>

                }
            </div>
        )
    }
}

export default LoginSignUp