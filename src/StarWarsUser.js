import React, { Component } from 'react'
import './GithubUser.css'

class StarWarsUser extends Component {
  state = {
    user: {
      name: '',
      birth_year: '',
      gender: '',
      hair_color: '',
      height: '',
      mass: '',
      url: ''
    }
  }
  constructor(props) {
    super(props)

    this.fetchUserData(this.props)
  }

  fetchUserData = (props) => {
    fetch(`https://api.github.com/users/${props.match.params.username}`)
      .then(response => response.json())
      .then(user => this.setState({ user }))
  }

  componentWillReceiveProps(nextProps) {
    const locationChanged = nextProps.location !== this.props.location
    if (locationChanged) {
      this.fetchUserData(nextProps)
    }
  }

  render() {
    const { user } = this.state
    return (
      <div className="github-user">
        <h2>{user.name}</h2>
        <h3>Birth Year: {user.birth_year}</h3>
        <h3>Gender: {user.gender}</h3>
        <h3>Hair Color: {user.hair_color}</h3>
        <h3>Height: {user.height}</h3>
        <h3>Mass: {user.mass}</h3>
        <a href={user.url}>Click to see more about {user.name}</a>
      </div>
    )
  }
}
export default StarWarsUser