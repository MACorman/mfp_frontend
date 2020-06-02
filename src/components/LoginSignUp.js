import React from 'react'
import { Button, Input } from 'semantic-ui-react'

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
                    <form className='Form' onSubmit={this.createAccount}>
                        <Input type='text' placeholder='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                        <br/>
                        <br/>
                        <Input type='password' placeholder='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                        <br/>
                        <br/>
                        <Input type='password' placeholder='password confirmation' value={this.state.passwordConfirmation} onChange={(e) => this.setState({passwordConfirmation: e.target.value})}/>
                        <br/>
                        <br/>
                        <Button  color='olive' type='submit'>Create Account</Button>
                        
                    </form>
                    :
                    <div>
                        <form className='Form' onSubmit={this.submitHandler}>
                            <Input type='text' placeholder='username' value={this.state.username} onChange={(e) => this.setState({username: e.target.value})}/>
                            <br/>
                            <br/>
                            <Input type='password' placeholder='password' value={this.state.password} onChange={(e) => this.setState({password: e.target.value})}/>
                            <br/>
                            <br/>
                            <Button color='olive' type='submit'>Login</Button>
                        </form>
                        <div className='Form'>
                        <p>Don't have an account yet?</p>
                            <Button color='olive' onClick={this.signUpHandler}>Sign Up</Button>
                        </div>
                    </div>

                }
            </div>
        )
    }
}

export default LoginSignUp