import React from 'react'
import { Route, BrowserRouter, Switch }  from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Ghalib from '../components/Ghalib'
import NotFound from '../components/404'
import NotFound from '../components/Raditra'

export default function App() {
   return (
      <BrowserRouter>
         <div className="center">
            <Header/>
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/raditra" exact component={Raditra}/>
               <Route path="/ghalib" component={Ghalib}/>
               <Route component={NotFound} />
            </Switch>
         </div>
      </BrowserRouter>
   )
}
