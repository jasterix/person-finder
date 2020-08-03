import React from 'react'
import { Card } from 'semantic-ui-react'

class PersonCard extends React.Component {

  render() {


    return (
      <Card >
        <div  >
          <div className="image">
            <img name={this.props.person.name} src={this.props.person.avatar} alt="avatar" />
          </div>

          <div className="content">
            <div className="header">{this.props.person.name}</div>
          </div>
          <div className="extra content">
            
            <div>
            <span>
              {/* Weight : {this.props.person.weight} */}
            </span>
            </div>
          </div>
          </div>

      </Card>
    )
  }
}

export default PersonCard

  
  // <tr>
  //     <td>{this.props.name}</td>
  //     <td>{this.props.avatar}</td>
  //     <td>{this.props.description}</td>
  //   </tr>