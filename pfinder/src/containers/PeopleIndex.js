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
    let search = this.state.searchTerm
    // console.log(typeof search)
    let filteredPeople = allPeople.filter(person=> person.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredPeople);
    // let filteredPeople = allPeople.filter(people => people.name.toLowerCase().includes(this.state.searchTerm))
  
  this.setState({peopleList: filteredPeople})
}

  render(){
    
  return(

       <div>
        <h1>Person Finder</h1>
        <br />
        <Search onSearchChange={_.debounce(this.handleSearch, 100)} />
        <div className="peopleCollection">
        <PeopleCollection
          peopleList={this.state.peopleList}
          />
          </div>
        </div>
  
  )
}
}

export default PeopleIndex
