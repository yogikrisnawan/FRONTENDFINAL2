import React from 'react'
import { Route, BrowserRouter, Switch }  from 'react-router-dom'

import Header from '../components/Header'
import Home from '../components/Home'
import Kharis from '../components/Kharis'
import Ghalib from '../components/Ghalib'
import NotFound from '../components/404'
import Arief from '../components/Arief'
import dhimasf from '../components/dhimasf'
import Yogikrisnawan from '../components/yogikrisnawan'
import Kunto from '../components/Kunto'
import Triv from '../components/Triv'
import Raditra from '../components/Raditra'
import Fadil from '../components/fadil'



export default function App() {
   return (
      <BrowserRouter>
         <div className="center">
            <Header/>
            <Switch>
               <Route path="/" exact component={Home}/>
               <Route path="/arief" component={Arief} />
               <Route path="/kharis" component={Kharis}/>
               <Route path="/dhimasf" component={dhimasf} />
               <Route path="/yogikrisnawan" exact component={Yogikrisnawan}/>
               <Route path="/kunto" component={Kunto} />
               <Route path="/raditra" exact component={Raditra}/>
               <Route path="/fadil" component={Fadil}/>
               <Route path="/ghalib" component={Ghalib}/>
               <Route path="/triv" component={Triv}/>

               <Route component={NotFound} />
               
            </Switch>
         </div>
      </BrowserRouter>
   )
}
