import React from 'react'
// import { Card } from 'semantic-ui-react'

class PersonCard extends React.Component {

  render() {

let { person } = this.props

    return (
      <div className="personCard">
        
        
          <div className="item image">
            <img name={person.name} src={person.avatar} alt="avatar" />
</div>
<div className="details">
            <h2 className="item name">{person.name}</h2>
          <p className="item description">{person.description}
          </p>
          
          </div>
      </div>
    )
  }
}

export default PersonCard