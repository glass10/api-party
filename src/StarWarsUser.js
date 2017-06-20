import React, { Component } from 'react'
import './GithubUser.css'

let self;

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
    self = this;
  }

  fetchUserData = (props) => {
    fetch(`http://swapi.co/api/people/?search=${props.match.params.name}`)
      .then(response => response.json())
      .then(function(data){
        console.log(data);
        const user = data.results[0];
        self.setState({ user })
      })
    //   .then(user => this.setState({ user }))
    //   .then(response => console.log(response))
  }

  componentWillReceiveProps(nextProps) {
    const nameChanged = nextProps.name !== this.props.name
    if (nameChanged) {
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