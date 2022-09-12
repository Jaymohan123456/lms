// import React, { Component } from "react";

// export default class Regisration extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       pass: "",
//       val: [],
//     };
//   }
//   onemail = (e) => {
//     this.setState({ email: e.target.value });
//   };
//   onpass = (e) => {
//     this.setState({ pass: e.target.value });
//   };
//   clicks = (e) => {
//     let array = this.state.array;
//     let val = localStorage.getItem("register") ? JSON.parse(localStorage.getItem("register")) : []
//     if (val.length > 0) {
//       let exist = false;
//       for (let index = 0; index < val.length; index++) {
//         if (val[index].email == this.state.email) {
//           console.log("yes");
//           exist = true;
//         } 
//       }
//         if(exist) {
//             alert('Email Already Exist');
//         }
//         else {
//           val.push({
//             email: this.state.email,
//             pass: this.state.pass,
//           });
//           localStorage.setItem('register',JSON.stringify(val));
//           window.location.href="Loginnew";
//         }
//       } else {
//         val.push({
//           email: this.state.email,
//           pass: this.state.pass,
//         });
//         localStorage.setItem('register',JSON.stringify(val));
//         window.location.href="Loginnew";
//       }
    
// }

//   render() {
//     return (
//       <div>
//         <label>email</label>
//         <input type="email" onChange={this.onemail} />
//         <label>password</label>
//         <input type="password" value={this.state.pass} onChange={this.onpass} />
//         <button onClick={this.clicks}>click</button>
//       </div>
//     );
//   }
// }


// import React, { Component } from "react";

// export default class Regisration extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: "",
//       pass: "",
//       val: [],
//     };
//   }
//   onemail = (e) => {
//     this.setState({ email: e.target.value });
//   };
//   onpass = (e) => {
//     this.setState({ pass: e.target.value });
//   };
//   clicks = (e) => {
//     let array = this.state.array;
//     let val = localStorage.getItem("register") ? JSON.parse(localStorage.getItem("register")) : []
//     if (val.length > 0) {
//       let exist = false;
//       for (let index = 0; index < val.length; index++) {
//         if (val[index].email == this.state.email) {
//           console.log("yes");
//           exist = true;
//         } 
//       }
//         if(exist) {
//             alert('Email Already Exist');
//         }
//         else {
//           val.push({
//             email: this.state.email,
//             pass: this.state.pass,
//           });
//           localStorage.setItem('register',JSON.stringify(val));
//           window.location.href="Loginnew";
//         }
//       } else {
//         val.push({
//           email: this.state.email,
//           pass: this.state.pass,
//         });
//         localStorage.setItem('register',JSON.stringify(val));
//         window.location.href="Loginnew";
//       }
    
// }

//   render() {
//     return (
//       <div>
//         <label>email</label>
//         <input type="email" onChange={this.onemail} />
//         <label>password</label>
//         <input type="password" value={this.state.pass} onChange={this.onpass} />
//         <button onClick={this.clicks}>click</button>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react'

export default class regisration extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email : '',
      pass : '', 
      array : []
    }
  }
  onemail = (e) => {
    this.setState({email : e.target.value})
  }
  onpass = (e) => {
    this.setState({pass: e.target.value})
  }
  click = (e) => {
    // let array = JSON.parse(localStorage.getItem('array'));
    let array = localStorage.getItem('register') ? JSON.parse(localStorage.getItem('register')) : []
    if(array.length > 0) {
      let exist = false;
      for (let index = 0; index < array.length; index++) {
        if(array[index].email == this.state.email) {
          exist = true;
        }
      }
      if(exist) {
          alert('Email Already Exist');
      } else {
        array.push({
          email : this.state.email,
          pass:  this.state.pass,
        })
        localStorage.setItem('register',JSON.stringify(array));
        window.location.href="Loginnew"
      }
    } else {
      array.push({
        email: this.state.email,
        pass: this.state.pass,
      })
      localStorage.setItem('register',JSON.stringify(array))
      window.location.href="Loginnew"
    }
  }
  render() {
    return (
      <div>
        <label>Email</label>
        <input type="email" value={this.state.email} onChange={this.onemail} />
        <label>Password</label>
        <input type="password" value={this.state.pass} onChange={this.onpass} />
        <button onClick={this.click}>Click</button>
      </div>
    )
  }
}
