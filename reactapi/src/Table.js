// import React, { Component } from 'react'

// export default class Table extends Component {

//   render() {
//     return (
//       <table>
//         <thead>
//         <tr>
//             <th>email</th>
//             <th>pass</th>
//         </tr>
//         </thead>
//         <tbody>
//         {JSON.parse(localStorage.getItem('register')).map((items,i)=>{
//             return(
//                 <tr>
//                     <td>{items.email}</td>
//                     <td>{items.pass}</td>
//                 </tr>
//             )
//         })}
//          </tbody>
//       </table>
//     )
//   }
// }


 import React, { Component } from 'react'
 
 export default class Table extends Component {
   render() {
     return (
      <table>
        <thead>
          <tr>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {JSON.parse(localStorage.getItem('register')).map((items, i)=>{
            return(
            <tr>
              <th>{items.email}</th>
              <th>{items.pass}</th>
            </tr>
            )
          })}  
        </tbody>
      </table>
     )
   }
 }
 