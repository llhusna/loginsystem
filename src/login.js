import React, {Component} from 'react'
import "tailwindcss/tailwind.css"

class LoginPage extends Component {
    constructor(props){
        super(props);
            this.state = {
                email: "",
                password: ""
            }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this);
    }


handleEmail (e) {
    this.setState ({
        email: e.target.value
    })
}

handlePassword (e) {
    this.setState ({
        password: e.target.value
    })
}

handleSubmit (e) {
    e.preventDefault();
    console.log("Email: " + this.state.email);
    console.log("Password: " + this.state.password);

    this.setState ({
        email: "",
        password: ""
    })
}

render(){
    return (
    <div>
        <div className="container p-20 border rounded-xl bg-white">
        <form>
            <div>
                <p className="text-5xl pb-10 font-sans">Login System</p>
            </div>

            <div className="py-2 flex">
            <label className="pr-11">
                email
            </label>
                <input 
                    type= "email"
                    name= "email"
                    value = {this.state.email}
                    onChange= {this.handleEmail}
                    className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="py-2 flex">
            <label className="pr-4">
                password
            </label>
                <input 
                    type= "password"
                    name= "password"
                    value = {this.state.password}
                    onChange = {this.handlePassword}
                    className="shadow appearance-none border rounded w-full py-2 px-5 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            </form>

        {/* onClick event must have this */}
        <div className="flex justify-center items-center pt-6">
        <button className="bg-gray-200 hover:bg-gray-300 py-2 px-4 rounded "
        onClick={this.handleSubmit}> 
            Submit
        </button>
        </div>
    </div>
    </div>
    );
}


}

export default LoginPage;