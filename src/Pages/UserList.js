  
import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from '../redux/actions/userAction'

import 'bootstrap/dist/css/bootstrap.min.css'
/* import Button from 'react-bootstrap/Button' */
import Table from 'react-bootstrap/Table'






function UserList({userData}) {

    const dispatch = useDispatch()
    const users = useSelector(state => state.users)

    useEffect(() => {
        dispatch(fetchUsers()) 
      }, [])



      console.log('fetching')

      console.log(userData)

      console.log(users)

      return (

           <div> 

<>
                <Table striped bordered hover>
                  <thead>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Username</th>
                      <th>Email</th>
                      <th>City</th>
                      <th>Company</th>
                      <th>Phone</th>
                                       
                   </thead>

         
                 
          
                {users &&
                users.users.map(user=>

        
               <tr key={users}   striped bordered hover> 
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <td>{user.address.city}</td>
                <td>{user.company.name}</td>   
                <td>{user.phone}</td>
             
                </tr>

                 )} 
            </Table>  
</>

        </div>
      )
    }
export default UserList









{/* 


  const phrases = useSelector(state => state.phrases);
  return (
    <section>
      <h2>Key Phrases</h2>
      {phrases &&
        <ul>
          {phrases.map(phrase => (
            <li key={phrase}>{phrase}</li>
          ))}
        </ul>
      }


 */}



 {/* 
<Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
   
  </tbody>
</Table> */}


