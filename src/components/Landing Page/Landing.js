import React, {Component} from 'react'
import NavBar from '../Landing Page/NavBar'
import './Landing.css' 


export default class Landing extends Component {
    constructor() {
        super();
        this.state = {}
     }


     render() {
         return (
             <div className="landingPage">
             <nav>
                 <NavBar/>
             </nav>
             </div>
         )
     }
}

