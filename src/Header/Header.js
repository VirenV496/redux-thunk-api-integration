import React from 'react'
import {Link} from 'react-router-dom'


const Header = () => {
    return (
   <nav>
          <ul>

                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/UserList">UserList</Link>
                </li>

                <li>
                  <Link to="/PostList">PostList</Link>
                </li>
 
              

                 <li>
                  <Link to="/AComp">ComponentA</Link>
                </li>

               
          </ul>
        </nav>

/* 
<Nav>

  <Nav.Item>
     <Link to="/">Home</Link>
  </Nav.Item>

  <Nav.Item>
  <Link to="/UserList">UserList</Link>
  </Nav.Item>

  <Nav.Item>
   <Link to="/Dump">UserList2</Link>
  </Nav.Item>

  <Nav.Item>
  <Link to="/AComp">ComponentA</Link>
  </Nav.Item>
 </Nav>
 */

    )
}

export default Header