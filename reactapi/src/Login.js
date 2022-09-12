import React, { Component } from 'react'

export default class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            email : '',
            pass : '',
        }
    }
    onemail = (e) =>{
        this.setState({email: e.target.value})
    }
    onpass = (e) => {
        this.setState({pass: e.target.value})
    }
    click = (e) => {
        let arr = localStorage.getItem('reg');
       for(let index = 0; index < arr.length; index++) {
            if(arr[index].email == this.state.email && arr[index].pass == this.state.pass) {     
                alert('sdsd');
            } else {
                alert('not');
            }
       }
    }
  render() {
    return (
      <div>
        <label>Email</label>
        <input type="email"  onChange={this.onemail} />
        <label>password</label>
        <input type="password"  onChange={this.onpass} />
        <button onClick={this.click}>click</button>
      </div>
    )
  }
}
