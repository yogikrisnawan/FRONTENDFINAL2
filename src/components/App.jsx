import React from 'react'
import { Route, BrowserRouter, Switch }  from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import NotFound from '../components/404'
import dhimasf from '../components/dhimasf'

export default function App() {
   return (
      <BrowserRouter>
         <div className="center">
            <Header/>
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/dhimasf" component={dhimasf} />
               <Route component={NotFound} />
            </Switch>
         </div>
      </BrowserRouter>
   )
}
