import React from "react"
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PeopleCollection from "./PeopleCollection"

class PeopleIndex extends React.Component {
      state = {
    peopleList: [],
    unfilteredPeopleList: [],
    searchTerm: "",
    sortedList: []
  }

// Get list of people
  componentDidMount() {
    fetch("http://localhost:3000/people")
    .then(res => res.json())
    .then(data => {
        console.log(data)
      this.setState({peopleList: data})
      this.setState({unfilteredPeopleList: data})
    })
  }

  //---------------------------------PEOPLE SEARCH------------------------
  handleSearch = (event, data) => {
    this.setState({searchTerm: data.value})
    this.setState({
      peopleList: [...this.state.unfilteredPeopleList]
    })

    let allPeople = [...this.state.peopleList]

    let filteredPeople = allPeople.filter(people => people.name.includes(this.state.searchTerm)
  )
  this.setState({peopleList: filteredPeople})
}

  render(){
    
  return(

       <div>
        <h1>Person Finder</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 500)} />
        <br />

        <PeopleCollection
          personList={this.state.peopleList}
          />
        </div>
  
  )
}
}

export default PeopleIndex
