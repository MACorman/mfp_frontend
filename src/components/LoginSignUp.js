import React from 'react'

class LoginSignUp extends React.Component {
    render() {
        return(
            <div>
                <form>
                    <input type='text' placeholder='username' />
                    <input type='text' placeholder='password' />
                    <input type='submit' value='Login'/>
                </form>
                <p>Don't have an account yet?</p>
                <button>Sign Up</button>
            </div>
        )
    }
}

export default LoginSignUp