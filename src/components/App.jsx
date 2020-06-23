import React from 'react'
import { Route, BrowserRouter, Switch }  from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Kharis from '../components/Kharis'
import NotFound from '../components/404'

export default function App() {
   return (
      <BrowserRouter>
         <div className="center">
            <Header/>
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/kharis" component={Kharis}/>
               
               <Route component={NotFound} />
            </Switch>
         </div>
      </BrowserRouter>
   )
}
