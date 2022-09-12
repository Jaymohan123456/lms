// import React, { Component } from "react";

// export default class Loginnew extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       pass: "",
//       array: [],
//     };
//   }
//   onemail = (e) => {
//     this.setState({ email: e.target.value });
//   };
//   onpass = (e) => {
//     this.setState({ pass: e.target.value });
//   };
//   click = (e) => {
//     let array = this.state.array
//     array.push({
//       email : this.state.email,
//       pass : this.state.pass, 
//     })
//     let getdata = JSON.parse(localStorage.getItem('register'));
  
//     for (let index = 0; index < getdata.length; index++) {
//       if (getdata[index].email == this.state.email && getdata[index].pass == this.state.pass) {
//           localStorage.setItem('local',JSON.stringify(getdata));
//           window.location.href="Table";
//       }
//     }

//   };
//   render() {
//     return (
//       <div>
//         <label>Email</label>
//         <input type="email" onChange={this.onemail} />
//         <label>password</label>
//         <input type="password" onChange={this.onpass} />
//         <button onClick={this.click}>Click</button>
//       </div>
//     );
//   }
// }


import React, { Component } from 'react'

export default class Loginnew extends Component {
  constructor(props){
    super(props)
    this.state = {
      email : '',
      pass : '',
      //arr : '',
    }
  }
  onemail = (e) => {
    this.setState({email : e.target.value})
  }
  onpass = (e) => {
    this.setState({pass: e.target.value})
  }
  click = (e) => {
    //let arr = this.state.arr;
    let data = JSON.parse(localStorage.getItem('register'));
    let datas = false
    for (let index = 0; index < data.length; index++) { 
      if (data[index].email == this.state.email && data[index].pass == this.state.pass) {    
          window.location.href = "Table";
          datas = true
      } 
    }
    if(datas) {
      alert('asda');
    } else {
      alert('asdas');
    }
   
  }
  render() {
    return (
      <>
      <label>Email</label>
      <input type="email" value={this.state.email} onChange={this.onemail} />
      <label>Password</label>
      <input type="password" value={this.state.pass} onChange={this.onpass} />
      <button onClick={this.click}>Click</button>
      </>
    )
  }
}

