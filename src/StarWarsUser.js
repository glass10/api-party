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

    self = this;

    this.fetchUserData(this.props)
  }

  fetchUserData = (props) => {
    fetch(`http://swapi.co/api/people/?search=${props.match.params.name}`)
      .then(response => response.json())
      .then(function(data){
        const user = data.results[0];
        if(user === undefined){
            self.updateState();
        }
        else{
            self.setState({ user })
        }
      })
  }

  updateState(){
      const temp = {...this.state};
      temp.user.name = 'No Name Found';
      temp.user.birth_year = '?';
      temp.user.gender = '?';
      temp.user.hair_color = '?';
      temp.user.height = '?';
      temp.user.mass = '?';
      temp.user.url = '?';
      this.setState(temp);
  }

  componentWillReceiveProps(nextProps) {
    const nameChanged = nextProps !== this.props
    console.log(nameChanged)
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
        <h3>Height: {user.height}cm</h3>
        <h3>Mass: {user.mass}kg</h3>
        <a href={user.url}>Click to see more about {user.name}</a>
      </div>
    )
  }
}
export default StarWarsUser