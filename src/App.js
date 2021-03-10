import React from 'react'
import './App.css';

import { Provider} from 'react-redux'
import store from './redux/store'
import UserList from './Pages/UserList'
import AComp from './Pages/AComp'
import PostList from './Pages/PostList'

import {
  BrowserRouter,
  Switch,
  Route 
  
} from "react-router-dom";

import Header from './Header/Header'






/*  import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
 */
 


function App() {

return(

 <Provider  store={store}>




     <BrowserRouter> 
     <Header/>
          <Switch>
      
            <Route exact path="/" exact/> 
            <Route path="/UserList" component={UserList} />
            <Route path="/AComp" component={AComp}/>
            <Route path="/PostList" component={PostList}/>

          
          
          </Switch>
     
     </BrowserRouter>


{/* 
      <UserList />

 */}

  </Provider>


  );
}

export default App;
