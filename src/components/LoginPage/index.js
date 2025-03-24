import {Component} from 'react'
import Cookies from 'js-cookie'
import './index.css'
import { Navigate } from 'react-router-dom'

class LoginPage extends Component{
    state = {username : "", password : "" ,errorMsg : "" , isRedirect : false}
    onLogin = async (event) =>{
        event.preventDefault()      
        const {username,password} = this.state
        let data = {
            username,
            password
        }
        const options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        try{
            const url = "https://gs-maps-app-api.onrender.com/login"
            const response = await fetch(url, options)
            const resultData = await response.json()
            if(response.ok){
                Cookies.set("jwt_token",resultData.token,{expires:10})
                this.setState({isRedirect : true})
            }else{
                this.setState({errorMsg : resultData.error})
            }
        }catch(e){
            console.log(e)
        }
    }

    onEnterUsername = event => this.setState({username : event.target.value})

    onEnterPassword = event => this.setState({password : event.target.value})


    render(){
        const {errorMsg,isRedirect} = this.state
        if(isRedirect){
            return <Navigate to="/" />
        }else{
            return <div className="login-page">
            <form onSubmit={this.onLogin} className='login-box'>
                <h3 className='website-name text-center'>GS-MAPS</h3>
                <label htmlFor="username">USERNAME</label>
                <input onChange={this.onEnterUsername} id="username" className='input-box' type="text" />
                <label htmlFor="password" >PASSWORD</label>
                <input onChange={this.onEnterPassword} id="password" className='input-box' type="text" />
                <button type="submit" className='login-btn'>Login</button>
                
                {errorMsg.length !== 0 && <p className='error-msg'>{errorMsg}</p>}
            </form>
            <div>Note: Use these login details
                username: sai,
                password: 1234 
                </div>
        </div>
        }
        
    }
}

export default  LoginPage
