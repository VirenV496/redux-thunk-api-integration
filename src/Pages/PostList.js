  
import React, { useEffect } from 'react'
import { useSelector, useDispatch} from 'react-redux'
import {fetchUsers} from '../redux/actions/PostAction'

import 'bootstrap/dist/css/bootstrap.min.css'
/* import Button from 'react-bootstrap/Button' */
import Table from 'react-bootstrap/Table'






function PostList({userData}) {

    const dispatch = useDispatch()
    const posts = useSelector(state => state.posts)

    useEffect(() => {
        dispatch(fetchUsers()) 
      }, [])



      console.log('fetching')


      console.log(posts)

      return (

           <div> 

<>
                <Table striped bordered hover>
                  <thead>
                      <th>UserID</th>
                      <th>ID</th>
                      <th>Title</th>
                      <th>Body</th>                                
                   </thead>                
          
                        {posts &&
                        posts.posts.map(post=>

                
                    <tr key={posts}   striped bordered hover> 
                        <td>{post.userId}</td>
                        <td>{post.id}</td>
                        <td>{post.title}</td>
                        <td>{post.body}</td>
                        
                        </tr>

                 )} 
            </Table>  
</>

        </div>
      )
    }
export default PostList


