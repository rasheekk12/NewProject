// import { useState, useEffect } from "react";

// const Heading = () =>{
//     const [users, setUsers] =useState([]);

//     const userFetchData =()=>{
//         fetch("https://jsonplaceholder.typicode.com/posts/1/comments")
//         .then(
//             response=>{
//                 return response.json();
//             })
//             .then(data => setUsers(data))
//     }
//     useEffect(()=>{
//         userFetchData()
//     },[])  

//     console.log(users);

//     return(
//         <>
//           <ul>
//                 {users.map(user => (
//                 <li>{user.name}</li>
//              ))}
//         </ul>
//         </>
//     );
// }

// export default Heading;