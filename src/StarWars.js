import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import './StarWars.css'

import StarWarsUser from './StarWarsUser'

class StarWars extends Component{
    state = {
        name: ''
    }

  handleChange = (ev) => {
    const name = ev.currentTarget.value
    this.setState({ name })
  }

  handleSubmit = (ev) => {
    ev.preventDefault()
    this.props.history.push(`/starwars/${this.state.name}`)
  }
    render(){
        return(
            <div className="starwars">
                <img className="starwars-logo" src="http://logos-download.com/wp-content/uploads/2016/09/Star_Wars_logo_logotype.png" alt="star wars logo"/>
                <form onSubmit={this.handleSubmit}>
                <div>
                    <input 
                    type="text"
                    value={this.state.name}
                    onChange={this.handleChange}
                    />
                </div>
                <div>
                    <button type="submit">May the force be with you</button>
                </div>
                </form>

                <Route exact path='/starwars' render={() => <h3>Enter a name in the Star Wars Universe</h3>} />
                <Route path='/starwars/:name' component={StarWarsUser} />
      </div>
        )
    }
}

export default StarWars