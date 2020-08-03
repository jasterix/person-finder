import React from 'react'
import PersonCard from "../components/PersonCard.js"
import { Card } from 'semantic-ui-react'

class PersonCollection extends React.Component {

  render() {
      
      
    let person = this.props.peopleList.map(person => (
      <PersonCard key={person.id}
        person={person}
        />
    ))
    
    return (
      <Card.Group itemsPerRow={6}>
        <h1>Hello From People Collection</h1>
        <br />
        {person}
      </Card.Group>
    )
  }
}

export default PersonCollection
