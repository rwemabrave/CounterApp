import { useState } from "react"

function Login(){
    const [email,setEmail] = useState()
    const [password,setPassword] = useState()
    const handlelogin = () =>{
        const username= 'LoginApp'
        const pwd='12345'
        if(username==email && pwd== password){
            console.log('you have logged in successfully')
        }
        else{

        }
        console.log('wrong credentials')
    }
    return(
        <div>
            <h3>Login</h3>
    <br/><br/>
    <label htmlFor="email">Email</label>
    <input type="text" 
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder="Enter Your Email"/>
    <br /><br />


    <label htmlFor="Password">Password</label>
    <input type="text" 
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    placeholder="Enter Your Password"/>
    <br /><br />
    <button onClick={handlelogin} >Login</button>
        </div>
    )
}
export default Login