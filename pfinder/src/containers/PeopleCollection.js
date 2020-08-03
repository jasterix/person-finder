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
    //   <div className="collection">
      <div>
      <br />
 
           
        {person}
      </div>
    )
  }
}

export default PersonCollection
