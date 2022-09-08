// import React, { Component } from 'react'
// import axios from 'axios'

// export default class Api extends Component {
//   state = {
//     precident: [],
//   }
//   componentDidMount(){
//     axios({
//       method: 'get',
//       url: 'https://api.sampleapis.com/presidents/presidents',
//       responseType: 'stream',
//     })
//     .then((precident) => {
//       this.setState({precident: precident.data})
//     });
//   }
//   render() {
//     return (
//       <table>
//         <thead>
//             <tr>
//               <th>id</th>
//               <th>name</th>
//             </tr>
//         </thead>
//         <tbody>
//           {this.state.precident.map(precident => 
//             <tr>
//               <td>{precident.id}</td>
//               <td>{precident.name}</td>
//             </tr>  
//           )}
//         </tbody>
//       </table>
//     )
//   }
// }


// function Api() {
//   const [todo, setTodo] = React.useState(null);
//   const [id, setId] = React.useState(1);
  
//   React.useEffect(() => {
//     if (id == null || id === '') {
//       return;
//     }
    
//     fetch('https://jsonplaceholder.typicode.com/todos/${id}')
//       .then(results => results.json())
//       .then(data => {
//         setTodo(data);
//       });
//   }, [id]); // useEffect will trigger whenever id is different.

//   return (
//     <div>
//       <input value={id} onChange={e => setId(e.target.value)}/>
//       <br/>
//       <pre>{JSON.stringify(todo, null, 2)}</pre>
//     </div>
//   );
// }

// ReactDOM.render(<Api />, document.querySelector('#app'));

// import React from 'react'
import React,{useEffect,useState} from 'react'
export default function api() {
  const [data,setdata]=useState([])
  useEffect(()=>{
      fetch("https://api.sampleapis.com/presidents/presidents").then((result)=>{
        result.json().then((resp)=>{
          setdata(resp)
        })
      })
  },[])
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item)=>
          <tr>
            <td>{item.id}</td>
            <td>{item.name}</td>
          </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
