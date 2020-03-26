import React, { Component } from 'react';
import { robots } from '../components/robots';
import CardList from "../components/CardList";
import SearchBox from '../components/SearchBox';
import "./App.css";
import 'tachyons';
import Scroll from '../components/Scroll';





class App extends Component {

    constructor() {
        super()
        this.state = {
            robots: robots,
            searchField: '',
            name: 'Kameshji'
        }
    }

    onSearchChange = (event) => {

        this.setState(
            {
                searchField: event.target.value
            }
        )



    }

    render() {
        const {robots, searchField} = this.state;
        const filteredRobots = robots.filter(robots => {
            return robots.name.toLowerCase().includes(searchField.toLowerCase());
        })
        if (!robots.length) {
            return(
               <h1>Nope no one Headers</h1>
            );
        } else {


            return (
                <div className='tc'>
                    <h1 className="head big">Friends from and before....2k16</h1>
                    <div className='di' style={{ display: 'inline-block' }}>
                        <h2 className='white '>hey there..!! I'm
                        <div className='head di myname'>
                                Kameshji
                        </div>
                        and All these guys are my gang members....
                    </h2> 

                    </div>
                    <SearchBox searchChange={this.onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredRobots} />
                    </Scroll>


                </div>
            )
        }
    }

}

export default App;