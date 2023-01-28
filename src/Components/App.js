import React, {Component} from "react";
import CardList from "./CardList";
import SearchBox from "./SearchBox";
import Scroll from './Scroll.js';


import './App.css' ;

class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: [], 
            searchfield: ''
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => { return response.json();   })
            .then(users    => { this.setState( { robots: users} )  });
      }


    onSearchChange (event) {
        console.log(event.target.value);
        this.setState( {searchfield: event.target.value} )
    }



    render(){
        const { robots, searchfield } = this.state;

        const filtered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase() )
        }) 

         return !robots.length ? 
            <h1> It's Empty ... !</h1> :
            (
                <div className="tc">
                    <h1 className="f1"> RoboFriends </h1>

                    <SearchBox searchChange = {this.onSearchChange} />
                    
                    <Scroll> 
                        <CardList robots= {filtered} />
                    </Scroll>
                    
                </div>
            );
        }
    
}

export default App;